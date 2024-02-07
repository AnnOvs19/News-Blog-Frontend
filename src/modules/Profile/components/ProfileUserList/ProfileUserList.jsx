import React from 'react';

import "./profileUserList.scss"
import ProfileUserItem from '../ProfileUserItem/ProfileUserItem';
import { newsArray } from '../../../News/store/newsArray';
import BaseButton from '../../../../ui/BaseButton/BaseButton';
import { Link } from 'react-router-dom';

const ProfileUserList = (props) => {
    return (
        <div className='profileUserList'>
            <div className='profileUserList__array'>
                <div className='profileUserList__array-head'>
                    <h1 className='base-tile'>My posts</h1>
                    <Link to={"/article"}>
                        <BaseButton>Create a new post</BaseButton>
                    </Link>
                </div>
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