import React from "react";

const Heading2: React.FC<ComponentProps> = (props) => {
  const { children, className, appendDefaultClassName = true, style } = props;
  return (
    <h3 className={appendDefaultClassName
      ? // Append to default class
      ["text-lg font-bold font-roboto400 text-gray-700 tracking-wide rect-left", className].join(" ")
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
