import React from 'react';

import "./profileUser.scss"
import ProfileUserHead from '../ProfileUserHead/ProfileUserHead';
import ProfileUserList from '../ProfileUserList/ProfileUserList';
import MiniSliderList from '../../../../components/MiniSlider/MiniSliderList/MiniSliderList';
import { newsArray } from '../../../News/store/newsArray';

const ProfileUser = (props) => {
    //С помощью редакса или бэка сделать фильтрацию новостей в слайдерах
    const arrMiniSlider = newsArray.filter((item, index) => index < 9);
    return (
        <div>
            <ProfileUserHead />
            <ProfileUserList />
            {/* <MiniSliderList newsData={arrMiniSlider} /> */}
        </div>
    );
};

export default ProfileUser;