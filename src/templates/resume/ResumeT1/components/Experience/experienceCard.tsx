import React from "react";
import Designation from "./designation";
import Text from "@/components/Text";
import getNumberOfYearsAndMonthsBetweenDates from "@/lib/utils/getNumberOfYearsAndMonthsBetweenDates";


const ExperienceCard: React.FC<Partial<IExperience>> = (props) => {
  const { companyName, joiningData, relievingDate, location, type, display, designations } = props;
  const { years, months } = getNumberOfYearsAndMonthsBetweenDates(joiningData ?? new Date(Date.now()), relievingDate ?? new Date(Date.now()))
  return (
    // Card Container
    <div className="px-0 mb-2">
      {/* Organization and working years */}
      <div className="flex flex-row justify-between">
        {/* org name */}
        <h3 className="text-lg font-bold font-roboto400 text-gray-700 tracking-wide rect-left">
          {companyName}
        </h3>
        {/* working years */}
        <span className="min-w-max font-bold">{joiningData?.getFullYear()} - {relievingDate?.getFullYear() ?? "Present"}</span>
      </div>
      {/* duration */}
      <Text className="font-roboto400 tracking-wide ml-1 mb-1" appendDefaultClassName={true}>
        {`${years} ${years > 1 ? "years" : "year"}, ${months} ${months === 1 ? "month" : "months"}`}
      </Text>
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
