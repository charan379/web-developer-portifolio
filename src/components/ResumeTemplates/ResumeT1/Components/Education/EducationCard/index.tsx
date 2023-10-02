import React from "react";

const EducationCard = () => {
  return (
    <section className="mt-2  border-b-2 break-inside-avoid">
      <header>
        <h3 className=" text-lg font-semibold text-gray-700 leading-snugish">
          College / University Name
        </h3>
        <p className="leading-normal text-md text-gray-500">
          FYear - TYear | CourseName
        </p>
      </header>
      <p className="mt-1 leading-normal text-md text-gray-800">
        <span className="font-semibold text-gray-700 text-md leading-snugish">
          Major:
        </span>
        Major Subject
      </p>
      <p className="mt-1 leading-normal text-md text-gray-800">
        <span className="font-semibold text-gray-700 text-md leading-snugish">
          Minor:
        </span>
        Minor Subject
      </p>
      <p className="leading-normal text-gray-700 text-md">
        <span className="font-semibold text-gray-700 text-md leading-snugish">
          GPA:
        </span>
        10.0
      </p>
    </section>
  );
};

export default EducationCard;
