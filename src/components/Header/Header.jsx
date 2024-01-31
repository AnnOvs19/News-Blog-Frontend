import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from "../../assets/icons/Logo.svg";

import "./header.scss";

import BaseButton from '../../ui/BaseButton/BaseButton';
import ModalLogin from '../ModalLogin/ModalLogin';



const Header = (props) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <header className='header'>
            <div className='header-box'>
                <Link to={"/"}><img src={headerLogo} alt="#" /></Link>
                <nav className='header-box__nav'>
                    <ul>
                        <li> <Link to={"/"}>Home</Link></li>
                        <li>About Us</li>
                        <li>Contact us</li>

                    </ul>
                    <BaseButton styles={"header-box__nav-btn"} onClick={() => setModalActive(true)}>Log in</BaseButton>
                    <ModalLogin active={modalActive} setActive={setModalActive} />
                </nav>

            </div>
        </header>
    );
};

export default Header;