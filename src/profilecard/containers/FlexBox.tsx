import generateClassName from "@/lib/utils/getClassName";
import { twc } from "@/lib/utils/twc";
import React from "react";

/**
 * FlexBox is a component that displays a flex-box and renders its childred.
 * default class
 *  "flex flex-col md:flex-row flex-nowrap",
 *  "items-center justify-center",
 *   "gap-1 md:gap-3"
 */
const FlexBox: React.FC<ComponentProps> = (props) => {
  // destructure props into individual values
  const {
    className = "", // Additional CSS class from the parent component
    appendDefaultClassName = true, // Flag indicating whether to append to the default class
    style, // Additional styles from the parent component
    children, // Child components
  } = props;

  // Define the base CSS class
  const baseClass = twc(
    "flex flex-col md:flex-row flex-nowrap",
    "items-center justify-center",
    "gap-1 md:gap-3"
  );

  // Generate the final CSS class based on parameters
  const finalClassName = generateClassName(
    baseClass,
    className,
    appendDefaultClassName
  );

  return (
    // renders flex box
    <div className={finalClassName} style={style}>
      {children}
    </div>
  );
};

export default FlexBox;
