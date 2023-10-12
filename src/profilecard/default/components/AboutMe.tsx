import Text from "@/components/Text";
import React from "react";

interface AboutMeProps extends ComponentProps {
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
}
const AboutMe: React.FC<AboutMeProps> = (props) => {
  return (
    <>
      <div className="my-3 px-2 cursor-pointer select-none">
        <h4
          className="px-4 py-3 pt-2 text-base text-left text-orange-600 hidden sm:block border-anime-2"
          style={props?.contentStyle}
        >
          <Text appendDefaultClassName className="sm:text-base text-gray-600">
            I am an enthusiastic Learner/Developer dedicated to a journey of
            continuous growth and progress within the ever-evolving landscape of
            technology and development. My passion lies in not only creating
            innovative solutions but also in the process of acquiring new
            knowledge and skills.
          </Text>
        </h4>
      </div>
    </>
  );
};

export default AboutMe;
