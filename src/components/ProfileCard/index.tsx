import React from "react";
import SocialLinks from "../SocialLinks";
import AboutMe from "./Components/AboutMe/AboutMe";
import Bio from "./Components/Bio";
import HireMe from "./Components/RLSections/LeftSection";
import CreateTogether from "./Components/RLSections/RightSection";

const ProfileCard = () => {
  return (
    // profile card
    <div className="pt-5 flex gap-y-3 flex-col items-center justify-center max-w-2xl 2xl:max-w-screen-lg m-5 bg-slate-50 rounded-3xl border-red-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      {/* Bio */}
      <Bio className="p-2 flex flex-row items-center" />
      {/* AboutMe */}
      <AboutMe className="px-5 text-smx hidden md:block" />
      {/* resume, hire me , contact */}
      <div className="p-2 w-full gap-1 flex flex-row flex-nowrap items-center">
        {/* inner div 1 */}
        <HireMe />
        {/* inner div 2 */}
        <CreateTogether />
      </div>

      {/* social links */}
      <div className="p-2 w-full bg-slate-200 rounded-b-3xl flex flex-row flex-wrap items-center justify-center border-t-2">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
