import React from "react";
import Heading1 from "../Headings/heading1";
import ExperienceCard from "./experienceCard";

const Experience: React.FC<ComponentProps> = (props) => {

  const data = [{
    companyName: "InfoTech Pvt Ltd.",
    joiningData: new Date("01-01-2019"),
    relievingDate: new Date("05-01-2020"),
    location: "India",
    type: "Full Time",
    display: true,
    designations: [{
      designation: "Trainee",
      startingDate: new Date("01-01-2019"),
      endingDate: new Date("01-03-2020"),
      display: true,
      notes: [{ display: true, priority: 1, text: "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Aeneancommodo ligula eget dolor. Aenean massa." }, { display: true, priority: 2, text: "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Aeneancommodo ligula eget dolor. Aenean massa." }]
    },
    {
      designation: "Sys Executive",
      startingDate: new Date("01-04-2020"),
      endingDate: new Date("05-05-2020"),
      display: true,
      notes: [{ display: true, priority: 1, text: "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Aeneancommodo ligula eget dolor. Aenean massa." }, { display: true, priority: 2, text: "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Aeneancommodo ligula eget dolor. Aenean massa." }]
    }]
  }, {
    companyName: "Techno Monsta Pvt Ltd.",
    joiningData: new Date("01-06-2020"),
    relievingDate: null,
    location: "India",
    type: "Full Time",
    display: true,
    designations: [{
      designation: "RPA Developer",
      startingDate: new Date("01-06-2020"),
      endingDate: new Date("01-02-2021"),
      display: true,
      notes: [{ display: true, priority: 1, text: "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Aeneancommodo ligula eget dolor. Aenean massa." }, { display: true, priority: 2, text: "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Aeneancommodo ligula eget dolor. Aenean massa." }]
    },
    {
      designation: "Senior RPA Developer",
      startingDate: new Date("01-02-2021"),
      endingDate: null,
      display: true,
      notes: [{ display: true, priority: 1, text: "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Aeneancommodo ligula eget dolor. Aenean massa." }, { display: true, priority: 2, text: "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Aeneancommodo ligula eget dolor. Aenean massa." }]
    }]
  }]
  const { className, style } = props;
  return (
    <div
      className={className ?? "py-2 mt-2 border-t-2 border-gray-200"}
      style={style}
    >
      <Heading1>Experience</Heading1>
      {data.sort((experience1, experience2) => experience2.joiningData.getFullYear() - experience1.joiningData.getFullYear())
        .filter((experience) => experience.display === true)
        .map((experience, index) => {
          return (
            <ExperienceCard key={index}
              companyName={experience?.companyName}
              joiningData={experience?.joiningData}
              relievingDate={experience?.relievingDate}
              location={experience?.location}
              display={experience?.display}
              type={experience?.type}
              designations={experience?.designations} />
          )
        })}
    </div>
  );
};

export default Experience;
