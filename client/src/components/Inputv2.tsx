import clearInputIconImage from "assets/svg/clear-input-icon.svg";

const Input: any = ({
  value,
  onChange,
  className,
  wrapperClassName,
  showClearButton,
  ...props
}: any) => {
  return (
    <div
      className={`w-fit relative ${wrapperClassName ? wrapperClassName : ""}`}
    >
      <input
        className={`border border-[#E5E7EB] rounded px-[12px] py-[4px] font-roboto text-[14px] leading-[22px] text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#6366F1] outline-none ${
          showClearButton && value !== "" ? "!pr-[30px]" : ""
        } ${className ? className : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      {showClearButton && value !== "" && (
        <button
          className="absolute top-1/2 -translate-y-1/2 right-[12px]"
          onClick={() => onChange("")}
        >
          <img src={clearInputIconImage} />
        </button>
      )}
    </div>
  );
};

export default Input;
