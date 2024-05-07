const convertASLToReactFlow = require('../utils/aslConvertion')
const modelo1 = require('../data/state_default.json')
const modelo2 = require('../data/state_2_condition_parallel.json')
const modelo3 = require('../data/state_condition_inside_condition.json')

const initialState = (example) => {
  const map = {
    undefined: modelo1,
    "Exemplo 1": modelo3,
    "Exemplo 2": modelo2,
    "Exemplo 3": modelo1,
  }
  
  const { nodes, edges } = convertASLToReactFlow(map[example])

  return {
    nodes,
    edges,
    menu: [
      { label: "Ação", icon: "bi-skip-end-circle-fill", type: 'DefaultNode' },
      { label: "Condição", icon: "bi-question-circle-fill", type: 'DefaultNode' },
      { label: "Wait", icon: "bi-sign-stop-fill", type: 'DefaultNode' },
      { label: "Loop", icon: "bi-arrow-repeat", type: 'DefaultNode' },
      { label: "Paralelo", icon: "bi-pc-display-horizontal", type: 'DefaultNode' },
      { label: "Fluxo Externo", icon: "bi-pass-fill", type: 'DefaultNode' },
    ]
  }
}

module.exports = { initialState }