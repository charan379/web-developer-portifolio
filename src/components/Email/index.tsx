import React from "react";

interface EmailProps extends ComponentProps {
    email: string;
}

const PlainMailTo: React.FC<EmailProps> = (props) => {

    const { email, className, style } = props;

    return (
        <a href={`mailto:${email}`} className={className} style={style}>
            {email}
        </a>
    )
}

export { PlainMailTo };