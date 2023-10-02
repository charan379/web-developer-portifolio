import React from "react";

const Header: React.FC = () => {
  return (
    <header className="inline-flex items-center justify-between w-full mb-1 align-top border-b-4 border-gray-300">
      {/* left block */}
      <section className="block">
        {/* name */}
        <h1 className="mb-1 text-3xl sm:text-5xl font-bold text-gray-700">
          Charanteja Yandrapti
        </h1>
        {/* Job Title */}
        <h2 className="m-1 text-1xl sm:text-2xl font-semibold text-gray-700">
          Full Stack Web Development
        </h2>
        {/* location */}
        <h3 className="m-1 font-semibold text-sm sm:text-lg text-gray-500">
          Chennai, India &#127760;
        </h3>
      </section>
      {/* right block */}
      <section
        className="justify-between px-3 mt-0 mb-5 text-4xl font-bold leading-none text-white initials-container print:bg-black"
        style={{ paddingBottom: "1.5rem", paddingTop: "1.5rem" }}
      >
        {/* photo */}
        {/* <div className="hidden w-20 h-20 rounded-full sm:inline-flex items-center justify-center bg-gray-200 text-gray-400">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div> */}
      </section>
    </header>
  );
};

export default Header;
