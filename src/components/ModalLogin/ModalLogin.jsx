import React from 'react';

import "./modalLogin.scss"
import BaseInput from '../../ui/BaseInput/BaseInput';
import BaseButton from '../../ui/BaseButton/BaseButton';

const ModalLogin = ({ active, setActive }) => {
    return (
        <div className={active ? "modalLogin activeModal" : "modalLogin"}>
            <div className='modalLogin-content' onClick={(e) => e.stopPropagation()}>
                <div className='head'>
                    <div className='head__login'><h3 className='base-title'>Sign in</h3></div>
                    <div className='head__register'><h3 className='base-title'>New account</h3></div>
                </div>
                <div className='body'>
                    <div className='body__login'>
                        <BaseInput name={"email"} type={"email"} placeholder={"e-mail"} />
                        <BaseInput name={"password"} type={"password"} placeholder={"password"} />
                        <BaseButton styles={"modal-btn"}>Sign in</BaseButton>
                    </div>
                    <div className='body__register'></div>
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;