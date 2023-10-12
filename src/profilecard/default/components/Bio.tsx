import React from "react";
import ProfilePhoto from "./profile-photo/ProfilePhoto";
import Name from "./Name";
import FlexBox from "../containers/FlexBox";
import SkillList from "./skillsq/SkillList";

const Bio: React.FC = () => {
  return (
    <>
      {/* photo */}
      <FlexBox className="w-auto md:w-2/5 flex-auto justify-around ">
        <ProfilePhoto style={{ width: "180px", height: "180px" }} />
      </FlexBox>

      {/* name, Profession, bio */}
      <FlexBox
        className="w-auto md:w-3/5 flex flex-col items-center md:items-start justify-center"
        appendDefaultClassName={false}
      >
        {/* name */}
        <Name className="py-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-3xl font-semibold md:text-4xl text-center sm:text-left" />
        {/* Profession */}
        <h3 className="ml-1 mb-1 text-xl text-slate-400">
          Learner / Developer
        </h3>
        {/* skills */}
        <div className="ml-1 mb-1 text-lg text-slate-400 mt-2 md:mt-0">
          <h3 className="mb-1 hidden md:block font-montserrat">Skills</h3>
          <SkillList
            skills={["Java", "React", "Css", "Html", "JS", "NodeJs", "MongoDB"]}
          />
        </div>
      </FlexBox>
    </>
  );
};

export default Bio;
