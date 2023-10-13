import React, { useMemo } from "react";

type ButtonProps = ComponentProps & {
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
};

/**
 * A button component that accepts custom CSS classes, styles, and a click handler.
 *
 * @example
 * ```
 * const Button = ({ handleClick }) => {
 *   return <Button onClick={handleClick}>Click Me!</Button>;
 * };
 *
 *
 * @param className A custom CSS class to apply to the button.
 * @param style A custom CSS style to apply to the button.
 * @param appendDefaultClassName A boolean value to indicate whether to append or replace classList by default true.
 * @param children The content of the button.
 * @param handleClick A function to be called when the button is clicked.
 * @param type Type of button > "button" | "submit" | "reset"
 * @returns A React element representing the button.
 */
const Button: React.FC<ButtonProps> = (props) => {
  // Destructure props into individual values
  const {
    className,
    style,
    appendDefaultClassName = true,
    children = "Button",
    handleClick,
    type = "button",
  } = props;

  // Use the `useMemo` hook to cache the handleClick function. This will improve performance if the handleClick function is expensive to compute.
  const handleClickWithoutDefault = useMemo(
    () => handleClick ?? (() => {}),
    [handleClick]
  );

  return (
    <button
      type={type}
      className={
        appendDefaultClassName
          ? // Add classNames to default classList if true
            [
              "min-w-[50%] w-full md:w-max bg-gradient-to-r from-red-600 hover:from-slate-500 via-pink-800 to-slate-800 hover:to-stone-800 p-2 my-1 rounded-md text-slate-50 btn-border-anime-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all",
              className,
            ].join(" ")
          : // Replace default class with new class provided if false
            className
      }
      style={style}
      onClick={handleClickWithoutDefault}
    >
      {/* label */}
      {children}
    </button>
  );
};

export default Button;
