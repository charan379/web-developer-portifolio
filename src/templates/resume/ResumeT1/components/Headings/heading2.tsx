import React from "react";

const Heading2: React.FC<ComponentProps> = (props) => {
  const { children, className, appendDefaultClassName = true, style } = props;
  return (
    <h3 className={appendDefaultClassName
      ? // Append to default class
      ["text-[10px] sm:text-sm md:text-lg font-bold font-roboto400 text-gray-700 tracking-wide rect-left before:h-[15px] sm:before:h-[25px] before:left-[-5px] sm:before:left-[-10px] before:top-[-2px] sm:before:top-[-5px] before:w-[2px] sm:before:w-[4px]", className].join(" ")
      : // Replace the default class
      className
    }
      style={style}
    >
      {children}
    </h3>
  );
};

export default Heading2;
