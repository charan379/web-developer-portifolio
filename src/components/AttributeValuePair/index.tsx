import React from "react";

export interface AttributeValuePairCompProps extends ComponentProps {
  attributeClassName?: string;
  attributeStyle?: React.CSSProperties;
  valueClassName?: string;
  valueStyle?: React.CSSProperties;
  AttributeAndValue: {
    attribute: string;
    value: React.ReactElement | string | React.ReactNode;
  };
  separator?: React.ReactElement | string | React.ReactNode;
  separatorClassName?: string;
  separatorStyle?: React.CSSProperties;
  key: string | number;
}

const AttributeValuePair: React.FC<AttributeValuePairCompProps> = (props) => {
  const {
    key,
    className = "max-w-full md:max-w-[50%] min-w-[50%] text-sm md:text-base p-1 flex flex-row flex-nowrap overflow-hidden break-words",
    style,
    attributeClassName = "min-w-[65px]  text-left font-bold break-words",
    attributeStyle,
    valueClassName = "max-w-full md:max-w-[50%] text-left break-words",
    valueStyle,
    AttributeAndValue,
    separator = ":",
    separatorClassName = "mx-1 text-left font-bold",
    separatorStyle,
  } = props;

  return (
    <div
      className={className}
      key={key}
      style={style}
    >
      {/* key */}
      <span
        id="key"
        className={attributeClassName}
        style={attributeStyle}
      >
        {AttributeAndValue.attribute}
      </span>
      {/* separator */}
      {typeof separator !== "string" ? (
        separator
      ) : (
        <span
          id="separator"
          className={separatorClassName}
          style={separatorStyle}
        >
          {separator}
        </span>
      )}

      {/* value */}
      <span
        id="value"
        className={
          valueClassName
        }
        style={valueStyle}
      >
        {AttributeAndValue.value}
      </span>
    </div>
  );
};

export default AttributeValuePair;
