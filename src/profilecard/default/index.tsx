import React from "react";
import LeftSection from "./components/RLSections/leftSection";
import RightSection from "./components/RLSections/rightSection";
import SocialLinks from "@/components/SocialLinks";
import ProfilecardContainer from "./containers/profilecard-container";
import FlexBox from "./containers/FlexBox";
import Bio from "./components/Bio";
import AboutMe from "./components/AboutMe";

const ProfileCard = () => {
  return (
    <ProfilecardContainer>
      {/* Top Section */}
      <FlexBox className="gap-3 md:gap-0 font-montserrat">
        <Bio />
      </FlexBox>

      {/* AboutMe */}
      <AboutMe />

      {/* resume, hire me , contact */}
      <FlexBox className="p-2 w-full md:gap-1 font-roboto400">
        <LeftSection />
        <RightSection />
      </FlexBox>

      {/* social links */}
      <FlexBox className="p-2 w-full bg-slate-200 rounded-b-xl flex-row flex-wrap border-t-2">
        <SocialLinks />
      </FlexBox>
    </ProfilecardContainer>
  );
};

export default ProfileCard;
