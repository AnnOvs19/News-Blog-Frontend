import React, { useEffect, useState } from 'react';

import "./createEditePost.scss"
import Dropdown from '../../../../components/Dropdown/Dropdown';
import BaseTextarea from '../../../../ui/BaseTextarea/BaseTextarea';
import FileInput from '../../../../ui/FileInput/FileInput';
import BaseButton from '../../../../ui/BaseButton/BaseButton';
import BaseInput from '../../../../ui/BaseInput/BaseInput';
import BackgroundNews from "../../../../assets/images/backgroundNews.jpg";
import { user } from '../../../Profile/store/mockUser';
import { Link } from 'react-router-dom';

const CreateEditePost = (props) => {
    const [bacgroundNews, setBacgroundNews] = useState(BackgroundNews);

    const [title, setTitle] = useState("");
    const [titleDirty, setTitleDirty] = useState(false);
    const [titleError, setTitleError] = useState("Строка с заголовком статьи не может быть пустой");
    const [disable, setDisable] = useState(true);

    const [formValid, setFormValid] = useState(false);

    function handleBacgroundNews({ target: { files } }) {
        const loadedImage = files[0];
        setBacgroundNews(URL.createObjectURL(loadedImage))
    };

    function titleHandler(e) {
        setTitle(e.target.value)
        if (e.target.value.length < 2) {
            setTitleError("Заголовок не должен быть меньше 2х символов")
            if (!e.target.value) {
                setTitleError("Строка с заголовком статьи не может быть пустой")
            }
        } else {
            setTitleError("")
        }
    };


    function blurHandler(e) {
        switch (e.target.name) {
            case "title":
                setTitleDirty(true);
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        if (titleError) {
            setFormValid(false)
            setDisable(true)
        } else {
            setFormValid(true)
            setDisable(false)
        }
    }, [titleError]);

    return (
        <div className='createArticle'>
            <div className='createArticle-box'>
                <h2 className='base-title'>Create post</h2>
                <div className='createArticle-box__content'>
                    <div className='createArticle-box__content-info'>
                        <Dropdown type={1} text={"Select tag"} />
                        <img className='img-backgroundNews' src={bacgroundNews} alt="#" />
                        <BaseButton>
                            <FileInput accept="image/*" onChange={handleBacgroundNews}>Edit photo</FileInput>
                        </BaseButton>
                        <div className='info'>
                            <p>Title of article</p>
                            <BaseInput onChange={(e) => titleHandler(e)} onBlur={(e) => blurHandler(e)} value={title} invalid={titleDirty && titleError} name={"title"} type={"text"} placeholder={"Your title"} styles={"postInput"} />
                            <span className={titleError ? "error-span" : ""}>{(titleDirty && titleError) && (titleError)}</span>
                        </div>
                        <div className='info'>
                            <p>Your text</p>
                            <BaseTextarea name={"your-text"} placeholder={"Your text"} />
                        </div>

                        <BaseButton styles={"cancelBtn"} >
                            <Link to={"/profile"}>
                                Cancel
                            </Link>
                        </BaseButton>

                        <BaseButton disabled={!formValid && disable} styles={disable ? "disableForm" : ""}>Create post</BaseButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreateEditePost;