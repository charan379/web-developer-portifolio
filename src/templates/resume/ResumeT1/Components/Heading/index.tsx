import React, { PropsWithChildren } from 'react'


interface HeadingProps extends ComponentProps, PropsWithChildren { };

const Heading: React.FC<HeadingProps> = (props) => {
    const { children, className, style } = props;
    return (
        <h2 className={className ?? "text-gray-900 font-bold text-sm sm:text-xl rt1-heading uppercase mb-6 tracking-widest break-words"} style={style}>
            {children}
        </h2>
    )
}

export default Heading;