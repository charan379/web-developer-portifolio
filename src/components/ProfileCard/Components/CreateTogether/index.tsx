import { EmailSvg, WhatsappSvg } from "@charan379/react-svg-icons";
import Link from "next/link";
import React from "react";

const CreateTogether: React.FC<ComponentProps> = (props) => {
  return (
    <div className={props?.className ?? "w-1/2 mx-auto text-center"}>
      {/* heading */}
      <h2 className="text-xl font-semibold mb-3">Lets create together !</h2>
      <div className="w-full flex flex-row justify-center">
        {/* divider */}
        <Link
          className="transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
          href={"#"}
        >
          <WhatsappSvg size={50} />
        </Link>
        <i className=" border-r-2  m-2 text-xl "></i>
        <Link
          className="transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
          href={"#"}
        >
          <EmailSvg size={50} />
        </Link>
      </div>
    </div>
  );
};

export default CreateTogether;
