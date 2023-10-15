import Link from "next/link";
import React from "react";

type LinkProps = ComponentProps & {
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
};

/**
 * A Link component that accepts custom CSS classes, styles, and a click handler.
 *
 *
 * @param className A custom CSS class to apply to the Link.
 * @param style A custom CSS style to apply to the Link.
 * @param appendDefaultClassName A boolean value to indicate whether to append or replace classList by default true.
 * @param children The content of the Link.
 * @param href url
 * @param target
 * @returns A React element representing the Link.
 */
const LinkComponent: React.FC<LinkProps> = (props) => {
  // Destructure props into individual values
  const {
    className,
    style,
    appendDefaultClassName = true,
    children = "Link",
    href,
    target,
  } = props;

  return (
    <Link
      className={
        appendDefaultClassName
          ? // Add classNames to default classList if true
            [
              "min-w-[130px] sm:min-w-[180px] max-w-[20%]  text-center bg-gradient-to-r from-red-500 via-pink-800 to-slate-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-transform duration-500 ease-in-out hover:-translate-y-2",
              className,
            ].join(" ")
          : // Replace default class with new class provided if false
            className
      }
      style={style}
      href={href}
      target={target}
    >
      {/* label */}
      {children}
    </Link>
  );
};

export default LinkComponent;
