import React from "react";

interface ContentProps extends ComponentProps {};


const Contect: React.FC<ContentProps> = (props) => {
    const { className, style, children } = props;


    return (
        <>
            <div className={className ?? "w-full min-h-full max-w-full flex flex-row"} style={style}>
                {children}
            </div>
        </>
    )
}

export default Contect;