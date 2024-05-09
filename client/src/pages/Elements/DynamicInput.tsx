import Input from "components/Inputv2";
import Select from "components/Selectv2";
import { ReactNode, useEffect, useState } from "react";
import { StatementValueType } from "reducers/flow-builder.reducer";
import { ArrayComponent } from "./ArrayComponent";

const BooleanComponent: any = ({
  value,
  onChange,
  dataTestId,
}: any) => {
  return (
    <Select
      placeholder="value"
      value={value}
      options={[
        { key: true, title: "true" },
        { key: false, title: "false" },
      ]}
      onChange={(v) => onChange(v)}
      dataTestId={`${dataTestId}-boolean`}
    />
  );
};

export enum DateRelativeUnit {
  DAYS = "days",
  WEEKS = "weeks",
}

export enum DateRelativePoint {
  FROM_NOW = "from-now",
  AGO = "ago",
}

export const DateComponent: any = ({ value, onChange, isRelativeDate, onlyDate, dataTestId }: any) => {
  const [relativeCount, setRelativeCount] = useState(0);
  const [relativeUnit, setRelativeUnit] = useState<DateRelativeUnit>(
    DateRelativeUnit.DAYS
  );
  const [relativePoint, setRelativePoint] = useState<DateRelativePoint>(
    DateRelativePoint.FROM_NOW
  );

  useEffect(() => {
    if (!isRelativeDate) return;

    const [newRelativeCount, newRelativeUnit, newRelativePoint] =
      value.split(" ");

    if (!isNaN(+newRelativeCount)) setRelativeCount(+newRelativeCount);
    if (
      newRelativeUnit === DateRelativeUnit.DAYS ||
      newRelativeUnit === DateRelativeUnit.WEEKS
    )
      setRelativeUnit(newRelativeUnit);

    if (
      newRelativePoint === DateRelativePoint.AGO ||
      newRelativePoint === DateRelativePoint.FROM_NOW
    )
      setRelativePoint(newRelativePoint);
  }, [value]);

  useEffect(() => {
    if (!isRelativeDate) return;

    onChange(`${relativeCount} ${relativeUnit} ${relativePoint}`);
  }, [relativeCount, relativeUnit, relativePoint]);

  if (!isRelativeDate) {
    let relativeValue = "";

    try {
      relativeValue = new Date(
        new Date(value).getTime() - new Date().getTimezoneOffset() * 60 * 1000
      )
        .toISOString()
        .slice(0, 16);

      if (onlyDate) relativeValue = relativeValue.split("T")[0];
    } catch (e) {}

    return (
      <input
        value={relativeValue}
        onChange={(e) => onChange(new Date(e.target.value).toUTCString())}
        type={onlyDate ? "date" : "datetime-local"}
        className="min-w-[250px] w-full h-[32px] px-[12px] py-[5px] font-roboto text-[14px] leading-[22px] rounded-sm border border-[#E5E7EB]"
        placeholder="Select time"
        data-testid={dataTestId}
      />
    );
  }

  return (
    <div className="flex gap-2.5">
      <Input
        value={String(relativeCount)}
        onChange={(numString: any) => {
          const num = +numString;
          if (isNaN(num) || num < 0) return;

          setRelativeCount(num);
        }}
        type="number"
        id="relative-days-dynamic-input"
      />
      <Select
        value={relativeUnit}
        onChange={(relativeUn: any) => setRelativeUnit(relativeUn)}
        options={Object.values(DateRelativeUnit).map((relativeUn) => ({
          key: relativeUn,
          title: relativeUn,
        }))}
        dataTestId={`${dataTestId}-relative-unit`}
      />
      <Select
        value={relativePoint}
        onChange={(val: any) => setRelativePoint(val)}
        options={[
          { key: DateRelativePoint.FROM_NOW, title: "from now" },
          { key: DateRelativePoint.AGO, title: "ago" },
        ]}
        dataTestId={`${dataTestId}-relative-point`}
      />
    </div>
  );
};

