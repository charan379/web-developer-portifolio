import React from "react";

const ExperienceCard = () => {
  return (
    <section className="mb-2 break-inside-avoid border-b-2 border-gray-300">
      <header>
        <h3 className="text-md font-semibold text-gray-800 leading-snugish ">
          Full Stack Web Developer
        </h3>
        <p className="leading-normal text-sm text-gray-500">
          Jun 2018 &ndash; Present | Freelance
        </p>
      </header>
      <ul className="mt-2 font-normal text-md  text-gray-700 leading-snugish pl-3">
        <li>
          <span className="transform -translate-y-px select-none text-gray-500">
            {">"}
          </span>
          Developed high-quality web applications from scratch, using a range of
          programming languages, including HTML, CSS, JavaScript, PHP, and
          Python, to meet clients' specific needs
        </li>
        <li>
          <span className="transform -translate-y-px select-none text-gray-500">
            {">"}
          </span>
          Utilized various front-end frameworks, such as React, Angular, and
          Vue.js, and back-end frameworks, such as Node.js, Express, and
          Laravel, to deliver robust and scalable web solutions.
        </li>
        <li>
          <span className="transform -translate-y-px select-none text-gray-500">
            {">"}
          </span>
          Designed and implemented databases using SQL and NoSQL technologies,
          such as MySQL, PostgreSQL, MongoDB, and Firebase, to store and manage
          data effectively
        </li>
      </ul>
    </section>
  );
};

export default ExperienceCard;
