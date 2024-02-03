import React from 'react';

import "./profileUserItem.scss";
import BaseButton from '../../../../ui/BaseButton/BaseButton';
import MockUser from "../../../../assets/images/mockUser.png";
import Like from "../../../../assets/icons/Like.svg";

const ProfileUserItem = ({ newsData }) => {
    return (
        <div className='profileUserItem'>

            <div className='profileUserItem__content'>
                <div className="profileUserItem__content-head">
                    <div className='head-user'>
                        <img className='img-user' src={MockUser} alt="#" />
                        <div className='head-user__title'>
                            <h5 className='base-subtitle'>{newsData.autor}</h5>
                            <span className='base-subtitle' > {newsData.date}</span>
                        </div>
                    </div>
                    <div className='head-like'>
                        <img className='img-like' src={Like} alt="#" />
                        {/* Колво лайков должно приходить с сервера, пока замокано */}
                        <span>455</span>
                    </div>


                </div>
                <h3 className='base-title'>{newsData.title}</h3>
                <p className='base-text'>{newsData.content.substring(0, 300)}...</p>
            </div>
            <img className='img-news' src={newsData.img} alt="#" />
            <div className='profileUserItem__buttons'>
                <BaseButton styles={"buttons-delete"}>Delete a post</BaseButton>
                <BaseButton styles={"buttons-edit"}>Edit the post</BaseButton>
            </div>
        </div>
    );
};

export default ProfileUserItem;