const EmailComponent: any = ({ value, onChange, dataTestId }: any) => {
  return (
    <input
      type="text"
      placeholder="value"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-[12px] py-[5px] font-inter font-normal text-[14px] leading-[22px] border border-[#E5E7EB] placeholder:font-inter placeholder:font-normal placeholder:text-[14px] placeholder:leading-[22px] placeholder:text-[#9CA3AF] rounded-sm"
      data-testid={dataTestId}
    />
  );
};

const NumberComponent: any = ({ value, onChange, dataTestId }: any) => {
  return (
    <input
      type="number"
      placeholder="value"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-[12px] py-[5px] font-inter font-normal text-[14px] leading-[22px] border border-[#E5E7EB] placeholder:font-inter placeholder:font-normal placeholder:text-[14px] placeholder:leading-[22px] placeholder:text-[#9CA3AF] rounded-sm"
      data-testid={dataTestId}
    />
  );
};

const StringComponent: any = ({
  value,
  placeholder = "",
  onChange,
  dataTestId,
}: any) => {
  return (
    <input
      type="text"
      placeholder={placeholder || "value"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-[12px] py-[5px] font-inter font-normal text-[14px] leading-[22px] border border-[#E5E7EB] placeholder:font-inter placeholder:font-normal placeholder:text-[14px] placeholder:leading-[22px] placeholder:text-[#9CA3AF] rounded-sm"
      data-testid={dataTestId}
    />
  );
};

const DynamicInput: any = ({
  type,
  isArray,
  value,
  placeholder,
  onChange,
  isRelativeDate,
  dateFormat,
  dataTestId,
}: any) => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  const defaultValuesMap: Record<StatementValueType, string> = {
    [StatementValueType.BOOLEAN]: "true",
    [StatementValueType.DATE]: new Date().toUTCString(),
    [StatementValueType.DATE_TIME]: new Date().toUTCString(),
    [StatementValueType.EMAIL]: "email@gmail.com",
    [StatementValueType.NUMBER]: "0",
    [StatementValueType.STRING]: "",
    [StatementValueType.ARRAY]: JSON.stringify([]),
    [StatementValueType.OBJECT]: "",
  };

  const valueTypeToComponentMap: Record<StatementValueType, ReactNode> = {
    [StatementValueType.BOOLEAN]: (
      <BooleanComponent
        value={value}
        onChange={onChange}
        dataTestId={dataTestId}
      />
    ),
    [StatementValueType.DATE]: (
      <DateComponent
        value={value}
        onChange={onChange}
        isRelativeDate={isRelativeDate}
        onlyDate
        dataTestId={dataTestId}
      />
    ),
    [StatementValueType.DATE_TIME]: (
      <DateComponent
        value={value}
        onChange={onChange}
        isRelativeDate={isRelativeDate}
        dataTestId={dataTestId}
      />
    ),
    [StatementValueType.EMAIL]: (
      <EmailComponent
        value={value}
        onChange={onChange}
        dataTestId={dataTestId}
      />
    ),
    [StatementValueType.NUMBER]: (
      <NumberComponent
        value={value}
        onChange={onChange}
        dataTestId={dataTestId}
      />
    ),
    [StatementValueType.STRING]: (
      <StringComponent
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        dataTestId={dataTestId}
      />
    ),
    [StatementValueType.ARRAY]: (
      <StringComponent
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        dataTestId={dataTestId}
      />
    ),
    [StatementValueType.OBJECT]: (
      <StringComponent
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        dataTestId={dataTestId}
      />
    ),
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    onChange(defaultValuesMap[type]);
  }, [type]);

  const dynamicComponent = valueTypeToComponentMap[type];

  return (
    <>
      {isArray ? (
        <ArrayComponent
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          dateFormat={dateFormat}
          dataTestId={dataTestId}
        />
      ) : (
        dynamicComponent
      )}
    </>
  );
};

export default DynamicInput;
