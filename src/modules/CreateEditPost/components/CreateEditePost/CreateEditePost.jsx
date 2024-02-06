import React from 'react';

import "./createEditePost.scss"
import Dropdown from '../../../../components/Dropdown/Dropdown';
import BaseTextarea from '../../../../ui/BaseTextarea/BaseTextarea';
import FileInput from '../../../../ui/FileInput/FileInput';
import BaseButton from '../../../../ui/BaseButton/BaseButton';
import BaseInput from '../../../../ui/BaseInput/BaseInput';

const CreateEditePost = (props) => {



    return (
        <div className='createArticle'>
            <div className='createArticle-box'>
                <h2 className='base-title'>Create post</h2>
                <div className='createArticle-box__content'>
                    <div className='createArticle-box__content-info'>
                        <Dropdown type={1} text={"Sorting by tags"} />
                        <div className='info'>
                            <p>Title of article</p>
                            <BaseInput />
                            <span></span>
                        </div>
                        <div className='info'>
                            <p>Your text</p>
                            <BaseTextarea name={"your-text"} placeholder={"Your text"} />
                            <span></span>
                        </div>
                        <BaseButton>
                            <FileInput accept="image/*">Edit photo</FileInput>
                        </BaseButton>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEditePost;