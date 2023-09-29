import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Name from "../Name/Name";
import About from "../About/About";
import Skills from "../Skills";

const Bio: React.FC<ComponentProps> = (props) => {
  return (
    <div className={props?.className ?? "flex flex-row items-center"}>
      {/* photo */}
      <div className="w-2/5 flex flex-auto items-center justify-around">
        <ProfilePhoto style={{ width: "180px", height: "180px" }} />
      </div>
      {/* name, Profession, bio */}
      <div className="w-3/5 flex flex-col items-start justify-center">
        {/* name */}
        <Name className="text-4xl" />
        {/* Profession */}
        <h3 className="mb-2 text-xl text-slate-400">Profession</h3>
        {/* skills */}
        <h3 className="mb-2 text-lg text-slate-400">Skills</h3>
        <Skills
          className="w-full flex flex-row gap-2 items-start justify-normal flex-wrap pb-2"
          skills={["Java", "React", "Css", "Html", "JS", "NodeJs","MongoDB"]}
          skillClassName="w-max bg-slate-500 text-slate-50 text-sm px-2 rounded-[4.5px] border-r-8 border-slate-700 cursor-pointer "
        />
        {/* About */}
        <About className="text-smx hidden md:block" />
      </div>
    </div>
  );
};

export default Bio;
