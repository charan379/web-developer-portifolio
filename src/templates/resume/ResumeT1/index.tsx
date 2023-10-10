import React from "react";
import Header from "./components/header";
import ContactInformation from "./components/ContactInformation";
import Summary from "./components/summary";
import Education from "./components/Education";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import Contect from "./components/content";
import Heading from "./components/heading";

const ResumeT1: React.FC = () => {
  return (
    <div className="text-slate-400 mx-auto my-5 max-w-5xl aspect-A4-Portrait  p-4 sm:p-8 container bg-white rounded-lg shadow-xl flex flex-col ">
      {/* Header 
            basic classes to be present for styling
            [w-full, p-1, max-h-[20%]]
        */}
      <Header className="w-full p-1 max-h-[20%] flex flex-col items-start justify-between gap-0 sm:gap-1 mb-1 align-top overflow-hidden font-montserrat sm:tracking-wide" />

      {/* content
            basic classes to be present for styling
            [w-full, min-h-full, max-w-full, flex, flex-row]
        */}
      <Contect className="w-full min-h-full max-w-full flex flex-row border-t-2 border-gray-200 font-roboto300">
        {/* left section */}
        <div className="min-w-[35%] max-h-[35%] min-h-full pt-2 sm:pt-4 border-r-0 border-gray-200">
          <div className="flex flex-col gap-1">
            <ContactInformation />
            <Skills />
          </div>
        </div>

        {/* right section */}
        <div className="min-w-[65%] min-h-full pt-2 sm:pt-4 pl-2 sm:pl-4 border-l-2 border-gray-200">
          <Summary />
          <Experience />
        </div>
      </Contect>
    </div>
  );
};

export default ResumeT1;
