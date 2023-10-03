import React from "react";

const Header: React.FC<ComponentProps> = (props) => {
  return (
    <header className={props?.className ?? "inline-flex items-center justify-between w-full mb-1 align-top border-b-4 border-gray-300"}
      style={props?.style}
    >
      <section className="flex flex-col gap-1">
        {/* name */}
        <h1 className="font-bold text-3xl sm:text-5xl text-gray-700">
          Charanteja Yandrapti
        </h1>
        {/* Job Title / profession */}
        <h2 className="ml-1 font-semibold text-1xl sm:text-2xl text-gray-700">
          Full Stack Web Development
        </h2>
        {/* location */}
        <h3 className="ml-1 font-semibold text-sm sm:text-lg text-gray-500">
          Chennai, India &#127760;
        </h3>
      </section>
      {/* right block */}
    </header>
  );
};

export default Header;
