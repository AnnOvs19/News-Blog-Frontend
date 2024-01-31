import React from 'react';

import "./baseInput.scss"

const BaseInput = ({ styles, name, type, placeholder, invalid, ...props }) => {
    return (
        <div className={styles ? `${styles} baseInput ${invalid ? "invalid" : ""}` : `${invalid ? "invalid" : ""} baseInput`} {...props}>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    );
};

export default BaseInput;