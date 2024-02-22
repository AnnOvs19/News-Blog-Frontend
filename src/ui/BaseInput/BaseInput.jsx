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
      {...props}
    >
      <input type={type} name={name} placeholder={placeholder} value={value} />
    </div>
  );
};

export default BaseInput;
