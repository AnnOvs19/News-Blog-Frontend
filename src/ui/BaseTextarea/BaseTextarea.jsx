import React from 'react';

import "./baseTextarea.scss"

const BaseTextarea = ({ styles, name, placeholder, children, ...props }) => {
    return (
        <textarea
            className={styles ? `${styles} baseTextarea` : "baseTextarea"}

            name={name}
            placeholder={placeholder}
            cols="30" rows="10"{...props}></textarea>
    );
};

export default BaseTextarea;