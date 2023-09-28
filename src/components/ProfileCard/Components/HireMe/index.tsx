"use client";
import { EmailSvg } from "@charan379/react-svg-icons";
import Link from "next/link";
import React, { useState } from "react";

const HireMe: React.FC<ComponentProps> = (props) => {
  const [showHireLinks, setShowHireLinks] = useState(true);
  return (
    <div className={props?.className ?? "w-1/2 border-r-2 mx-auto text-center"}>
      {/* heading */}
      <button
        className={`w-1/2 bg-gradient-to-r from-red-500 via-pink-800 to-slate-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
          showHireLinks ? "hidden" : ""
        }`}
        onClick={() => setShowHireLinks(!showHireLinks)}
      >
        Hire Me!
      </button>
      <div
        className={`w-full ${
          showHireLinks ? "flex flex-row justify-center" : "hidden"
        }`}
      >
        {/* resume link */}
        <Link
          className="bg-gradient-to-r from-red-500 via-pink-800 to-slate-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-500 ease-in-out hover:-translate-y-2"
          href={"#"}
        >
          Get My Resume
        </Link>
        {/* divider */}
        <i className=" border-r-2  m-2 text-xl "></i>
        <Link
          className="transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
          href={"#"}
        >
          <EmailSvg
            size={50}
            envelopInnerBottomLeftColor="#0B88DA"
            envelopInnerLeftColor="#28AFEA"
            envelopInnerRightColor="#0B88DA"
            envelopInnerTopLeftColor="#28AFEA"
            envelopLeftBorderColor="#28AFEA"
            envelopRightBorderColor="#0B88DA"
            envelopTopBorderColor="#fff"
            envelopTopColor="#097acc"
          />
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
