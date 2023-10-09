import React from "react";
import Text from "../Text";

interface EmailProps extends ComponentProps {
    email: string;
}

const PlainMailTo: React.FC<EmailProps> = (props) => {

    const { email, className, style } = props;

    return (
        <a href={`mailto:${email}`} className={className} style={style}>
            <Text className="tracking-wide">
                {email}
            </Text>
        </a>
    )
}

export { PlainMailTo };