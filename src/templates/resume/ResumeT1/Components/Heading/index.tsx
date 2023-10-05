import React, { PropsWithChildren } from "react";

interface HeadingProps extends ComponentProps, PropsWithChildren {}

const Heading: React.FC<HeadingProps> = (props) => {
  const { children, className, style } = props;
  return (
    <h2
      className={
        className ??
        "text-gray-900 font-bold font-montserrat text-xs sm:text-xl uppercase mb-4 sm:mb-6 tracking-wide break-words cursor-pointer rt1-heading after:border-b-[0.1rem] sm:after:border-b-[0.15rem]"
      }
      style={style}
    >
      {children}
    </h2>
  );
};

export default Heading;
