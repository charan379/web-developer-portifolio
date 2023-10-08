import React from "react";

interface SkillProps extends ComponentProps {
  skill: string;
}
const Skill: React.FC<SkillProps> = (props) => {
  return (
    <span className={props?.className ?? ""} style={props?.style}>
      {props.skill}
    </span>
  );
};

export default Skill;
