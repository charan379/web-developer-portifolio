import React from "react";
import Text from "../Text";

interface PhoneProps extends ComponentProps {
    country?: string;
    countryCode?: string;
    number: string;
}

const PlainCallTo: React.FC<PhoneProps> = (props) => {
    const { number, country, countryCode = "", className, style } = props;

    return (
        <a href={`tel:${countryCode}${number}`} className={className} style={style}>
            <Text>
                {countryCode} {number}
            </Text>
        </a>
    )
}

export { PlainCallTo };

