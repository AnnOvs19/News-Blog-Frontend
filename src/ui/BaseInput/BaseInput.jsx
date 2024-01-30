import React from 'react';

import "./baseInput.scss"

const BaseInput = ({ styles, name, type, placeholder, ...props }) => {
    return (
        <div className={styles ? `${styles} baseInput` : "baseInput"} {...props}>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    );
};

export default BaseInput;