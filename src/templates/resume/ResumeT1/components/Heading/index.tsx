import React from "react";

interface HeadingProps extends ComponentProps {}

const Heading: React.FC<HeadingProps> = (props) => {
  const { children, className, style } = props;
  return (
    <h2
      className={
        className ??
        "text-gray-900 font-bold font-montserrat text-xs sm:text-lg uppercase mb-4 sm:mb-6 tracking-widest break-words cursor-pointer rt1-heading after:border-b-[0.1rem] sm:after:border-b-[0.15rem]"
      }
      style={style}
    >
      {children}
    </h2>
  );
};

export default Heading;
