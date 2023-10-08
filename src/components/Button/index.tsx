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
 * @param appendDefaultClassName A CSS class to append to the button's default class name.
 * @param children The content of the button.
 * @param handleClick A function to be called when the button is clicked.
 * @param type Type of button > "button" | "submit" | "reset"
 * @returns A React element representing the button.
 */
const Button: React.FC<ButtonProps> = ({
  className,
  style,
  appendDefaultClassName,
  children,
  handleClick,
  type,
}) => {
  // Use the `useMemo` hook to cache the handleClick function. This will improve performance if the handleClick function is expensive to compute.
  const handleClickWithoutDefault = useMemo(
    () => handleClick ?? (() => {}),
    [handleClick]
  );

  return (
    <button
      type={type}
      className={[
        // Apply the custom CSS class, if provided.
        className,
        // Apply the default CSS classes.
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        // Append the additional CSS class, if provided.
        appendDefaultClassName,
      ].join(" ")}
      style={style}
      onClick={handleClickWithoutDefault}
    >
      {/* label */}
      {children ?? "Button"}
    </button>
  );
};

export default Button;
