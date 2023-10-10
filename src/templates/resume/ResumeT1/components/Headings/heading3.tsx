import React from "react";

const Heading3: React.FC<ComponentProps> = (props) => {
  const { children, className, appendDefaultClassName = true, style } = props;
  return (
    <h4 className={appendDefaultClassName
      ? // Append to default class
      ["text-gray-600 font-roboto400 font-semibold tracking-wide text-base leading-normal circle-left", className].join(" ")
      : // Replace the default class
      className
    }>
      {children}
    </h4>
  );
};

export default Heading3;
