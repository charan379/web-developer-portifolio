import getClassName from "@/lib/utils/getClassName";
import React from "react";
import styles from "./profilecardContainer.module.css";
import { twc } from "@/lib/utils/twc";

/**
 * ProfilecardContainer is a component that displays a profile card.
 *
 */
const ProfilecardContainer: React.FC<ComponentProps> = (props) => {
  // destructure props into individual values
  const {
    className = "", // Additional CSS class from the parent component
    appendDefaultClassName = true, // Flag indicating whether to append to the default class
    style, // Additional styles from the parent component
    children, // Child components
  } = props;

  // Define the base CSS class
  const baseClass = twc(
    "w-11/12 pt-2 md:pt-3 flex md:gap-y-1 flex-col items-center justify-center",
    "max-w-2xl 2xl:max-w-screen-lg m-5 bg-slate-50 rounded-xl",
    "shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]",
    styles.profileCardInitAnime
  );

  // Generate the final CSS class based on parameters
  const finalClassName = getClassName(
    baseClass,
    className,
    appendDefaultClassName
  );

  return (
    // Render Profile card container with children
    <div className={finalClassName} style={style}>
      {children}
    </div>
  );
};

export default ProfilecardContainer;
