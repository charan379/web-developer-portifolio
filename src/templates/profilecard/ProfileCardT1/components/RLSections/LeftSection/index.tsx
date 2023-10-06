import RevealOnClick from "@/components/RevealOnClick";
import { EmailSvg } from "@charan379/react-svg-icons";
import Link from "next/link";
import React from "react";

const LeftSection: React.FC<ComponentProps> = () => {
  return (
    <RevealOnClick
      className="w-full min-h-[50px] md:w-1/2 md:border-r-2 mx-auto text-center"
      buttonClassName="min-w-[50%] w-full md:w-max bg-gradient-to-r from-red-600 hover:from-slate-500 via-pink-800 to-slate-800 hover:to-stone-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
      contentClassName="flex flex-row justify-center opacity-100 translate-y-0 transition-all duration-500 ease-in-out"
      buttonText="About me !"
      key={`ROC1`}
    >
      {/* children */}
      <>
        {/* resume link */}
        <Link
          className="min-w-[40%] bg-gradient-to-r from-red-500 via-pink-800 to-slate-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-transform duration-500 ease-in-out hover:-translate-y-2"
          href={"resume"}
        >
          Resume
        </Link>
        {/* divider */}
        <i className=" border-r-2  m-2 text-xl "></i>
        <Link
          className="min-w-[40%] bg-gradient-to-r from-red-500 via-pink-800 to-slate-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-transform duration-500 ease-in-out hover:-translate-y-2"
          href={"projects"}
        >
          Projects
        </Link>
      </>
    </RevealOnClick>
  );
};

export default LeftSection;
