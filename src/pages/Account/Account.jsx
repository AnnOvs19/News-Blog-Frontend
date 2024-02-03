import React from 'react';
import ProfileUser from '../../modules/Profile/components/ProfileUser/ProfileUser';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Account = (props) => {
    return (
        <div>
            <Header />
            <ProfileUser />
            <Footer />
        </div>
    );
};

export default Account;