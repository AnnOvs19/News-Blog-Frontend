import React from "react";
import ProfileUser from "../../modules/Profile/components/ProfileUser/ProfileUser";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Account = (props) => {
  return (
    <>
      <Header />
      <ProfileUser />
      <Footer />
    </>
  );
};

export default Account;
