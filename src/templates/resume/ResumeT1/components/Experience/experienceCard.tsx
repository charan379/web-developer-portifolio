import React from "react";
import Designation from "./designation";
import Text from "@/components/Text";
import getNumberOfYearsAndMonthsBetweenDates from "@/lib/utils/getNumberOfYearsAndMonthsBetweenDates";
import Heading2 from "../Headings/heading2";
import Duration from "../duration";
import TimePeriod from "../timePeriod";


const ExperienceCard: React.FC<Partial<IExperience>> = (props) => {
  const { companyName, joiningData, relievingDate, location, type, display, designations } = props;
  return (
    // Card Container
    <div className="px-0 mb-2">
      {/* Organization and working years */}
      <div className="flex flex-row justify-between">
        {/* org name */}
        <Heading2>{companyName}</Heading2>
        {/* working years */}
        <TimePeriod fromYear={joiningData} toYear={relievingDate} />
      </div>
      {/* duration */}
      <Duration className="ml-1 mb-1" fromYear={joiningData} toYear={relievingDate} />
      {/* Designation tree */}
      {designations?.sort((des1, des2) => des2.startingDate.getFullYear() - des1.startingDate.getFullYear())
        .filter((des) => des.display === true)
        .map((designation, index) => {
          return (
            <Designation key={index}
              designation={designation.designation}
              display={designation.display}
              startingDate={designation.startingDate}
              endingDate={designation.endingDate}
              notes={designation.notes}
            />
          )
        })}
    </div>
  );
};

export default ExperienceCard;
