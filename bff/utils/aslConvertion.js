const uniqid = require('uniqid')
const dagre = require('@dagrejs/dagre')

const convertASLToReactFlow = () => ({
  states: null,
  parentId: null,
  choiceId: null,
  flow: {
    nodes: [],
    edges: []
  },
  icon: "bi-people-fill",
  position: { x: 0, y: 0 },
  nodeWidth: 180,
  nodeHeight: 50,
  newNode({ label, type, ...props }) {
    return {
      id: uniqid(),
      data: {
        label,
        icon: this.icon
      },
      position: this.position,
      type: type || "DefaultNode",
      ...props,
    }
  },
  initializeFlow(States) {
    this.states = States
  },
  createNode({ type, ...props }) {
    const { Label, Type } = this.states[props.actualState]
    const node = this.newNode({ ...props, label: Label, type, Type })
    
    this.flow.nodes.push(node)

    if (this.parentId) {
      this.flow.edges.push({ 
        id: uniqid(), 
        source: this.parentId, 
        target: node.id, 
        type: "LinkEdges",
        ...(props.conditional !== undefined && { conditional: props.conditional }) 
      })
    }
    return node.id
  },
  choice({ Choices, parentId, ...props }) {
    Choices.forEach((choice) => {
      const { Next, Choices } = this.states[choice.Next]

      this.parentId = parentId
      this.parentId = this.createNode({ 
        ...props, 
        actualState: choice.Next,
        conditional: JSON.parse(choice.StringEquals)
      })

      if (Choices) this.choice({ ...props, Choices, parentId: this.parentId })
      Next && this.traverseStates({ ...props, actualState: Next, type: "DefaultNode" })
    })
  },
  traverseStates({ ...props }) {
    const { Next, Choices } = this.states[props.actualState]
    const parentId = this.createNode({ ...props })
    this.parentId = parentId

    Choices && this.choice({ ...props, Choices, parentId })
    Next && this.traverseStates({ ...props, actualState: Next, type: "DefaultNode" })
  },
  calculePosition() {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({ rankdir: "TB" });

    this.flow.nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: this.nodeWidth, height: this.nodeHeight });
    });

    this.flow.edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    this.flow.nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = 'top';
      node.sourcePosition = 'bottom';

      node.position = {
        x: nodeWithPosition.x - this.nodeWidth / 2,
        y: nodeWithPosition.y - this.nodeHeight / 2,
      };

      return node;
    });

  }
});

module.exports = ({ States, StartAt }) => {
  const convertASL = convertASLToReactFlow()
  convertASL.initializeFlow(States)
  convertASL.traverseStates({ actualState: StartAt, type: "InputNode" })
  convertASL.calculePosition()
  return convertASL.flow
}