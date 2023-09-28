import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import SocialLinks from "../SocialLinks";
import Name from "../Name/Name";
import Bio from "../Bio/Bio";

const ProfileCard = () => {
  return (
    <div className="max-w-2xl 2xl:max-w-screen-lg m-5 bg-slate-50 rounded-3xl border-red-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-5">
      <div>
        <div>
          {/* Profile Photo Component */}
          <ProfilePhoto style={{ width: "140px", height: "140px" }} />
        </div>
        <div>
          <Name />
          <Bio />
        </div>
      </div>
      <div className="my-3">
        <a
          href="#"
          className="bg-gradient-to-r from-red-500 via-pink-800 to-slate-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
          Button Link
        </a>
      </div>
      <div> Grid 3 </div>
      <div> Grid 4 </div>
      <div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
