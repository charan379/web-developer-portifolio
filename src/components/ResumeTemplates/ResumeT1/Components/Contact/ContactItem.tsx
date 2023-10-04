import React from "react";
import AttributeValuePair, { AttributeValuePairCompProps } from "@/components/AttributeValuePair";


interface ContactItemProps {
    attribute: string;
    value: React.ReactElement | string;
    key: string | number;
}

const avpStyles: Partial<AttributeValuePairCompProps> = {
    className: "w-full flex flex-col overflow-hidden",
    attributeClassName: "w-full text-[0.5rem] sm:text-sm font-bold text-gray-600 uppercase break-words",
    valueClassName: "w-full text-[0.5rem] sm:text-lg tracking-wider break-words"
}


const ContactItem: React.FC<ContactItemProps> = (props) => {

    const { attribute, value, key } = props;

    return (
        <AttributeValuePair
            className={avpStyles.className}
            attributeClassName={avpStyles.attributeClassName}
            valueClassName={avpStyles.valueClassName}
            AttributeAndValue={{ attribute, value }}
            key={key}
            separator={<></>} />
    )
}


export default ContactItem;