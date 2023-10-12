import Text from "@/components/Text";
import React from "react";

interface AboutMeProps extends ComponentProps {
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
}
const AboutMe: React.FC<AboutMeProps> = (props) => {
  return (
    <>
      <div className={props?.className}>
        <h4
          className={`${props?.contentClassName}`}
          style={props?.contentStyle}
        >
          <Text appendDefaultClassName className="text-gray-600">
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
