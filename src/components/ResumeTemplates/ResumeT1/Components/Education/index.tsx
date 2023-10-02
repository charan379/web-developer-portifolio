import React from "react";
import EducationCard from "./EducationCard";
import CertificationCard from "./CertificationCard";

const Education = () => {
  return (
    <section className="pb-0 break-inside-avoid mt-2 border-b-4 border-gray-300 first:mt-0">
      {/* To keep in the same column */}
      <section className="break-inside-avoid">
        <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
          EDUCATION
        </h2>

        <EducationCard key={1} />
        <EducationCard key={2} />
        <EducationCard key={3} />

        <CertificationCard key={1} />
      </section>
    </section>
  );
};

export default Education;
