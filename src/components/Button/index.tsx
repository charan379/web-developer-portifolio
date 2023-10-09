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
    appendDefaultClassName,
    children,
    handleClick,
    type,
  } = props;

  // Use the `useMemo` hook to cache the handleClick function. This will improve performance if the handleClick function is expensive to compute.
  const handleClickWithoutDefault = useMemo(
    () => handleClick ?? (() => { }),
    [handleClick]
  );

  return (
    <button
      type={type}
      className={
        appendDefaultClassName
          ? // Add classNames to default classList if true
          ["bg-blue-500 hover:bg-blue-700 text-white font-normal font-roboto400 py-2 px-4 rounded", className].join(" ")
          : // Replace default class with new class provided if false
          className}
      style={style}
      onClick={handleClickWithoutDefault}
    >
      {/* label */}
      {children ?? "Button"}
    </button>
  );
};

export default Button;
