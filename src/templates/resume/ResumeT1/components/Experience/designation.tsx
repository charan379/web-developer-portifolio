import Text from "@/components/Text";
import React from "react";
import style from './experience.module.css'
import getNumberOfYearsAndMonthsBetweenDates from "@/lib/utils/getNumberOfYearsAndMonthsBetweenDates";

const Designation: React.FC<Partial<IDesignation>> = (props) => {
  const { designation, startingDate, endingDate, notes, display } = props;
  const { years, months } = getNumberOfYearsAndMonthsBetweenDates(startingDate ?? new Date(Date.now()), endingDate ?? new Date(Date.now()));
  return (
    <div className={`${style.designation} px-2`}>
      <div className="flex flex-row items-center gap-10">
        {/* designation */}
        <h4 className="text-gray-600 font-roboto400 font-semibold tracking-wide text-base leading-normal circle-left">
          {designation}
        </h4>
        {/* time period */}
        <span className="text-gray-500 font-roboto400 font-bold text-xs leading-normal">
          {startingDate?.getFullYear()} - {endingDate?.getFullYear() ?? "Preset"}
          <span className="ml-1">{`( ${years} ${years > 1 ? "years" : "year"}, ${months} ${months === 1 ? "month" : "months"} )`}</span>
        </span>
      </div>
      <ul className={`ml-6 ${style.leftFullBorder}`}>
        {notes?.filter((note) => note.display === true)
          .sort((note1, note2) => note1.priority - note2.priority)
          .map((note, index) => {
            return (
              <Text key={index}>
                {note.text}
              </Text>
            )
          })}
      </ul>
    </div>
  );
};

export default Designation;
