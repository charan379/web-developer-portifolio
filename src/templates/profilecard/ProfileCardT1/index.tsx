import React from "react";
import AboutMe from "./components/aboutMe";
import Bio from "./components/bio";
import LeftSection from "./components/RLSections/leftSection";
import RightSection from "./components/RLSections/rightSection";
import SocialLinks from "@/components/SocialLinks";
import styles from "./profilecard.module.css";

const ProfileCardT1 = () => {
  return (
    // profile card
    <div className={`w-11/12 pt-2 md:pt-3 flex md:gap-y-1 flex-col items-center justify-center max-w-2xl 2xl:max-w-screen-lg m-5 bg-slate-50 rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${styles.profileCardInitAnime}`}>
      {/* Bio */}
      <Bio className="p-2 flex flex-col md:flex-row gap-3 md:gap-0 items-center font-montserrat" />
      {/* AboutMe */}
      <AboutMe
        className="px-2 cursor-pointer select-none"
        contentClassName="px-4 py-3 pt-2 text-[0.925rem] text-left text-gray-500 tracking-wide font-semibold font-roboto300 hidden sm:block border-anime-2"
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
    </div>
  );
};

export default ProfileCardT1;
