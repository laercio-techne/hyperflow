import Button, { ButtonType } from "components/Buttonv2";
import { useDispatch } from "react-redux";
import {
  ConnectionStatus,
  handleDevModeState,
} from "reducers/flow-builder.reducer";
import { useAppSelector } from "store/hooks";
import FlowBuilderModal from "../Elements/FlowBuilderModal";
import { ChromeIcon, TutorialImage } from "../Icons";
import ExclamationTriangleIcon from "@heroicons/react/20/solid/ExclamationTriangleIcon";
import { Link } from "react-router-dom";

interface FlowBuilderDevModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FlowBuilderDevModeModal = ({
  isOpen,
  onClose,
}: FlowBuilderDevModeModalProps) => {
  const { devModeState, nodes } = useAppSelector((state) => state.flowBuilder);
  const dispatch = useDispatch();

  return (
    <FlowBuilderModal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-[600px] w-full p-5"
    >
      {devModeState.status === ConnectionStatus.Error ? (
        <>
          <div className="mb-[8px] flex justify-center text-[#F43F5E]">
            <ExclamationTriangleIcon className="w-[28px] h-[28px]" />
          </div>
          <div className="mb-[8px] text-center text-[#111827] font-inter font-semibold leading-[24px]">
            Fail to connect event provider
          </div>
          <div className="text-center text-gray-900 text-sm font-normal font-inter leading-snug">
            It appears that your Event Provider hasn't been connected to yet.
          </div>
          <div className="w-full py-5 flex flex-col gap-[10px]">
            <div className="p-[10px] bg-[#F3F4F6] flex justify-between items-center w-full rounded-lg">
              <div className="text-black text-sm font-semibold font-inter leading-snug">
                Step 1. Initiate the connection process.
              </div>
              <Link to="/settings/javascript-snippet" target="_blank">
                <Button
                  type={ButtonType.PRIMARY}
                  className="!border-[#E5E7EB] !text-[white]"
                  onClick={() => null}
                >
                  Go to connect
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-end gap-2">
            <Button
              type={ButtonType.SECONDARY}
              className="!border-[#E5E7EB] !text-[#111827]"
              onClick={() =>
                dispatch(
                  handleDevModeState({
                    status: ConnectionStatus.Disabled,
                  })
                )
              }
            >
              Cancel
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-[8px] text-center text-[#111827] font-inter font-semibold leading-[24px]">
            Getting Started with Developer Mode
          </div>
          <div className="text-center text-gray-900 text-sm font-normal font-inter leading-snug">
            Welcome to Developer Mode! You can test and edit easily with this
            mode.
          </div>
          <div className="w-full py-5 flex flex-col gap-[10px]">
            <div className="p-[10px] bg-[#F3F4F6] flex justify-between items-center w-full rounded-lg">
              <div className="text-black text-sm font-semibold font-inter leading-snug mb-[10px]">
                Step 1 <br />
                <span className="font-normal">
                  Launch your application locally
                </span>
              </div>
              <ChromeIcon />
            </div>
            <div className="p-[10px] bg-[#F3F4F6] flex justify-between items-center w-full rounded-lg">
              <div className="text-black text-sm font-semibold font-inter leading-snug mb-[10px]">
                Step 2 <br />
                <span className="font-normal">Use key or shortcuts to nav</span>
              </div>
              <TutorialImage />
            </div>
          </div>
        </>
      )}
    </FlowBuilderModal>
  );
};

export { FlowBuilderDevModeModal };
