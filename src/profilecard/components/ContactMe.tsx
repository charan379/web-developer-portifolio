import RevealOnClick from "@/components/RevealOnClick";
import { EmailSvg, WhatsappSvg } from "@charan379/react-svg-icons";
import Link from "next/link";
import React from "react";

const ContactMe: React.FC<ComponentProps> = () => {
  return (
    <RevealOnClick
      className="w-full min-h-[50px] px-2 text-center"
      appendDefaultClassName={false}
      buttonClassName="min-w-[50%] w-full bg-gradient-to-r from-red-600 hover:from-slate-500 via-pink-800 to-slate-800 hover:to-stone-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
      contentClassName="flex flex-row justify-center opacity-100 translate-y-0 transition-all duration-500 ease-in-out"
      buttonText="Contact Me"
      key={`ROC2`}
    >
      {/* children */}
      <>
        {/* Links */}
        <Link
          className="transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
          href={"#"}
        >
          <WhatsappSvg size={50} />
        </Link>
        <i className="border-r-2  m-2 text-xl"></i>
        <Link
          className="transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
          href={"#"}
        >
          <EmailSvg size={50} />
        </Link>
      </>
    </RevealOnClick>
  );
};

export default ContactMe;
