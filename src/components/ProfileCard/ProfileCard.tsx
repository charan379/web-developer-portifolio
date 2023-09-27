import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import SocialLinks from "../SocialLinks";
import Name from "../Name/Name";
import Bio from "../Bio/Bio";

const ProfileCard = () => {
  return (
    <div className="w-4/12 h-3/4 bg-slate-50 rounded-3xl shadow-2xl p-5">
      <div >
        <div >
          {/* Profile Photo Component */}
          <ProfilePhoto style={{ width: "140px", height: "140px" }} />
        </div>
        <div >
          <Name />
          <Bio />
        </div>
      </div>
      <div > Grid 2 </div>
      <div > Grid 3 </div>
      <div > Grid 4 </div>
      <div >
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
