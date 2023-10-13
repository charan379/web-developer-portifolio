import React, { PropsWithChildren } from "react";
import styles from "./profilecardContainer.module.css";
import { twc } from "@/lib/utils/twc";

/**
 * ProfilecardContainer is a component that displays a profile card.
 *
 */
const ProfilecardContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    // Render Profile card container with children
    <div
      className={twc(
        "w-11/12 pt-2 md:pt-3 flex md:gap-y-4 flex-col items-center justify-center",
        "max-w-2xl 2xl:max-w-screen-lg m-5 bg-slate-50 rounded-xl",
        "shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]",
        styles.profileCardInitAnime
      )}
    >
      {children}
    </div>
  );
};

export default ProfilecardContainer;
