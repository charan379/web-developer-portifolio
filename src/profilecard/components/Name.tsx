import Text from "@/components/Text";
import React, { PropsWithChildren } from "react";

const Name: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="font-roboto400 py-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-2xl font-semibold md:text-3xl text-center">
      <p className="text-center text-transparent bg-clip-text bg-gradient-to-l from-red-500 via-pink-500 to-yellow-500">
        Hi I'm,{" "}
      </p>{" "}
      {children}
    </h1>
  );
};

export default Name;
