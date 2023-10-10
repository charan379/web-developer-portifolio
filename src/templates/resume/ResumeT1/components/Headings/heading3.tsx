import React from "react";

const Heading3: React.FC<ComponentProps> = (props) => {
  const { children, className, appendDefaultClassName = true, style } = props;
  return (
    <h4 className={appendDefaultClassName
      ? // Append to default class
      ["text-[9px] sm:text-xs md:text-sm text-gray-600 font-roboto400 font-semibold tracking-wide leading-normal circle-left before:h-[7px] sm:before:h-[15px] before:w-[7px] sm:before:w-[15px] before:top-0 sm:before:top-[2px]", className].join(" ")
      : // Replace the default class
      className
    }>
      {children}
    </h4>
  );
};

export default Heading3;
