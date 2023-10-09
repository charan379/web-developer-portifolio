import React from "react";
import Heading from "../heading";
import ExperienceCard from "./experienceCard";

const Experience: React.FC<ComponentProps> = (props) => {
  const { className, style } = props;
  return (
    <div
      className={className ?? "py-2 mt-2 border-t-2 border-gray-200"}
      style={style}
    >
      <Heading>Experience</Heading>

      <ExperienceCard key={1} />
      <ExperienceCard key={2} />
    </div>
  );
};

export default Experience;
