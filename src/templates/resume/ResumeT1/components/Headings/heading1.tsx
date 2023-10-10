import React from "react";

const Heading1: React.FC<ComponentProps> = (props) => {
  const { children, className, appendDefaultClassName = true, style } = props;
  return (
    <h2
      className={appendDefaultClassName
        ? // Append to default class
        ["text-gray-900 font-bold font-montserrat text-xs sm:text-lg uppercase mb-4 sm:mb-6 tracking-widest break-words cursor-pointer rt1-heading after:border-b-[0.1rem] sm:after:border-b-[0.15rem]", className].join(" ")
        : // Replace the default class
        className
      }
      style={style}
    >
      {children}
    </h2>
  );
};

export default Heading1;