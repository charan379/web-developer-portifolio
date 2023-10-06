import React from "react";
import Skill from "./Skill";

interface SkillsCompProps extends ComponentProps {
  skills: string[];
  skillClassName?: string;
}

const Skills: React.FC<SkillsCompProps> = (props) => {
  return (
    <div className={props?.className ?? ""} style={props?.style}>
      {props.skills?.map((skill, index) => {
        return (
          <Skill skill={skill} key={index} className={props?.skillClassName} />
        );
      })}
    </div>
  );
};

export default Skills;
