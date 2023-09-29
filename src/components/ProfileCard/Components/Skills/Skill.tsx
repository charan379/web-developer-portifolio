import React from "react";

interface SkillProps extends ComponentProps {
  skill: string;
}
const Skill: React.FC<SkillProps> = (props) => {
  return (
    <i className={props?.className ?? ""} style={props?.style}>
      {props.skill}
    </i>
  );
};

export default Skill;
