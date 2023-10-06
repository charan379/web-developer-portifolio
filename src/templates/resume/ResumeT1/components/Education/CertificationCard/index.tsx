import React from "react";

const CertificationCard = () => {
  return (
    <section className="pb-4 mt-4 mb-4 break-inside-avoid">
      <header>
        <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
          Codify Academy
        </h3>
        <p className="leading-normal text-md text-gray-500">
          2018 | Certificate
        </p>
      </header>
      <p className="mt-1 leading-normal text-md text-gray-800">
        <span className="font-semibold text-gray-700 text-md leading-snugish">
          Subject:
        </span>
        Front End Development
      </p>
    </section>
  );
};

export default CertificationCard;
