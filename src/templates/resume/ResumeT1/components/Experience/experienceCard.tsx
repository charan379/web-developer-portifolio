import React from "react";
import Designation from "./designation";

const ExperienceCard: React.FC<ComponentProps> = (props) => {
  const { className, appendDefaultClassName, style } = props;
  return (
    // Card Container
    <div className="px-2">
      {/* Organization and working years */}
      <div className="flex flex-row justify-between">
        {/* org name */}
        <h3 className="text-lg font-bold font-montserrat text-gray-700">
          Company / Organigation Name
        </h3>
        {/* working years */}
        <span className="min-w-max font-bold">2022 - 2023</span>
      </div>
      {/* Designation tree */}
      <Designation />
      <Designation />
    </div>
  );
};

export default ExperienceCard;
