import React from "react";
import ProfilePhoto from "./Components/ProfilePhoto/ProfilePhoto";
import SocialLinks from "../SocialLinks";
import Name from "./Components/Name/Name";
import About from "./Components/About/About";
import { EmailSvg, WhatsappSvg } from "@charan379/react-svg-icons";
import Link from "next/link";
import Bio from "./Components/Bio";
import HireMe from "./Components/HireMe";
import CreateTogether from "./Components/CreateTogether";

const ProfileCard = () => {
  return (
    // profile card
    <div className="p-5 flex gap-y-3 flex-col items-center justify-center max-w-2xl 2xl:max-w-screen-lg m-5 bg-slate-50 rounded-3xl border-red-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      {/* Bio */}
      <Bio className="flex flex-row items-center" />
      {/* resume, hire me , contact */}
      <div className="p-2 w-full gap-1 flex flex-row flex-nowrap items-center">
        {/* inner div 1 */}
        <HireMe />
        {/* inner div 2 */}
        <CreateTogether />
      </div>

      {/* social links */}
      <div className="w-full flex flex-row flex-wrap items-center justify-center border-t-2">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
