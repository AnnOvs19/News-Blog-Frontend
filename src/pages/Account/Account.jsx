import React from 'react';
import ProfileUser from '../../modules/Profile/components/ProfileUser/ProfileUser';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MiniSliderList from '../../components/MiniSlider/MiniSliderList/MiniSliderList';
import { newsArray } from '../../modules/News/store/newsArray';

const Account = (props) => {
    const arrMiniSlider = newsArray.filter((item, index) => index < 9);
    return (
        <div>
            <Header />
            <ProfileUser />
            {/* <MiniSliderList newsData={arrMiniSlider} /> */}
            <Footer />
        </div>
    );
};

export default Account;