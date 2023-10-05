import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
      {/* To keep in the same column */}
      <section className="break-inside-avoid">
        <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-800 print:font-normal">
          EXPERIENCE
        </h2>

        <ExperienceCard key={1} />
        <ExperienceCard key={2} />
        <ExperienceCard key={3} />
      </section>
    </section>
  );
};

export default Experience;
