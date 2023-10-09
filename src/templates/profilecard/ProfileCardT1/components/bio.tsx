import React from "react";
import ProfilePhoto from "./ProfilePhoto/profilePhoto";
import Name from "./name";
import Skills from "./Skills";

const Bio: React.FC<ComponentProps> = (props) => {
  return (
    <div className={props?.className ?? "flex flex-row items-center"}>
      {/* photo */}
      <div className="w-auto md:w-2/5 flex flex-auto items-center justify-around ">
        <ProfilePhoto style={{ width: "180px", height: "180px" }} />
      </div>
      {/* name, Profession, bio */}
      <div className="w-auto md:w-3/5 flex flex-col items-center md:items-start justify-center">
        {/* name */}
        <Name className="py-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-3xl font-semibold md:text-4xl text-center sm:text-left" />
        {/* Profession */}
        <h3 className="mb-2 text-xl text-slate-400">Learner / Developer</h3>
        {/* skills */}
        <div className="mb-2 text-lg text-slate-400 mt-2 md:mt-0">
          <h3 className="mb-2 hidden md:block font-montserrat">Skills</h3>
          <Skills
            className="w-full flex flex-row gap-2 items-center md:items-start justify-center md:justify-normal flex-wrap pb-2"
            skills={["Java", "React", "Css", "Html", "JS", "NodeJs", "MongoDB"]}
            skillClassName="w-max bg-slate-500 hover:bg-red-500 text-slate-50  text-sm px-2 py-1 rounded-[4.5px] border-r-8 border-slate-700 hover:border-red-800 cursor-pointer font-roboto400"
          />
        </div>
      </div>
    </div>
  );
};

export default Bio;
