import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Name from "../Name/Name";
import About from "../About/About";

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
        {/* bio */}
        <About className="text-smx" />
      </div>
    </div>
  );
};

export default Bio;
