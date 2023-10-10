import Text from "@/components/Text";
import React from "react";
import style from './experience.module.css'
import getNumberOfYearsAndMonthsBetweenDates from "@/lib/utils/getNumberOfYearsAndMonthsBetweenDates";
import Heading3 from "../Headings/heading3";
import TimePeriod from "../timePeriod";
import Duration from "../duration";

const Designation: React.FC<Partial<IDesignation>> = (props) => {
  const { designation, startingDate, endingDate, notes, display } = props;
  return (
    <div className={`${style.designation} px-1`}>
      <div className="flex flex-row items-center gap-10">
        {/* designation */}
        <Heading3>{designation}</Heading3>
        {/* time period */}
        <span className="text-[9px] sm:text-xs md:text-sm tracking-wide hidden sm:flex sm:flex-row sm:items-center gap-2 min-w-max">
          <TimePeriod className="text-gray-500 text-[9px] sm:text-xs md:text-sm" fromYear={startingDate} toYear={endingDate} />
          <Duration className="text-gray-500 text-[9px] sm:text-xs md:text-sm" fromYear={startingDate} toYear={endingDate} />
        </span>
      </div>
      <ul className={`ml-3 sm:ml-6 ${style.leftFullBorder} before:left-[-20px] sm:before:left-[-28px]`}>
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
