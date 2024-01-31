import React from 'react';

import "./baseButton.scss";

const BaseButton = ({ styles, children, ...props }) => {
    return (
        <button className={styles ? `${styles} baseBtn` : "baseBtn"} {...props} >
            {children}
        </button>
    );
};

export default BaseButton;