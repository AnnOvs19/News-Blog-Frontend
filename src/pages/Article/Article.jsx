import React from 'react';
import CreateEditePost from '../../modules/CreateEditPost/components/CreateEditePost/CreateEditePost';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';



const Article = (props) => {
    return (
        <div className='article'>
            <Header />
            <CreateEditePost />
            <Footer />
        </div>
    );
};

export default Article;