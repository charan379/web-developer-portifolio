import React, { PropsWithChildren } from "react";
import AttributeValuePair, {
  AttributeValuePairCompProps,
} from "@/components/AttributeValuePair";

interface ContactItemProps extends PropsWithChildren {
  attribute: string;
  value?: React.ReactElement | string;
  key: string | number;
}

const avpStyles: Partial<AttributeValuePairCompProps> = {
  className: "w-full flex flex-col overflow-hidden",
  attributeClassName:
    "w-full text-[0.5rem] sm:text-[14px] font-bold text-gray-600 uppercase break-words font-roboto400 tracking-wider",
  valueClassName:
    "w-full text-[0.6rem] sm:text-base tracking-tight break-words font-roboto400 text-gray-400",
};

const ContactItem: React.FC<ContactItemProps> = (props) => {
  const { attribute, value, key, children } = props;

  return (
    <AttributeValuePair
      className={avpStyles.className}
      attributeClassName={avpStyles.attributeClassName}
      valueClassName={avpStyles.valueClassName}
      AttributeAndValue={{ attribute, value: children ?? value ?? "" }}
      key={key}
      separator={<></>}
    />
  );
};

export default ContactItem;
