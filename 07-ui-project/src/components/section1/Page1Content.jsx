import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = () => {
  return (
    <div className="h-[90vh] flex items-center justify-between pt-6 pb-15 px-18 gap-8">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page1Content;
