import React from 'react';

import footerFacebook from "../../assets/icons/footer-facebook.svg";
import footerTwitter from "../../assets/icons/footer-twitter.svg";
import footerInstagram from "../../assets/icons/footer-instagram.svg"
import footerIn from "../../assets/icons/footer-in.svg"
import "./footer.scss";

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className='footer-box'>
                <div className='footer-box__contacts'>
                    <p>Finstreet 118 2561 Fintown</p>
                    <p>Hello@finsweet.com 020 7993 2905</p>
                </div>
                <div className='footer-box__network'>
                    <img src={footerFacebook} alt="#" />
                    <img src={footerTwitter} alt="#" />
                    <img src={footerInstagram} alt="#" />
                    <img src={footerIn} alt="#" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;