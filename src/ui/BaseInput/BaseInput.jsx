import React from "react";

import "./baseInput.scss";

const BaseInput = ({
  styles,
  name,
  type,
  placeholder,
  invalid,
  value,
  ...props
}) => {
  return (
    <div
      className={
        styles
          ? `${styles} baseInput ${invalid ? "invalid" : ""}`
          : `${invalid ? "invalid" : ""} baseInput`
      }
    >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </div>
  );
};

export default BaseInput;
