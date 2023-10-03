import React from "react";

interface KeyValuePairProps extends ComponentProps {
    keyClassName?: string;
    keyStyle?: React.CSSProperties;
    valueClassName?: string;
    valueStyle?: React.CSSProperties;
    keyValuePair: {
        key: string, value: React.ReactElement | string
    };
    separator?: string,
    separatorClassName?: string,
    separatorStyle?: React.CSSProperties,
    key: string | number;
}

const KeyValuePair: React.FC<KeyValuePairProps> = (props) => {

    const { key = "kvp1", className, style, keyClassName, keyStyle, valueClassName, valueStyle, keyValuePair, separator, separatorClassName, separatorStyle } = props;

    return (
        <div className={className ?? "max-w-full md:max-w-[50%] min-w-[50%] text-sm md:text-base p-1 flex flex-row flex-nowrap overflow-hidden break-words"} key={key} style={style}>
            {/* key */}
            <span id="key" className={keyClassName ?? "min-w-[65px]  text-left font-bold break-words "} style={keyStyle}>
                {keyValuePair.key}
            </span>
            {/* separator */}
            <span id="separator" className={separatorClassName ?? "mx-1 text-left font-bold"} style={separatorStyle}>
                {separator ?? ":"}
            </span>
            {/* value */}
            <span id="value" className={valueClassName ?? "max-w-full md:max-w-[50%] text-left break-words"} style={valueStyle}>
                {keyValuePair.value}
            </span>
        </div>
    )
}

export default KeyValuePair;