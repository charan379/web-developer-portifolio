import React from "react";

interface AttributeValuePairCompProps extends ComponentProps {
    attributeClassName?: string;
    attributeStyle?: React.CSSProperties;
    valueClassName?: string;
    valueStyle?: React.CSSProperties;
    AttributeAndValue: {
        attribute: string, value: React.ReactElement | string
    };
    separator?: string,
    separatorClassName?: string,
    separatorStyle?: React.CSSProperties,
    key: string | number;
}

const AttributeValuePair: React.FC<AttributeValuePairCompProps> = (props) => {

    const { key = "kvp1", className, style, attributeClassName, attributeStyle, valueClassName, valueStyle, AttributeAndValue, separator, separatorClassName, separatorStyle } = props;

    return (
        <div className={className ?? "max-w-full md:max-w-[50%] min-w-[50%] text-sm md:text-base p-1 flex flex-row flex-nowrap overflow-hidden break-words"} key={key} style={style}>
            {/* key */}
            <span id="key" className={attributeClassName ?? "min-w-[65px]  text-left font-bold break-words "} style={attributeStyle}>
                {AttributeAndValue.attribute}
            </span>
            {/* separator */}
            <span id="separator" className={separatorClassName ?? "mx-1 text-left font-bold"} style={separatorStyle}>
                {separator ?? ":"}
            </span>
            {/* value */}
            <span id="value" className={valueClassName ?? "max-w-full md:max-w-[50%] text-left break-words"} style={valueStyle}>
                {AttributeAndValue.value}
            </span>
        </div>
    )
}

export default AttributeValuePair;