import React from 'react';

import "./profileUserList.scss"
import ProfileUserItem from '../ProfileUserItem/ProfileUserItem';
import { newsArray } from '../../../News/store/newsArray';

const ProfileUserList = (props) => {
    return (
        <div className='profileUserList'>
            <div className='profileUserList__array'>
                {newsArray?.map((news) => {
                    return (
                        <ProfileUserItem newsData={news} />
                    )
                })}
            </div>
        </div>
    );
};

export default ProfileUserList;