import React from "react";
import '../../../../assets/styles/header/Header-dropdowns/ShopDropDown.css';

import BlueShopImg from '../../../../assets/images/Header/blue-shop-img.png';
import YellowShopImg from '../../../../assets/images/Header/yellow-shop-img.png';
import OrangeShopImg from '../../../../assets/images/Header/orange-shop-img.png';
import GreenShopImg from '../../../../assets/images/Header/green-shop-img.png';
import BrownShopImg from '../../../../assets/images/Header/brown-shop-img.png';

function ShopDropDown(){
    return(
        <div className='nav-dropdown shop-drop'>
                <div className="shop-drop-wrapper">
                    <div>
                        <a href='#' className='shop-row'>
                            <div className='image-slider blue-slider'>
                                <img src={BlueShopImg}></img>
                            </div>
                            <div className='shop-row-text-con'>
                                <p className='shop-row-title'>complete meal</p>
                                <p className='shop-row-text'>real science. real nutrition. real food.</p>
                                <p className='shop-row-green'>Shop Now</p>
                            </div>
                        </a>
                        <a href='#' className='shop-row'>
                            <div className='image-slider yellow-slider'>
                                <img src={YellowShopImg}></img>
                            </div>
                            <div className='shop-row-text-con'>
                                <p className='shop-row-title'>complete coffee</p>
                                <p className='shop-row-text'>coffee that acts like a healthy breakfast</p>
                                <p className='shop-row-green'>Shop Now</p>
                            </div>
                        </a>
                        <a href='#' className='shop-row'>
                            <div className='image-slider orange-slider'>
                                <img src={OrangeShopImg}></img>
                            </div>
                            <div className='shop-row-text-con'>
                                <p className='shop-row-title'>complete energy</p>
                                <p className='shop-row-text'>Smart Energy. fuel for the brain and the body</p>
                                <p className='shop-row-green'>Shop Now</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href='#' className='shop-row'>
                            <div className='image-slider green-slider'>
                                <img src={GreenShopImg}></img>
                            </div>
                            <div className='shop-row-text-con'>
                                <p className='shop-row-title'>complete protein</p>
                                <p className='shop-row-text'>protein. rooted in science. taste perfected.</p>
                                <p className='shop-row-green'>Shop Now</p>
                            </div>
                        </a>
                        <a href='#' className='shop-row'>
                            <div className='image-slider brown-slider'>
                                <img src={BrownShopImg}></img>
                            </div>
                            <div className='shop-row-text-con'>
                                <p className='shop-row-title'>complete snack</p>
                                <p className='shop-row-text'>science-backed snacking</p>
                                <p className='shop-row-green'>Shop Now</p>
                            </div>
                        </a>
                        <div className='shop-now-links-con'>
                            <div className='shop-now-links'>
                                <a href='#'>Shop All</a>
                                <a href='#'>Variety Packs</a>
                                <a href='#'>Gift Cards</a>
                                <a href='#'>Merch</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ShopDropDown;