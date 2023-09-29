"use client";

import { useOnOutsideClick } from "@charan379/react-hooks";
import React, { PropsWithChildren, useCallback, useRef, useState } from "react";

interface RevealOnClickProps extends ComponentProps, PropsWithChildren {
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
    }, [thisComponentRef.current]),
    false
  );

  return (
    <div
      ref={thisComponentRef}
      className={props?.className ?? "w-1/2 border-r-2 mx-auto text-center"}
      id={props?.id ?? "revealOnClick"}
    >
      {/* button */}

      <button
        //   class
        className={`${
          props.buttonClassName ??
          "w-1/2 bg-gradient-to-r from-red-500 via-pink-800 to-slate-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        } ${
          reveal ? "opacity-0 top-0 left-0 absolute z-[-9999]" : "opacity-100"
        }`}
        // styles
        style={props?.buttonStyle}
        // actions
        onClick={() => setReveal(!false)}
      >
        {props?.buttonText ?? "Click me to reveal"}
      </button>

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
