import React from "react";
import ContactMe from "./components/ContactMe";
import SocialLinks from "@/components/SocialLinks";
import ProfilecardContainer from "./containers/profilecard-container";
import FlexBox from "./containers/FlexBox";
import Name from "./components/Name";
import ProfilePhoto from "./components/profile-photo/ProfilePhoto";
import LinkComponent from "@/components/Link";

const ProfileCard = () => {
  return (
    <ProfilecardContainer>
      <ProfilePhoto style={{ width: "180px", height: "180px" }} />
      <Name>Charanteja Yandrapati</Name>

      {/* resume, hire me , contact */}
      <FlexBox
        appendDefaultClassName={false}
        className="p-2 w-full flex flex-row flex-wrap md:gap-1 font-roboto400 justify-between"
      >
        <LinkComponent href="#">Resume</LinkComponent>
        <LinkComponent href="#">Projects</LinkComponent>
      </FlexBox>

      <ContactMe />
      {/* social links */}
      <FlexBox className="p-2 w-full bg-slate-200 rounded-b-xl flex-row flex-wrap border-t-2">
        <SocialLinks />
      </FlexBox>
    </ProfilecardContainer>
  );
};

export default ProfileCard;
