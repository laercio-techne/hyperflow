import Button, { ButtonType } from "components/Elements/Buttonv2/Button";
import {
  AttributeBranch,
  AttributeCondition,
  LogicRelation,
} from "pages/FlowBuilderv2/Nodes/NodeData";
import React, { FC, useEffect, useState } from "react";
import deepCopy from "utils/deepCopy";
import AttributeConditionEditor from "./AttributeConditionEditor";

interface AttributeBranchEditorProps {
  branch: AttributeBranch;
  onAddCondition: () => void;
  onDeleteBranch: () => void;
  onConditionChange: (j: number, condition: AttributeCondition) => void;
  onDeleteCondition: (j: number) => void;
}

const AttributeBranchEditor: FC<AttributeBranchEditorProps> = ({
  branch,
  onAddCondition,
  onDeleteBranch,
  onConditionChange,
  onDeleteCondition,
}) => {
  const [conditionIndexToChange, setConditionIndexToChange] =
    useState<number>();
  const [initialConditionData, setInitialConditionData] = useState<
    AttributeCondition | undefined
  >();

  useEffect(() => {
    if (conditionIndexToChange !== undefined) {
      setInitialConditionData(
        deepCopy(branch.attributeConditions[conditionIndexToChange])
      );
    } else {
      setInitialConditionData(undefined);
    }
  }, [conditionIndexToChange]);

  return (
    <div className="flex flex-col gap-[10px]">
      {branch.attributeConditions.map((condition, i) => (
        <React.Fragment key={i}>
          {conditionIndexToChange === i ? (
            <AttributeConditionEditor
              condition={condition}
              onCancel={() => {
                if (initialConditionData) {
                  onConditionChange(i, initialConditionData);
                }
                setConditionIndexToChange(undefined);
              }}
              onSave={(changedCondition) => {
                onConditionChange(i, changedCondition);
                setConditionIndexToChange(undefined);
              }}
            />
          ) : (
            <div className="p-[10px] flex flex-col gap-[10px] bg-[#F3F4F6]">
              <div className="flex justify-between items-center">
                <div className="font-inter font-semibold text-[14px] leading-[22px]">
                  Attribute {i + 1}
                </div>
                <div className="flex gap-5 items-center">
                  <div
                    className="cursor-pointer"
                    onClick={() => setConditionIndexToChange(i)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3313_4950)">
                        <path
                          d="M3.45726 12.284C3.49297 12.284 3.52868 12.2805 3.5644 12.2751L6.56797 11.7483C6.60368 11.7412 6.63761 11.7251 6.66261 11.6983L14.2323 4.12868C14.2488 4.11216 14.2619 4.09254 14.2709 4.07094C14.2799 4.04934 14.2845 4.02618 14.2845 4.00279C14.2845 3.9794 14.2799 3.95625 14.2709 3.93464C14.2619 3.91304 14.2488 3.89342 14.2323 3.8769L11.2644 0.907254C11.2305 0.873326 11.1858 0.855469 11.1376 0.855469C11.0894 0.855469 11.0448 0.873326 11.0108 0.907254L3.44118 8.4769C3.4144 8.50368 3.39833 8.53583 3.39118 8.57154L2.8644 11.5751C2.84703 11.6708 2.85323 11.7692 2.88248 11.862C2.91173 11.9547 2.96314 12.0389 3.03225 12.1073C3.15011 12.2215 3.29833 12.284 3.45726 12.284ZM4.66083 9.16975L11.1376 2.69475L12.4465 4.00368L5.96976 10.4787L4.38226 10.759L4.66083 9.16975ZM14.5698 13.784H1.4269C1.11083 13.784 0.855469 14.0394 0.855469 14.3555V14.9983C0.855469 15.0769 0.919754 15.1412 0.998326 15.1412H14.9983C15.0769 15.1412 15.1412 15.0769 15.1412 14.9983V14.3555C15.1412 14.0394 14.8858 13.784 14.5698 13.784Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3313_4950">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => onDeleteCondition(i)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.28739 2.14118H5.14453C5.2231 2.14118 5.28739 2.0769 5.28739 1.99833V2.14118H10.716V1.99833C10.716 2.0769 10.7802 2.14118 10.8588 2.14118H10.716V3.4269H12.0017V1.99833C12.0017 1.36797 11.4892 0.855469 10.8588 0.855469H5.14453C4.51417 0.855469 4.00167 1.36797 4.00167 1.99833V3.4269H5.28739V2.14118ZM14.2874 3.4269H1.71596C1.39989 3.4269 1.14453 3.68225 1.14453 3.99833V4.56975C1.14453 4.64833 1.20882 4.71261 1.28739 4.71261H2.36596L2.80703 14.0519C2.8356 14.6608 3.33917 15.1412 3.9481 15.1412H12.0552C12.666 15.1412 13.1677 14.6626 13.1963 14.0519L13.6374 4.71261H14.716C14.7945 4.71261 14.8588 4.64833 14.8588 4.56975V3.99833C14.8588 3.68225 14.6035 3.4269 14.2874 3.4269ZM11.9177 13.8555H4.0856L3.65346 4.71261H12.3499L11.9177 13.8555Z"
                        fill="#111827"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {condition.statements.map((statement, k) => (
                <React.Fragment key={k}>
                  <div
                    className="font-inter font-normal text-[14px] leading-[22px]"
                    key={k}
                  >
                    "{statement.key}" {statement.comparisonType} "
                    {String(statement.value)}"
                  </div>
                  {k !== condition.statements.length - 1 && (
                    <select
                      value={statement.relationToNext}
                      onChange={(e) => {
                        const newStatements = [...condition.statements];

                        newStatements[k] = {
                          ...statement,
                          relationToNext: e.target.value as LogicRelation,
                        };

                        onConditionChange(i, {
                          ...condition,
                          statements: newStatements.map((el) => ({
                            ...el,
                            relationToNext: e.target.value as LogicRelation,
                          })),
                        });
                      }}
                      className="border border-[#E5E7EB] max-w-[80px] px-[15px] py-[4px] rounded font-roboto font-normal text-[14px] leading-[22px]"
                    >
                      <option value={LogicRelation.AND}>And</option>
                      <option value={LogicRelation.OR}>Or</option>
                    </select>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
          {i !== branch.attributeConditions.length - 1 && (
            <select
              value={condition.relationToNext}
              onChange={(e) =>
                onConditionChange(i, {
                  ...condition,
                  relationToNext: e.target.value as LogicRelation,
                })
              }
              className="border border-[#E5E7EB] max-w-[80px] px-[15px] py-[4px] rounded font-roboto font-normal text-[14px] leading-[22px]"
            >
              <option value={LogicRelation.AND}>And</option>
              <option value={LogicRelation.OR}>Or</option>
            </select>
          )}
        </React.Fragment>
      ))}

      <div className="flex gap-[10px]">
        <Button
          type={ButtonType.LINK}
          onClick={() => {
            onAddCondition();
            setConditionIndexToChange(branch.attributeConditions.length - 1);
          }}
        >
          Add attribute
        </Button>

        <Button
          type={ButtonType.LINK}
          onClick={onDeleteBranch}
          className="text-[#EB5757] hover:text-[#EB5757] focus:text-[#EB5757]"
        >
          Delete branch
        </Button>
      </div>
    </div>
  );
};

export default AttributeBranchEditor;
