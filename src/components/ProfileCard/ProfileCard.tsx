import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import SocialLinks from "../SocialLinks";
import Name from "../Name/Name";
import Bio from "../Bio/Bio";
import { EmailSvg, WhatsappSvg } from "@charan379/react-svg-icons";
import Link from "next/link";

const ProfileCard = () => {
  return (
    // profile card
    <div className="p-5 flex gap-y-3 flex-col items-center justify-center max-w-2xl 2xl:max-w-screen-lg m-5 bg-slate-50 rounded-3xl border-red-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      {/* photo,name, Profession and bio */}
      <div className="flex flex-row items-center">
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
          <Bio className="text-smx" />
        </div>
      </div>

      {/* resume, hire me , contact */}
      <div className="p-2 w-full gap-1 flex flex-row flex-nowrap items-center">
        {/* inner div 1 */}
        <div className="w-1/2 border-r-2 mx-auto text-center">
          {/* heading */}
          <h2 className="text-xl font-semibold mb-3">Hire Me!</h2>
          <div className="w-full flex flex-row justify-center">
            {/* resume link */}
            <Link
              className="bg-gradient-to-r from-red-500 via-pink-800 to-slate-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-500 ease-in-out hover:translate-y-2"
              href={"#"}
            >
              Get My Resume
            </Link>
            {/* divider */}
            <i className=" border-r-2  m-2 text-xl "></i>
            <Link
              className="transition-all duration-500 ease-in-out hover:scale-105 hover:translate-y-2"
              href={"#"}
            >
              <EmailSvg
                size={50}
                envelopInnerBottomLeftColor="#0B88DA"
                envelopInnerLeftColor="#28AFEA"
                envelopInnerRightColor="#0B88DA"
                envelopInnerTopLeftColor="#28AFEA"
                envelopLeftBorderColor="#28AFEA"
                envelopRightBorderColor="#0B88DA"
                envelopTopBorderColor="#fff"
                envelopTopColor="#097acc"
              />
            </Link>
          </div>
        </div>
        {/* inner div 2 */}
        <div className="w-1/2 mx-auto text-center">
          {/* heading */}
          <h2 className="text-xl font-semibold mb-3">Lets create together !</h2>
          <div className="w-full flex flex-row justify-center">
            {/* divider */}
            <Link
              className="transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
              href={"#"}
            >
              <WhatsappSvg size={50} />
            </Link>
            <i className=" border-r-2  m-2 text-xl "></i>
            <Link
              className="transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
              href={"#"}
            >
              <EmailSvg size={50} />
            </Link>
          </div>
        </div>
      </div>

      {/* social links */}
      <div className="w-full flex flex-row flex-wrap items-center justify-center border-t-2">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
