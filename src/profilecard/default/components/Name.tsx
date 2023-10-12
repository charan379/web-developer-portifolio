import React from "react";

const Name: React.FC<ComponentProps> = (props) => {
  const { children } = props;
  return (
    <h1 className="py-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-3xl font-semibold md:text-4xl text-center sm:text-left">
      {children}
    </h1>
  );
};

export default Name;
