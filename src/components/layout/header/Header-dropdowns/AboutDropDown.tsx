import React from "react";
import '../../../../assets/styles/header/Header-dropdowns/AboutDropDown.css';

import LabDrop from '../../../../assets/images/Header/lab-about.webp';
import HackedDrop from '../../../../assets/images/Header/hacked-about.webp';
import GiveDrop from '../../../../assets/images/Header/give-about.png';

function AboutDropDown(){
    return(
        <div className="about-dropdown">
            <div className="about-dropdown-wrapper">
                <a href="#" className="about-drop-card">
                    <img src={LabDrop}></img>
                    <div>
                        <h3>from lab to living room.</h3>
                        <p className="about-drop-text">10 years of perfect food</p>
                        <p className="green-text">LEARN MORE</p>
                    </div>
                </a>
                <a href="#" className="about-drop-card">
                    <img src={HackedDrop}></img>
                    <div>
                        <h3>we hacked food.</h3>
                        <p className="about-drop-text">nutrition nerd approved.</p>
                        <p className="green-text">LEARN MORE</p>
                    </div>
                </a>
                <a href="#" className="about-drop-card">
                    <img src={GiveDrop}></img>
                    <div>
                        <h3>we give food.</h3>
                        <p className="about-drop-text">food is a right. not a luxury.</p>
                        <p className="green-text">LEARN MORE</p>
                    </div>
                </a>
                <div className="about-drop-links">
                    <a href="#">blog</a>
                    <a href="#">press</a>
                    <a href="#">recipes</a>
                    <a href="#">reviews</a>
                    <a href="#">discount programs</a>
                    <a href="#">ambassador program</a>
                </div>
            </div>
        </div>
    )
}

export default AboutDropDown