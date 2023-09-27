import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import SocialLinks from "../SocialLinks";
import Name from "../Name/Name";
import Bio from "../Bio/Bio";

const ProfileCard = () => {
  return (
    <div className="max-w-2xl m-5 bg-slate-50 rounded-3xl shadow-2xl p-5 2xl:max-w-screen-lg">
      <div>
        <div >
          {/* Profile Photo Component */}
          <ProfilePhoto style={{ width: "140px", height: "140px" }} />
        </div>
        <div>
          <Name />
          <Bio />
        </div>
      </div>
      <div > Grid 2 </div>
      <div> Grid 3 </div>
      <div> Grid 4 </div>
      <div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
