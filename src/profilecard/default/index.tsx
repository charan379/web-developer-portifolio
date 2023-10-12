import React from "react";
import LeftSection from "./components/RLSections/leftSection";
import RightSection from "./components/RLSections/rightSection";
import SocialLinks from "@/components/SocialLinks";
import ProfilecardContainer from "./containers/profilecard-container";
import FlexBox from "./containers/FlexBox";
import Bio from "./components/Bio";
import AboutMe from "./components/AboutMe";
import SkillList from "./components/skills/SkillList";
import Name from "./components/Name";
import ProfilePhoto from "./components/profile-photo/ProfilePhoto";

const ProfileCard = () => {
  return (
    <ProfilecardContainer>
      {/* Top Section */}
      <FlexBox className="gap-3 pt-2 font-montserrat">
        <ProfilePhoto style={{ width: "180px", height: "180px" }} />
        <FlexBox
          className="w-auto md:w-3/5 flex flex-col items-center md:items-start justify-center"
          appendDefaultClassName={false}
        >
          {/* name */}
          <Name>Charanteja Yandrapti</Name>
          {/* Profession */}
          <h3 className="ml-1 mb-1 text-xl text-slate-400">
            Learner / Developer
          </h3>
          {/* skills */}
          <div className="ml-1 mb-1 text-lg text-slate-400 mt-2 md:mt-0">
            <h3 className="mb-1 hidden md:block font-montserrat">Skills</h3>
            <SkillList
              skills={[
                "Java",
                "React",
                "Css",
                "Html",
                "JS",
                "NodeJs",
                "MongoDB",
              ]}
            />
          </div>
        </FlexBox>
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
