import MulisplitSettings from "./settings/MulisplitSettings";
import { Transition } from "@headlessui/react";
import { ReactNode, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import {
  changeNodeData,
  deselectNodes,
  setRequireSaveEmit,
} from "reducers/flow-builder.reducer";
import { useAppDispatch, useAppSelector } from "store/hooks";
import deepCopy from "utils/deepCopy";
import Button, {
  ButtonType,
} from "../../../components/Buttonv2";
import { NodeType } from "../FlowEditor";
import FlowBuilderDeleteModal from "../Modals/FlowBuilderDeleteModal";
import FlowBuilderSaveTrackerModal from "../Modals/FlowBuilderSaveTrackerModal";
import { MessageNodeData, NodeData } from "../Nodes/NodeData";
import MessageSettings from "./settings/MessageSettings";
import TimeDelaySettings from "./settings/TimeDelaySettings";
import TimeWindowSettings from "./settings/TimeWindowSettings";
import TrackerSettings from "./settings/TrackerSettings";
import UserAttributeSettings from "./settings/UserAttributeSettings";
import WaitUntilSettings from "./settings/WaitUntilSettings";
import JumpToSettings from "./settings/JumpToSettings";
import { isEqual } from "lodash";
import Modal from "components/Modal";
import { MessageType } from "types/Workflow";
import { Node } from "reactflow";
import ExperimentNodeSettings from "./settings/ExperimentNodeSettings";

export interface SidePanelComponentProps<T extends NodeData = NodeData> {
  nodeData: T;
  setNodeData: (nodeData: T) => void;
  setIsError: (value: boolean) => void;
  showErrors: boolean;
}


const FlowBuilderSidePanel: any = ({ className }: any) => {
  const { nodes, sidePanelErrors } = useAppSelector(
    (state: any) => state.flowBuilder
  );

  const dispatch = useAppDispatch();

  const [selectedNode, setSelectedNode] = useState<
    Node<NodeData, string | undefined> | undefined
  >(undefined);

  const [nodeData, setNodeData] = useState<NodeData>(
    deepCopy({ ...selectedNode?.data })
  );
  const [initialNodeData, setInitialNodeData] = useState<NodeData>(
    deepCopy({ ...selectedNode?.data })
  );
  const [needCancelConfirmation, setNeedCancelConfirmation] = useState(false);
  const [messageRenameModalShow, setMessageRenameModalShow] = useState(false);
  const [isTrackerModalSaveOpen, setIsTrackerModalSaveOpen] = useState(false);

  useEffect(() => {
    setNodeData(deepCopy({ ...selectedNode?.data }));
    setInitialNodeData(deepCopy({ ...selectedNode?.data }));
  }, [selectedNode]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const nodeToSettingsComponentMap: Record<string, ReactNode> = {
    [NodeType.MESSAGE]: (
      <>
        {nodeData.type === NodeType.MESSAGE && (
          <MessageSettings
            nodeData={nodeData}
            setNodeData={setNodeData}
            setIsError={setIsError}
            showErrors={showErrors}
          />
        )}
      </>
    ),
    [NodeType.PUSH]: (
      <>
        {nodeData.type === NodeType.PUSH && (
          <MessageSettings
            nodeData={nodeData as MessageNodeData<MessageType>}
            setNodeData={setNodeData}
            setIsError={setIsError}
            showErrors={showErrors}
          />
        )}
      </>
    ),
    [NodeType.WAIT_UNTIL]: (
      <>
        {nodeData.type === NodeType.WAIT_UNTIL && (
          <WaitUntilSettings
            nodeData={nodeData}
            setNodeData={setNodeData}
            setIsError={setIsError}
            showErrors={showErrors}
          />
        )}
      </>
    ),
    [NodeType.EXPERIMENT]: (
      <>
        {nodeData.type === NodeType.EXPERIMENT && (
          <div className="p-5">
            <ExperimentNodeSettings
              nodeData={nodeData}
              setNodeData={setNodeData}
              setIsError={setIsError}
              showErrors={showErrors}
            />
          </div>
        )}
      </>
    ),
    [NodeType.TIME_DELAY]: (
      <>
        {nodeData.type === NodeType.TIME_DELAY && (
          <div className="p-5">
            <TimeDelaySettings
              nodeData={nodeData}
              setNodeData={setNodeData}
              setIsError={setIsError}
              showErrors={showErrors}
            />
          </div>
        )}
      </>
    ),
    [NodeType.TIME_WINDOW]: (
      <>
        {nodeData.type === NodeType.TIME_WINDOW && (
          <div className="p-5">
            <TimeWindowSettings
              nodeData={nodeData}
              setNodeData={setNodeData}
              setIsError={setIsError}
              showErrors={showErrors}
            />
          </div>
        )}
      </>
    ),
    [NodeType.USER_ATTRIBUTE]: (
      <>
        {nodeData.type === NodeType.USER_ATTRIBUTE && (
          <div className="p-5">
            <UserAttributeSettings
              nodeData={nodeData}
              setNodeData={setNodeData}
              setIsError={setIsError}
              showErrors={showErrors}
            />
          </div>
        )}
      </>
    ),
    [NodeType.TRACKER]: (
      <>
        {nodeData.type === NodeType.TRACKER && (
          <div className="p-5">
            <TrackerSettings
              nodeData={nodeData}
              setNodeData={setNodeData}
              setIsError={setIsError}
              showErrors={showErrors}
            />
          </div>
        )}
      </>
    ),
    [NodeType.JUMP_TO]: (
      <>
        {nodeData.type === NodeType.JUMP_TO && selectedNode && (
          <div className="p-5">
            <JumpToSettings
              nodeData={nodeData}
              setNodeData={setNodeData}
              setIsError={setIsError}
              showErrors={showErrors}
              nodeId={selectedNode.id}
            />
          </div>
        )}
      </>
    ),
    [NodeType.MULTISPLIT]: (
      <>
        {nodeData.type === NodeType.MULTISPLIT && (
          <div className="p-5">
            <MulisplitSettings
              setIsError={setIsError}
              showErrors={showErrors}
              nodeData={nodeData}
              setNodeData={setNodeData}
            />
          </div>
        )}
      </>
    ),
  };

  const onCancel = () => {
    if (!isEqual(nodeData, initialNodeData)) {
      setNeedCancelConfirmation(true);
      return;
    }

    if (selectedNode) {
      dispatch(
        changeNodeData({
          id: selectedNode.id,
          data: { ...initialNodeData, showErrors: true },
        })
      );
    }

    dispatch(deselectNodes());
  };

  const onSave = () => {
    dispatch(setRequireSaveEmit(true));
    setTimeout(async () => {
      dispatch(setRequireSaveEmit(false));
      if (!!Object.keys(sidePanelErrors).length) return;

      if (isError) {
        setShowErrors(true);
        return;
      }

      if (
        nodeData.type === NodeType.TRACKER &&
        nodeData.tracker &&
        selectedNode?.data.type === NodeType.TRACKER &&
        selectedNode.data.tracker &&
        nodeData.tracker.trackerTemplate.id !==
          selectedNode.data.tracker.trackerTemplate.id &&
        nodes.some(
          (node: any) =>
            node.data.type === NodeType.TRACKER &&
            node.id !== selectedNode.id &&
            node.data.tracker?.trackerId === nodeData.tracker?.trackerId
        )
      ) {
        setIsTrackerModalSaveOpen(true);
        return;
      }

      if (selectedNode)
        dispatch(
          changeNodeData({
            id: selectedNode.id,
            data: { ...nodeData, showErrors: true },
          })
        );

      dispatch(deselectNodes());
    }, 0);
  };

  useEffect(() => {
    if (nodeData.type !== NodeType.TRACKER || !selectedNode) return;
  }, [nodeData]);

  useEffect(() => {
    setSelectedNode(nodes.find((node: any) => node.selected));
  }, [nodes]);

  const isOpen =
    selectedNode &&
    ![NodeType.EMPTY, NodeType.START, NodeType.INSERT_NODE].includes(
      selectedNode.type as NodeType
    );

  return (
    <>
    {isOpen && (
        <div
          id="flow-builder-sidepanel-cancel"
          className="fixed top-[60px] left-0 bg-[#111827] bg-opacity-20 w-full h-screen"
          onClick={onCancel}
        />
      )}

      <Modal
        isOpen={needCancelConfirmation}
        onClose={() => setNeedCancelConfirmation(false)}
        closeButtonNeed={false}
        panelClass="!rounded-none !p-[32px] !pb-[24px]"
        childrenClass="-mt-2 !p-0 max-w-[352px]"
      >
        <>
          <div className="flex mb-[24px]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_493_18800)">
                <path
                  d="M11 0C4.92545 0 0 4.92545 0 11C0 17.0746 4.92545 22 11 22C17.0746 22 22 17.0746 22 11C22 4.92545 17.0746 0 11 0ZM11 20.1339C5.9567 20.1339 1.86607 16.0433 1.86607 11C1.86607 5.9567 5.9567 1.86607 11 1.86607C16.0433 1.86607 20.1339 5.9567 20.1339 11C20.1339 16.0433 16.0433 20.1339 11 20.1339Z"
                  fill="#F43F5E"
                />
                <path
                  d="M9.82104 15.3214C9.82104 15.634 9.94522 15.9338 10.1662 16.1548C10.3873 16.3758 10.687 16.5 10.9996 16.5C11.3122 16.5 11.612 16.3758 11.833 16.1548C12.054 15.9338 12.1782 15.634 12.1782 15.3214C12.1782 15.0089 12.054 14.7091 11.833 14.4881C11.612 14.267 11.3122 14.1429 10.9996 14.1429C10.687 14.1429 10.3873 14.267 10.1662 14.4881C9.94522 14.7091 9.82104 15.0089 9.82104 15.3214ZM10.4103 12.5714H11.5889C11.6969 12.5714 11.7853 12.483 11.7853 12.375V5.69643C11.7853 5.58839 11.6969 5.5 11.5889 5.5H10.4103C10.3023 5.5 10.2139 5.58839 10.2139 5.69643V12.375C10.2139 12.483 10.3023 12.5714 10.4103 12.5714Z"
                  fill="#F43F5E"
                />
              </g>
              <defs>
                <clipPath id="clip0_493_18800">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="ml-[16px] text-[#111827] font-roboto">
              <div className="font-medium leading-[24px] text-[16px]">
                You have unsaved changes
              </div>
              <div className="leading-[22px] text-[14px] mt-[8px]">
                Please save or discard the changes to continue.
              </div>
            </div>
          </div>
          <div className="flex justify-end flex-nowrap">
            <Button
              id="delete-node"
              type={ButtonType.DANGEROUS}
              onClick={() => {
                if (selectedNode) {
                  dispatch(
                    changeNodeData({
                      id: selectedNode.id,
                      data: { ...initialNodeData, showErrors: true },
                    })
                  );
                }
                setNeedCancelConfirmation(false);
                dispatch(deselectNodes());
              }}
              className="!px-[15px] !py-[4px] !rounded-none !text-[14px] !leading-[22px] font-inter mr-2"
            >
              Discard
            </Button>
            <Button
              id="delete-node"
              type={ButtonType.PRIMARY}
              onClick={() => {
                setNeedCancelConfirmation(false);
                onSave();
              }}
              className="!px-[15px] !py-[4px] !rounded-none !text-[14px] !leading-[22px] font-inter"
            >
              Save changes
            </Button>
          </div>
        </>
      </Modal>

      <Transition
        show={!!isOpen}
        as="div"
        className={`fixed h-[calc(100vh-60px)] min-w-[360px] w-[360px] right-0 bg-white border-l-[1px] border-[#E5E7EB] flex flex-col justify-between overflow-hidden`}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="h-full relative flex flex-col justify-stretch">
          <div className="p-5 border-b-[1px] flex flex-col gap-[5px]">
            <div className="font-inter flex items-center font-semibold text-[20px] leading-[28px]">
              <br />
            </div>
            <div className="font-inter font-normal text-[12px] leading-5 text-[#4B5563]">
          
            </div>
          </div>
          <div className="h-full max-h-full mb-[60px] overflow-y-hidden">
            <Scrollbars>
              {nodeToSettingsComponentMap[selectedNode?.type || ""]}
            </Scrollbars>
          </div>
        </div>
        <div className="absolute bottom-0 w-full min-h-[60px] h-[60px] py-[14px] px-5 border-t-[1px] flex justify-between items-center">
          <Button
            id="delete-node"
            type={ButtonType.LINK}
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Delete
          </Button>

          {selectedNode?.type !== NodeType.EXIT && (
            <div className="flex justify-end items-center gap-[10px]">
              <Button
                id="cancel-saving-node-data"
                type={ButtonType.SECONDARY}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                id="save-node-data"
                type={ButtonType.PRIMARY}
                onClick={onSave}
              >
                Save
              </Button>
            </div>
          )}
        </div>
        {selectedNode && (
          <FlowBuilderDeleteModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            selectedNode={selectedNode}
          />
        )}
        {nodeData.type === NodeType.TRACKER && (
          <FlowBuilderSaveTrackerModal
            isOpen={isTrackerModalSaveOpen}
            onClose={() => {
              setIsTrackerModalSaveOpen(false);
              onCancel();
            }}
            onYes={() => {
              if (selectedNode)
                dispatch(
                  changeNodeData({
                    id: selectedNode.id,
                    data: { ...nodeData, needsCheck: true, showErrors: true },
                  })
                );

              dispatch(deselectNodes());
            }}
          />
        )}
      </Transition>
    </>
  );
};

export default FlowBuilderSidePanel;
