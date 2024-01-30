import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import News from '../../modules/News/components/News/News';

const Home = (props) => {
    return (
        <div>
            <Header />
            <News />
            <Footer />
        </div>
    );
};

export default Home;