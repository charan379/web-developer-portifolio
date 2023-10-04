import React from "react";
import Header from "./Components/Header";
import ContactInformation from "./Components/Contact";
import Summary from "./Components/Summary";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Contect from "./Content";

const ResumeT1: React.FC = () => {
  return (
    <>
      <div className="text-slate-400 mx-auto my-5 max-w-5xl aspect-A4-Portrait p-4 sm:p-8 container bg-slate-50 flex flex-col border-4 border-violet-600">

        {/* Header 
            basic classes to be present for styling
            [w-full, p-1, max-h-[20%]]
        
        */}
        <Header className="w-full p-1 max-h-[20%] flex flex-col items-start justify-between gap-0 sm:gap-1 mb-1 align-top" />

        {/* content
            basic classes to be present for styling
            [w-full, min-h-full, max-w-full, flex, flex-row]
        */}
        <Contect className="w-full min-h-full max-w-full flex flex-row border-t-2 border-gray-200">
          {/* left section */}
          <div className="min-w-[30%] max-h-[30%] min-h-full border-r-0 border-gray-200">

          </div>
          {/* right section */}
          <div className="min-w-[70%] min-h-full border-l-2 border-gray-200">

          </div>
        </Contect>
      </div>
    </>
  )
};

export default ResumeT1;
