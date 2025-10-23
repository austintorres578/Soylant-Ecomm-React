import React from "react";

import '../../../assets/styles/parts/ingredientsChart.css';

import soyImage from '../../../assets/images/home/home-hero/Soy_Image.webp';
import alluoseImage from '../../../assets/images/home/home-hero/Allulose_Image.webp';
import canolaImage from '../../../assets/images/home/home-hero/Canola_Oil_Image.webp';
import mineralImage from '../../../assets/images/home/home-hero/minerals.webp';
import sucraloseImage from '../../../assets/images/home/home-hero/sucralose_image.webp';
import ingredientCircles from '../../../assets/images/home/home-hero/ingredient-circles.jpeg';

function IngredientsChart(){
    return(
        <section className='ingredents-chart-con'>
                <h1>the science behind Soylent’s ingredients</h1>
                <p className="mobile-swipe-text">swipe to view</p>
                <div className="mobile-view-meter">

                </div>
                <div className='ingredient-scroll'>
                    <div className='ingredient-circles-con'>
                            <img className='ingredient-circles' src={ingredientCircles}></img>
                        <div className='soy-block ingredient-block'>
                            <p>all the amino acids you need, easy on digestion, and boasts a variety of awesome health benefits.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className='alluce-block ingredient-block'>
                            <p>a sugar substitute with a fraction of the calories.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className='canola-block ingredient-block'>
                            <p>packed with good fats that are awesome for your heart and can help lower cholesterol.</p>
                            <a href="#">Learn More</a>
                        </div>

                        <div className="sucralose-block ingredient-block">
                            <p>a popular sugar substitute, where the science says it won’t mess with your blood sugar or give you any weird side effects.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className='minerals-block ingredient-block'>
                            <p>all Soylent contains 28 vitamins & minerals you need daily for maximum health.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className='soy-image ingredient-img-block'>
                            <h3>soy protein</h3>
                            <img src={soyImage}></img>
                        </div>
                        <div className='alluose-image ingredient-img-block'>
                            <h3>alluose</h3>
                            <img src={alluoseImage}></img>
                        </div>
                        <div className='canola-image ingredient-img-block'>
                            <h3>canola oil</h3>
                            <img src={canolaImage}></img>
                        </div>
                        <div className='sucralose-image ingredient-img-block'>
                            <h3>suralose</h3>
                            <img src={sucraloseImage}></img>
                        </div>
                        <div className='minerals-image ingredient-img-block'>
                            <h3>vitamins + minerals</h3>
                            <img src={mineralImage}></img>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default IngredientsChart;