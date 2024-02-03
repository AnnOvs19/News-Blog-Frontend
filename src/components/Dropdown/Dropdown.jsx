import React, { useState } from 'react';
import dropdownArrow from "../../assets/icons/dropdownArrow.svg"
import "./dropdown.scss"

const Dropdown = ({ type, categories, text }) => {
    const [selected, setSelected] = useState(text);
    const [open, setOpen] = useState(false);

    function toggle() {
        if (open == true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className='dropdown' onClick={() => { toggle() }}>
            <div className='dropdown-head' >
                <h4 className='head-text'>{selected}</h4>
                <img className={open ? "activeArrow" : ""} src={dropdownArrow} alt="#" />
            </div>

            <div className={open ? 'dropdown-content activeDd' : "dropdown-content"}>
                {type == 0 ? (
                    <div className='dropdown-content__categories'>
                        <div className='categories-item' onClick={() => { setSelected("Show new posts") }}>Show new posts</div>
                        <div className='categories-item' onClick={() => { setSelected("Show old posts") }}>Show old posts</div>
                        <div className='categories-item' onClick={() => { setSelected("Popular posts") }}>Popular posts</div>
                    </div>
                ) : (
                    <div className='dropdown-content__tags'>
                        <div className='tags-item' onClick={() => { setSelected("#Mock11111111") }}>#Mock11111111</div>
                        <div className='tags-item' onClick={() => { setSelected("#Mock22") }}>#Mock22</div>
                        <div className='tags-item' onClick={() => { setSelected("#Mock3") }}>#Mock3</div>
                        <div className='tags-item' onClick={() => { setSelected("#Mock444") }}>#Mock444</div>
                        <div className='tags-item' onClick={() => { setSelected("#Mock55") }}>#Mock55</div>
                        <div className='tags-item' onClick={() => { setSelected("#Mock6") }}>#Mock6</div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Dropdown;