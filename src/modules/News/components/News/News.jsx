import React from 'react';

import Filters from '../Filters/Filters';
import NewsList from '../NewsList/NewsList';
import "./news.scss"
import ModalNotice from '../../../../components/ModalNotice/ModalNotice';



const News = (props) => {
    return (
        <div>
            <Filters />
            <NewsList />
        </div>
    );
};

export default News;