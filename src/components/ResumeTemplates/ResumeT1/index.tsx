import React from "react";
import Header from "./Components/Header";
import ContactInformation from "./Components/Contact";
import Summary from "./Components/Summary";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

const ResumeT1: React.FC = () => {
  return (
    <>
      <div className="text-slate-400 mx-auto my-5 max-w-5xl aspect-A4-Portrait p-4 container bg-slate-50 flex flex-col border-4 border-violet-600">

        {/* Header 
          basic class to be present for styling
          [w-full, p-1, max-h-[20%], border-violet-600 opt, border-b-2 opt]
        
        */}
        <Header className="w-full p-1 max-h-[20%] border-violet-600 border-b-2 flex flex-col items-start justify-between gap-0 sm:gap-1 mb-1 align-top" />

        {/* left section */}
        <div className="w-full min-h-full max-w-full flex flex-row">
          <div className="min-w-[30%] max-h-[30%] min-h-full bg-slate-200">

          </div>
          <div className="min-h-full min-w-[70%] max-h-[70%] bg-slate-400">

          </div>
        </div>
      </div>
    </>
  )
};

export default ResumeT1;
