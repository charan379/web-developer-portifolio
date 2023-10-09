import React from "react";


const Text: React.FC<ComponentProps> = (props) => {

    // Destructuring props into individual values

    const { className, appendDefaultClassName = true, style, children = "Sample Text" } = props;

    return (
        <p className={appendDefaultClassName
            ? // Append to default class
            ["leading-normal text-gray-400 text-base font-roboto400", className].join(" ")
            : // Replace the default class
            className}
            style={style}>

            {/* render text here */}

            {children}
        </p>
    )
}

export default Text;