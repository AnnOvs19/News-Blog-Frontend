import React from 'react';


import headProfileEdite from "../../../../assets/icons/headProfileEdite.svg"
import "./profileUserHead.scss";
import { user } from '../../store/mockUser';
import { Link } from 'react-router-dom';

const ProfileUserHead = (props) => {

    return (
        <div className='profileUserHead'>
            <div className='profileUserHead-box' >
                <img className='img-avatar' src={user.avatar} alt="#" />
                <div className='profileUserHead-box__content' >
                    <div>
                        <h2 className='base-title'>{user.name}</h2>
                        <Link to={"/profile/edit"}>
                            <img className='img-editProfile' src={headProfileEdite} alt="#" />
                        </Link>

                    </div>

                    <p className='base-subtitle'>{user.email}</p>
                    <span className='base-text' >{user.status}</span>
                </div>

            </div>
            <div className='profileUserHead-colorLine' >
                <div className='profileUserHead-colorLine__violet' ></div>
                <div className='profileUserHead-colorLine__yellow' ></div>
            </div>
        </div >
    );
};

export default ProfileUserHead;