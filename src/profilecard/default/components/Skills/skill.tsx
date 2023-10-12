import React from "react";

interface SkillProps extends ComponentProps {
  skill: string;
}
const Skill: React.FC<SkillProps> = (props) => {
  return (
    <span
      className="w-max bg-slate-500 hover:bg-red-500 text-slate-50  text-sm px-2 py-1 rounded-[4.5px] border-r-8 border-slate-700 hover:border-red-800 cursor-pointer font-roboto400"
      style={props?.style}
    >
      {props.skill}
    </span>
  );
};

export default Skill;
