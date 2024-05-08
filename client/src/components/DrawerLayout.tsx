import { FC, ReactNode } from "react";

const DrawerLayout: any = ({ children }: any) => {
  return (
    <div className="flex w-full max-h-screen h-screen">
      <div className={`w-full max-h-screen h-screen bg-[#F3F4F6]`}>
        <div className="h-[calc(100%)] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default DrawerLayout;
