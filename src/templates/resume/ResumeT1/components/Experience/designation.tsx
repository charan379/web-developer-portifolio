import Text from "@/components/Text";
import React from "react";

const Designation: React.FC<ComponentProps> = (props) => {
  return (
    <div className="">
      <div className="flex flex-row items-center gap-10">
        {/* designation */}
        <h4 className="text-gray-600 font-montserrat font-bold text-base leading-normal circle-left">
          Trainee
        </h4>
        {/* time period */}
        <span className="text-gray-500 font-roboto400 font-bold text-xs leading-normal">
          2022 - Present
        </span>
      </div>
      <ul className="ml-6 left-full-border">
        <>
          <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Text>
        </>
        <>
          <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Text>
        </>
        <>
          <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Text>
        </>
        <>
          <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Text>
        </>
        <>
          <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Text>
        </>
      </ul>
    </div>
  );
};

export default Designation;
