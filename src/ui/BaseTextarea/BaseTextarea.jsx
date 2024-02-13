import React from 'react';

import "./baseTextarea.scss"

const BaseTextarea = ({ styles, name, placeholder, children, invalidTextarea, ...props }) => {
    return (
        <textarea
            className={styles ? `${styles} baseTextarea ${invalidTextarea ? "invalidTextarea" : ""}` : `${invalidTextarea ? "invalidTextarea" : ""} baseTextarea`} {...props}
            name={name}
            placeholder={placeholder}
            cols="30" rows="10"{...props}></textarea>
    );
};

export default BaseTextarea;