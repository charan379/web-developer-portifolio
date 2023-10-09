"use client";

import { useOnOutsideClick } from "@charan379/react-hooks";
import React, { useCallback, useRef, useState } from "react";
import Button from "../Button";

interface RevealOnClickProps extends ComponentProps {
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
  buttonText?: string;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  id?: string;
}

const RevealOnClick: React.FC<RevealOnClickProps> = (props) => {
  // ref of this component
  const thisComponentRef = useRef<HTMLDivElement>(null);
  // booelan value to indicate whether to show/hide content
  const [reveal, setReveal] = useState(false);

  // Destructure props into individual values
  const {
    buttonClassName,
    buttonStyle,
    buttonText,
    contentClassName = "flex flex-row justify-center opacity-100 translate-y-0 transition-all duration-500 ease-in-out",
    contentStyle,
    className,
    appendDefaultClassName = true,
    style,
    children = "Nothing to render",
    id = "revealOnClick"
  } = props;

  // logic to hide the content when user click's outside this component
  useOnOutsideClick(
    thisComponentRef,
    useCallback(() => {
      setReveal(!true);
    }, []),
    false
  );

  return (
    <div
      ref={thisComponentRef}
      className={appendDefaultClassName ? ["w-1/2 border-r-2 mx-auto text-center", className].join(" ") : className}
      style={style}
      id={id}
      key={id}
    >
      {/* Button when clicked replace with content */}
      <Button
        className={[
          buttonClassName,
          reveal ? "opacity-0 hidden z-[-9999]" : "opacity-100",
        ].join(" ")}
        appendDefaultClassName={false}
        style={buttonStyle}
        handleClick={() => setReveal(!false)}
      >
        {buttonText}
      </Button>

      {/* Content to be diplayed when button is clicked */}
      <div
        className={["w-full", reveal ? contentClassName : "transition-none  absolute top-0 left-0 opacity-0  translate-y-8 z-[-9999]"].join(" ")}
        style={contentStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default RevealOnClick;
