import React from "react";

import '../../../assets/styles/parts/instagramGrid.css'

import instagramLogo from '../../../assets/images/home/home-hero/instagram-logo.png';
import secondImage from '../../../assets/images/parts/instagramGrid/secondImage.jpg';
import thirdImage from '../../../assets/images/parts/instagramGrid/thirdImage.jpg';
import fourthImage from '../../../assets/images/parts/instagramGrid/fourthImage.jpg';
import fifthImage from '../../../assets/images/parts/instagramGrid/fifthImage.jpg';
import sixthImage from '../../../assets/images/parts/instagramGrid/sixthImage.jpg';
import seventhImage from '../../../assets/images/parts/instagramGrid/seventhImage.jpg';
import eigthImage from '../../../assets/images/parts/instagramGrid/eigthImage.jpg';
import ninthImage from '../../../assets/images/parts/instagramGrid/ninthImage.jpg';
import tenthImage from '../../../assets/images/parts/instagramGrid/tenthImage.jpeg';
import eleventhImage from '../../../assets/images/parts/instagramGrid/eleventhImage.jpg';
import twelfthImage from '../../../assets/images/parts/instagramGrid/twelfthImage.jpg';

function InstagramGrid(){
    return(
        <section className="instagram-grid-con">
            <div className="instagram-grid-wrapper">
                <h2>follow us @ Soylent</h2>
                <p>follow us @ Soylent</p>
                <div className="instagram-grid">
                    <div className='instagram-grid-block'>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${secondImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${thirdImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${fourthImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${fifthImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${sixthImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${seventhImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${eigthImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${ninthImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${tenthImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${eleventhImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                    <div className='instagram-grid-block' style={{ backgroundImage: `url(${twelfthImage})` }}>
                        <img src={instagramLogo}></img>
                        <button>Shop Now</button>
                    </div>
                </div>
                <button>Load More</button>`
            </div>
        </section>
    )
}

export default InstagramGrid;