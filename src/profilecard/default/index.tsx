import React from "react";
import AboutMe from "./components/aboutMe";
import Bio from "./components/bio";
import LeftSection from "./components/RLSections/leftSection";
import RightSection from "./components/RLSections/rightSection";
import SocialLinks from "@/components/SocialLinks";
import ProfilecardContainer from "./containers/profilecard-container/ProfilecardContainer";

const ProfileCard = () => {
  return (
    <ProfilecardContainer>
      {/* Bio */}
      <Bio className="p-2 flex flex-col md:flex-row gap-3 md:gap-0 items-center font-montserrat" />
      {/* AboutMe */}
      <AboutMe
        className="px-2 cursor-pointer select-none"
        contentClassName="px-4 py-3 pt-2 text-base text-left text-orange-600 hidden sm:block border-anime-2"
      />
      {/* resume, hire me , contact */}
      <div className="p-2 w-full gap-1 flex flex-col md:flex-row flex-nowrap items-center justify-center font-roboto400">
        {/* inner div 1 */}
        <LeftSection />
        {/* inner div 2 */}
        <RightSection />
      </div>

      {/* social links */}
      <div className="p-2 w-full bg-slate-200 rounded-b-xl flex flex-row flex-wrap items-center justify-center border-t-2">
        <SocialLinks />
      </div>
    </ProfilecardContainer>
  );
};

export default ProfileCard;
