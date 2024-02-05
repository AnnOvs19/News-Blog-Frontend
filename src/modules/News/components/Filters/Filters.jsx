import React from 'react';

import "./filters.scss"
import BaseInput from '../../../../ui/BaseInput/BaseInput';
import BaseButton from '../../../../ui/BaseButton/BaseButton';
import Dropdown from '../../../../components/Dropdown/Dropdown';

const Filters = (props) => {
    return (
        <div className='filters'>
            <div className='filters-box'>
                <div className='filters-box__search'>
                    <BaseInput styles={"filters-box__search-input"} placeholder="Enter your query in the search bar" type={"text"} name={"search"} />
                    <BaseButton styles={"filters-box__search-button"}>Search</BaseButton>
                </div>
                <div className='filters-box__dropdown'>
                    <Dropdown type={0} text={"Sorting by date"} />
                    <Dropdown type={1} text={"Sorting by tags"} />
                </div>

            </div>
        </div>
    );
};

export default Filters;