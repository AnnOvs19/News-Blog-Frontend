import React from "react";
import NewsPost from "../../modules/NewsPost/components/NewsPost/NewsPost";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const NewsPage = (props) => {
  return (
    <div>
      <Header />
      <NewsPost />
      <Footer />
    </div>
  );
};

export default NewsPage;
