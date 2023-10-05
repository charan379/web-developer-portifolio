import React from "react";

const Header: React.FC<ComponentProps> = (props) => {
  const { className, style } = props;
  return (
    <header
      className={
        className ??
        "inline-flex flex-col items-start justify-between w-full mb-1 align-top border-b-4 border-gray-300"
      }
      style={style}
    >
      {/* name */}
      <h1 className="font-bold text-xl sm:text-5xl text-gray-900 uppercase">
        Charanteja Yandrapti
      </h1>
      {/* Job Title / profession */}
      <h2 className="sm:ml-1 font-semibold text-[14px] sm:text-xl text-gray-700">
        Full Stack Web Development
      </h2>
      {/* location */}
      <h3 className="sm:ml-1 font-semibold text-sm sm:text-base text-gray-500">
        Chennai, India &#127760;
      </h3>
    </header>
  );
};

export default Header;
