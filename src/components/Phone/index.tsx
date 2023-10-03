import React from "react";

interface PhoneProps extends ComponentProps {
    country?: string;
    countryCode?: string;
    number: string;
}

const PlainCallTo: React.FC<PhoneProps> = (props) => {
    const { number, country, countryCode = "", className, style } = props;

    return (
        <a href={`tel:${countryCode}${number}`} className={className} style={style}>
            {countryCode} {number}
        </a>
    )
}

export { PlainCallTo };

