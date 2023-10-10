import React from "react";
import Heading1 from "./Headings/heading1";

const Skills = () => {
  const skills: string[] = [
    "HTML5",
    "CSS3",
    "Prompt Engineering",
    "Containerization",
    "CI/CD",
    "System Administration",
    "BASH",
    "AWS",
    "Linux",
    "Javascript",
    "Typescript",
    "Node.js",
    "React.js",
    "Java",
    "NoSQL",
    "MongoDB",
  ];

  return (
    <section className="pb-6 mb-4 mt-0 first:mt-0 ">
      {/* To keep in the same column */}
      <section className="">
        <Heading1>Skills</Heading1>
        <section className="mb-0">
          <section className="mt-1 last:pb-1">
            <ul className="flex flex-wrap gap-1 text-md mb-1 font-bold">
              {skills.map((skill, index) => {
                return (
                  <li
                    key={index}
                    className="font-roboto300 p-0.5 sm:p-1.5 mb-1 text-[0.4rem] sm:text-sm print:text-xs rounded-sm text-white print:text-gray-900 bg-gray-800 print:bg-white print:border-gray-200 print:border-2 cursor-pointer"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Skills;
