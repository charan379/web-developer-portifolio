import React from "react";
import Skill from "./Skill";

interface SkillListProps extends ComponentProps {
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = (props) => {
  return (
    <div
      className="w-full flex flex-row gap-2 items-center md:items-start justify-center md:justify-normal flex-wrap pb-2"
      style={props?.style}
    >
      {props.skills?.map((skill, index) => {
        return <Skill skill={skill} key={index} />;
      })}
    </div>
  );
};

export default SkillList;
