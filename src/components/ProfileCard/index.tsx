import React from "react";
import SocialLinks from "../SocialLinks";
import AboutMe from "./Components/AboutMe/AboutMe";
import Bio from "./Components/Bio";
import LeftSection from "./Components/RLSections/LeftSection";
import RightSection from "./Components/RLSections/RightSection";

const ProfileCard = () => {
  return (
    // profile card
    <div className="w-11/12 pt-2 md:pt-3 flex md:gap-y-3 flex-col items-center justify-center max-w-2xl 2xl:max-w-screen-lg m-5 bg-slate-50 rounded-3xl border-red-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      {/* Bio */}
      <Bio className="p-2 flex flex-col md:flex-row gap-3 md:gap-0 items-center" />
      {/* AboutMe */}
      <AboutMe className="px-5 text-sm hidden md:block" />
      {/* resume, hire me , contact */}
      <div className="p-2 w-full gap-1 flex flex-col md:flex-row flex-nowrap items-center justify-center">
        {/* inner div 1 */}
        <LeftSection />
        {/* inner div 2 */}
        <RightSection />
      </div>

      {/* social links */}
      <div className="p-2 w-full bg-slate-200 rounded-b-3xl flex flex-row flex-wrap items-center justify-center border-t-2">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
