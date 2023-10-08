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
  const thisComponentRef = useRef<HTMLDivElement>(null);
  const [reveal, setReveal] = useState(false);

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
      className={props?.className ?? "w-1/2 border-r-2 mx-auto text-center"}
      id={props?.id ?? "revealOnClick"}
    >
      {/* button */}

      <Button
        //  class
        appendDefaultClassName={[
          props.buttonClassName,
          reveal ? "opacity-0 hidden z-[-9999]" : "opacity-100",
        ].join(" ")}
        // styles
        style={props?.buttonStyle}
        // actions
        handleClick={() => setReveal(!false)}
      >
        {props?.buttonText ?? "Click me to reveal"}
      </Button>

      {/* content */}
      <div
        //   class
        className={`w-full ${
          reveal
            ? props?.contentClassName ??
              "flex flex-row justify-center opacity-100 translate-y-0 transition-all duration-500 ease-in-out"
            : "transition-none  absolute top-0 left-0 opacity-0  translate-y-8 z-[-9999]"
        }`}
        // style
        style={props?.contentStyle}
      >
        {props?.children ?? "Nothing to render"}
      </div>
    </div>
  );
};

export default RevealOnClick;
