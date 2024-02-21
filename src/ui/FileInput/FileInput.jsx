import React from "react";

import "./fileInput.scss";

const FileInput = ({
  children,
  value,
  onChange,
  disabled,
  accept,
  ...props
}) => {
  return (
    <div>
      <label htmlFor="containedButton-file" className="fileInput">
        <input
          type="file"
          value={value}
          accept={accept}
          disabled={disabled}
          onChange={disabled ? () => {} : onChange}
        />
        {children}
      </label>
    </div>
  );
};

export default FileInput;
