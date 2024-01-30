import React, { useEffect, useState } from 'react';

import "./modalLogin.scss"
import BaseInput from '../../ui/BaseInput/BaseInput';
import BaseButton from '../../ui/BaseButton/BaseButton';

const ModalLogin = ({ active, setActive }) => {

    const [activeTab, setActiveTab] = useState(0);



    return (
        <div className={active ? "modalLogin activeModal" : "modalLogin"} onClick={() => setActive(false)}>
            <div className='modalLogin-content' onClick={(e) => e.stopPropagation()}>
                <div className='head'>
                    <div className='head__login' onClick={() => setActiveTab(0)}>
                        <h3 className={activeTab == 0 ? 'base-title activeTab' : 'base-title'}>Sign in</h3>
                    </div>
                    <div className='head__register' onClick={() => setActiveTab(1)}>
                        <h3 className={activeTab == 1 ? 'base-title activeTab' : 'base-title'}>New account</h3>
                    </div>
                </div>
                <form className='body'>
                    {
                        activeTab == 0 ? (
                            <div className='body__login'>
                                <BaseInput name={"email"} type={"email"} placeholder={"E-mail"} />
                                <BaseInput name={"password"} type={"password"} placeholder={"Password"} />
                                <BaseButton styles={"modal-btn"}>Log in</BaseButton>
                            </div>
                        ) : (
                            <div className='body__register'>
                                <BaseInput name={"name"} type={"text"} placeholder={"Name"} />
                                <BaseInput name={"email"} type={"email"} placeholder={"E-mail"} />
                                <BaseInput name={"password"} type={"password"} placeholder={"Password"} />
                                <BaseButton styles={"modal-btn"}>Register</BaseButton>
                            </div>
                        )
                    }


                </form>
            </div>
        </div>
    );
};

export default ModalLogin;