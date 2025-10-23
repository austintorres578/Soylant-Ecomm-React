import React from "react";
import '../../../assets/styles/header/HamMenu.css';

import blueBlock from '../../../assets/images/Header/blue-shop-img.png';
import yellowBlock from '../../../assets/images/Header/yellow-shop-img.png';
import orangeBlock from '../../../assets/images/Header/orange-shop-img.png';
import brownBlock from '../../../assets/images/Header/brown-shop-img.png';
import greenBlock from '../../../assets/images/Header/green-shop-img.png';

import labDrop from '../../../assets/images/Header/lab-about.webp'
import hackedDrop from '../../../assets/images/Header/hacked-about.webp';
import giveDrop from '../../../assets/images/Header/give-about.png';

function HamMenu(){


    const toggleHam = (event) =>{

        let clickedHam = event.target;

        if(clickedHam.style.height==="78.5px"){
            clickedHam.style.height="100%"
            clickedHam.querySelector('.ham-drop-title').children[1].innerText='-'
        }
        else if(clickedHam.style.height==="100%"){
            clickedHam.style.height="78.5px"
            clickedHam.querySelector('.ham-drop-title').children[1].innerText='+'
        }
    
    }

    return(
        <div className="ham-menu" style={{ display: "none" }}>
            <div className="ham-drop" style={{height:"78.5px"}} onClick={(event) => toggleHam(event)}>
                <div className="ham-drop-title">
                    <h3>Shop</h3>
                    <p>+</p>
                </div>
                <div className="ham-drop-content shop-ham-drop">
                    <div className="shop-ham-flex">
                        <a href="#" className="shop-ham-block">
                            <div className="shop-ham-product blue">
                                <img src={blueBlock}></img>
                            </div>
                            <div className="shop-ham-block-text">
                                <p className="shop-ham-block-title">complete meal</p>
                                <p className="shop-ham-block-text-gray">real science. real nutrition. real food.</p>
                                <p className="shop-ham-block-green">Shop Now</p>
                            </div>
                        </a>
                        <a href="#" className="shop-ham-block">
                            <div className="shop-ham-product green">
                                <img src={greenBlock}></img>
                            </div>
                            <div className="shop-ham-block-text">
                                <p className="shop-ham-block-title">complete protein</p>
                                <p className="shop-ham-block-text-gray">protein. rooted in science. taste perfected</p>
                                <p className="shop-ham-block-green">Shop Now</p>
                            </div>
                        </a>
                    </div>
                    <div className="shop-ham-flex">
                        <a href="#" className="shop-ham-block">
                            <div className="shop-ham-product yellow">
                                <img src={yellowBlock}></img>
                            </div>
                            <div className="shop-ham-block-text">
                                <p className="shop-ham-block-title">complete coffee</p>
                                <p className="shop-ham-block-text-gray">coffee that acts like a healthy breakfast.</p>
                                <p className="shop-ham-block-green">Shop Now</p>
                            </div>
                        </a>
                        <a href="#" className="shop-ham-block">
                            <div className="shop-ham-product brown">
                                <img src={brownBlock}></img>
                            </div>
                            <div className="shop-ham-block-text">
                                <p className="shop-ham-block-title">complete snack</p>
                                <p className="shop-ham-block-text-gray">science-backed snacking.</p>
                                <p className="shop-ham-block-green">Shop Now</p>
                            </div>
                        </a>
                    </div>
                    <a href="#" className="shop-ham-block">
                        <div className="shop-ham-product orange">
                            <img src={orangeBlock}></img>
                        </div>
                        <div className="shop-ham-block-text">
                            <p className="shop-ham-block-title">complete energy</p>
                            <p className="shop-ham-block-text-gray">smart energy. fuel for the brain and the body.</p>
                            <p className="shop-ham-block-green">Shop Now</p>
                        </div>
                    </a>
                    <div className="shop-ham-product-links">
                        <a href="#">shop all</a>
                        <a href="#">variety packs</a>
                        <a href="#">gift cards</a>
                        <a href="#">merch</a>
                    </div>
                </div>
            </div>
            <div className="ham-drop" style={{height:"78.5px"}} onClick={(event) => toggleHam(event)}>
                <div className="ham-drop-title">
                    <h3>Health Benefits</h3>
                    <p>+</p>
                </div>
                <div className="ham-drop-content">
                    <div className="ham-health-block">
                        <div className="health-ham-title green-title">
                            <p className="health-title">weight management</p>
                            <p className="health-text">make weight management easy.</p>
                        </div>
                        <div className="health-button-col">
                            <a href="#"><button>weight loss</button></a>
                            <a href="#"><button>weight gain</button></a>
                            <a href="#"><button>appetite suppression</button></a>
                            <a href="#"><button>weight management</button></a>
                        </div>
                    </div>
                    <div className="ham-health-block">
                        <div className="health-ham-title blue-title">
                            <p className="health-title">fitness</p>
                            <p className="health-text">reach your fitness goals.</p>
                        </div>
                        <div className="health-button-col">
                            <a href="#"><button>fitness</button></a>
                            <a href="#"><button>workout recovery</button></a>
                            <a href="#"><button>muscle recovery</button></a>
                        </div>
                    </div>
                    <div className="ham-health-block">
                        <div className="health-ham-title red-title">
                            <p className="health-title">health</p>
                            <p className="health-text">manage your health, the smart way.</p>
                        </div>
                        <div className="health-button-col">
                            <a href="#"><button>diabetes & blood sugar management</button></a>
                            <a href="#"><button>surgery & liquid diets</button></a>
                        </div>
                    </div>
                    <div className="ham-health-block">
                        <div className="health-ham-title yellow-title">
                            <p className="health-title">nutrition</p>
                            <p className="health-text">science-backed nutrition, perfected</p>
                        </div>
                        <div className="health-button-col">
                            <a href="#"><button>plant-based diets</button></a>
                            <a href="#"><button>daily vitamins & minerals</button></a>
                            <a href="#"><button>athlete & sports nutrition</button></a>
                            <a href="#"><button>gluten free diets</button></a>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className="ham-drop" style={{height:"78.5px"}} onClick={(event) => toggleHam(event)}>
                <div className="ham-drop-title">
                    <h3>About</h3>
                    <p>+</p>
                </div>
                <div className="ham-drop-content">
                    <div className="ham-about-content">
                        <div className="ham-about-grid">
                            <a href="#">
                                <img src={labDrop}></img>
                                <div>
                                    <p><strong>from lab to living room.</strong></p>
                                    <p className="ham-about-text">10 years of perfect food.</p>
                                    <p className="green-text">Learn More</p>
                                </div>
                            </a>
                            <a href="#">
                                <img src={hackedDrop}></img>
                                <div>
                                    <p><strong>we hacked food.</strong></p>
                                    <p className="ham-about-text">nutrition nerd approved.</p>
                                    <p className="green-text">Learn More</p>
                                </div>
                            </a>
                        </div>
                        <div id="ham-about-flex">
                            <a href="#">
                                <img src={giveDrop}></img>
                                <div>
                                    <p><strong>we give back.</strong></p>
                                    <p className="ham-about-text">food is a right. not a luxury.</p>
                                    <p className="green-text">Learn More</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="ham-link">
                <div className="ham-link-title">
                    <h3>Why Soy?</h3>
                    <p>→</p>
                </div>
            </a>
            <a href="#" className="ham-link">
                <div className="ham-link-title">
                    <h3>Clinical Trials</h3>
                    <p>→</p>
                </div>
            </a>
            <a href="#" className="ham-link">
                <div className="ham-link-title">
                    <h3>Reviews</h3>
                    <p>→</p>
                </div>
            </a>
            <a href="#" className="ham-link">
                <div className="ham-link-title">
                    <h3>Product Quiz</h3>
                    <p>→</p>
                </div>
            </a>
        </div>
    )
}

export default HamMenu;