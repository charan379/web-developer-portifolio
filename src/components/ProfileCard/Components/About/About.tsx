import React from "react";

const About: React.FC<ComponentProps> = (props) => {
  return (
    <>
      <h4 className={`${props.className}`}>
        I am John Deo, a passionate and dedicated web developer with a keen eye
        for detail and a strong desire to create exceptional online experiences.
        My journey into the world of web development began with a fascination
        for technology and a determination to master the art of coding.
      </h4>
    </>
  );
};

export default About;
