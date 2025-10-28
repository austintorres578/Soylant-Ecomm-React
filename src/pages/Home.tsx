import React, { useState } from "react";

import '../assets/styles/pages/home.css';

import fullStar from '../assets/images/home/home-hero/Full_Star.png';

import retailImage from '../assets/images/home/home-hero/retail-img.webp';

import amazonImg from '../assets/images/home/home-hero/amazon_150x.webp';
import walmartImg from '../assets/images/home/home-hero/walmart_150x.webp';
import krogerImg from '../assets/images/home/home-hero/FreshCart_Kroger_Lockup_-768x286_150x.webp';
import meijerImg from '../assets/images/home/home-hero/Meijer_logo_svg_150x.webp';
import publixImg from '../assets/images/home/home-hero/Publix_Logo_2.8.22_150x.webp';
import hebImg from '../assets/images/home/home-hero/H-E-B_logo_svg_150x.webp';

import completeNutritionImg from '../assets/images/home/home-hero/complete-nutrition.svg';
import sustainabilityImg from '../assets/images/home/home-hero/sustainability.svg';
import scienceBasedImg from '../assets/images/home/home-hero/science-based.svg';
import affordabilityImg from '../assets/images/home/home-hero/affordability.svg';

import ColorColumn from '../components/layout/parts/ColorColumn';
import CustomerReviews from "../components/layout/parts/CustomerReviews";
import IngredientsChart from "../components/layout/parts/IngredientsChart";
import MediaCoverageRow from "../components/layout/parts/MediaCoverageRow";
import ScienceArticles from "../components/layout/parts/ScienceArticles";
import InstagramGrid from "../components/layout/parts/InstagramGrid";
import IngredientsBlocks from '../components/layout/parts/IngredientsBlocks'
import CompleteSlider from "../components/layout/parts/CompleteSlider";
import InfiniteScroller from "../components/layout/parts/InfiniteScroller";
import AnimatedInfo from "../components/layout/parts/AnimatedInfo";


function Home(){

    return(
        <div className="page-con">
            <section className="home-hero">
                <div className="home-hero-content-wrapper">
                    <div className="home-hero-content">
                        <div>
                            <img src={fullStar}></img>
                            <img src={fullStar}></img>
                            <img src={fullStar}></img>
                            <img src={fullStar}></img>
                            <img src={fullStar}></img>
                            <p>over 14,000 five star reviews!</p>
                        </div>
                        <h1>start the year with science-backed nutrition.</h1>
                        <h3>from complete meals to essential nutrients, Soylent fuels your journey to a healthier you.</h3>
                        <a href="#" className="black-button-con" >
                            <button className="black-button">Shop All</button>
                        </a>
                    </div>
                </div>
            </section>
            <InfiniteScroller />
            <CompleteSlider />
            <AnimatedInfo />
            <IngredientsBlocks />
            <IngredientsChart />
            <ScienceArticles />
            <ColorColumn />
            <MediaCoverageRow />
            <CustomerReviews />
            <section className='product-handlers'>
                <div className="product-handlers-wrapper">
                    <div className='product-handlers-content'>
                        <h2>want a Soylent today?</h2>
                        <p>whether you’d like to try a single bottle, our 11oz size or get your Soylent today – we’re waiting just around the corner for you.</p>
                        <div className="product-handlers-imgs">
                            <img src={amazonImg}></img>
                            <img src={walmartImg}></img>
                            <img src={krogerImg}></img>
                            <img src={meijerImg}></img>
                            <img src={publixImg}></img>
                            <img src={hebImg}></img>
                        </div>
                        <a href="#">Find Soylent Near You</a>
                    </div>
                    <div className='retail-img-con'>
                        <img src={retailImage}></img>
                    </div>
                </div>
            </section>
            <section className="product-details-con">
                <div className="product-details-wrapper">
                    <div className='product-details-content'>
                        <h2>good for you, good for the planet.</h2>
                        <div className='product-detail-grid'>
                            <div className='complete-nutrition'>
                                <img src={completeNutritionImg}></img>
                                <div>
                                    <p className="title">complete nutrition</p>
                                    <p>Soylent products help you meet your daily and weekly nutritional goals. Our products can both stand in for complete meals as well as fill your nutrition gaps as snacks, supplements, and beyond!</p>
                                </div>
                            </div>
                            <div className='sustainability'>
                                <img src={sustainabilityImg}></img>
                                <div>
                                    <p className="title">sustainability</p>
                                    <p>Soylent supports sustainable agriculture and employs best practices to reduce our carbon footprint across our entire supply chain.</p>
                                </div>
                            </div>
                            <div className='science-based'>
                                <img src={scienceBasedImg}></img>
                                <div>
                                    <p className="title">science-based</p>
                                    <p>every ingredient in our products is backed by science and carefully selected for specific and synergistic functional benefits.</p>
                                </div>
                            </div>
                            <div className='affordability'>
                                <img src={affordabilityImg}></img>
                                <div>
                                    <p className="title">affordability</p>
                                    <p>we believe that everyone has the right to nutritious meals and are committed to having products that are affordable and accessible to all.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="donation-details">
                        <p>over 6 million meals donated through #SoylentForGood!</p>
                        <h1>6,179,898</h1>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </section>
            <InstagramGrid />
        </div>
    )
}

export default Home;