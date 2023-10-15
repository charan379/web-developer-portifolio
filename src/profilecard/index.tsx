import React from "react";
import ContactMe from "./components/ContactMe";
import SocialLinks from "@/components/SocialLinks";
import ProfilecardContainer from "./containers/profilecard-container";
import FlexBox from "./containers/FlexBox";
import Name from "./components/Name";
import ProfilePhoto from "./components/profile-photo/ProfilePhoto";
import LinkComponent from "@/components/Link";
import Text from "@/components/Text";

const ProfileCard = () => {
  return (
    <ProfilecardContainer>
      <FlexBox
        className="relative px-2 gap-3 flex flex-col items-center justify-center"
        appendDefaultClassName={false}
      >
        <ProfilePhoto style={{ width: "180px", height: "180px" }} />
        <Name>Charanteja Yandrapati</Name>
        <Text className="text-center">
          I work as a system administrator, support engineer and web developer,
          who also code in my spare time.
        </Text>
      </FlexBox>
      {/* resume, hire me , contact */}
      <FlexBox
        appendDefaultClassName={false}
        className="relative mt-2 px-2 w-full flex flex-row flex-wrap md:gap-1 font-roboto400 justify-around"
      >
        <LinkComponent href="#">Resume</LinkComponent>
        <LinkComponent href="#">Projects</LinkComponent>
      </FlexBox>

      <ContactMe />
      {/* social links */}
      <FlexBox className="relative px-2 pb-2 w-full bg-slate-200 rounded-b-xl flex-row flex-wrap border-t-2">
        <SocialLinks />
      </FlexBox>
    </ProfilecardContainer>
  );
};

export default ProfileCard;
