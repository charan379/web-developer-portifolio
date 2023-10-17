import React from "react";
import ProfilecardContainer from "./containers/profilecard-container";
import FlexBox from "./containers/FlexBox";
import ProfilePhoto from "./components/profile-photo/ProfilePhoto";
import Name from "./components/Name";
import Text from "../components/Text";
import LinkComponent from "../components/Link";
import ContactMe from "./components/ContactMe";
import SocialLinks from "../components/SocialLinks";
import { toProperCase } from "@/lib/utils/toProperCase";


const ProfileCard = (props: any) => {

  return (
    <ProfilecardContainer>
      {/* bio */}
      <FlexBox
        className="relative px-2 gap-2 flex flex-col items-center justify-center"
        appendDefaultClassName={false}
      >
        <ProfilePhoto style={{ width: "180px", height: "180px" }} />
        <Name>{toProperCase(props?.name)}</Name>
        <Text className="text-center">
          {props?.aboutMe}
        </Text>
      </FlexBox>
      {/* resume, projects */}
      <FlexBox
        appendDefaultClassName={false}
        className="relative mt-2 px-2 w-full flex flex-row flex-wrap md:gap-1 font-roboto400 justify-around"
      >

        {props?.pageLinks?.filter((link: any) => link.display === true)
          ?.sort((a: any, b: any) => a?.priority - b?.priority)
          ?.map((link: any, index: number) => {
            return <LinkComponent key={index} href={link?.url}>{toProperCase(link?.label)}</LinkComponent>
          })}
      </FlexBox>
      {/* contact */}
      <ContactMe />
      {/* social links */}
      <FlexBox className="relative w-full bg-slate-200 rounded-b-xl flex-row flex-wrap border-t-2">
        <SocialLinks />
      </FlexBox>
    </ProfilecardContainer>
  );
};

export default ProfileCard;
