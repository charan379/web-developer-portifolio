import React from "react";
import Heading from "./heading";
import Text from "@/components/Text";


const Summary: React.FC<ComponentProps> = (props) => {

  const { className, style } = props;
  return (
    <div className={className ?? "pb-2"} style={style}>
      <Heading>Summary</Heading>
      <Text className="mt-2 px-2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
      </Text>
    </div>
  );
};

export default Summary;
