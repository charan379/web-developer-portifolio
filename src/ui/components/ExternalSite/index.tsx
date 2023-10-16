import React from "react";
import Text from "../Text";


interface ExternalSiteProps extends ComponentProps {
    siteUrl: string;
    displayText: string;
}

const PlainSiteLink: React.FC<ExternalSiteProps> = (props) => {
    const { siteUrl, displayText, className, style } = props;

    return (
        <a href={siteUrl} target="_blank" className={className} style={style}>
            <Text className="tracking-wide">
                {displayText}
            </Text>
        </a>
    )
}

export { PlainSiteLink };