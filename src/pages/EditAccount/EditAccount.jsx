import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EditProfileUser from '../../modules/EditProfile/components/EditProfileUser/EditProfileUser';


const EditAccount = (props) => {
    return (
        <div className='editAccount'>
            <Header />
            <EditProfileUser />
            <Footer />
        </div>
    );
};

export default EditAccount;