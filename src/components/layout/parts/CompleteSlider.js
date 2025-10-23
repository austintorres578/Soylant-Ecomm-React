import {React,useState,useEffect} from "react";

import '../../../assets/styles/parts/completeSlider.css'

import fullStar from '../../../assets/images/home/home-hero/Full_Star.png';
import halfStar from '../../../assets/images/home/home-hero/Half_Star.png';

import completeMealImg from '../../../assets/images/home/home-hero/complete-meal-product-line-b.webp';
import completeProtein from '../../../assets/images/home/home-hero/complete-protein-product-line-b.webp';
import completeCoffee from '../../../assets/images/home/home-hero/complete-coffee-product-line-b.webp';
import completeEnergy from '../../../assets/images/home/home-hero/complete-energy-product-line-b.webp';
import completeSnack from '../../../assets/images/home/home-hero/complete-snack-product-line-b.webp';

import arrowIcon from '../../../assets/images/global/thin-black-arrow.png'

function CompleteSlider(){

    const [navLineWidth, setNavLineWidth] = useState(25);
    const [CompleteSliderRight , SetCompleteSliderRight] = useState(0)
    const [ScreenWidth,setScreenWidth] = useState(window.innerWidth)

    const [MaximumMeterAmount, SetMaximumMeterAmount] = useState();
    const [MinimumMeterAmount, SetMinimumMeterAmount] = useState();
    const [Operand,SetOperand] = useState();
    
    const [CompleteLeftArrowColor, SetCompleteLeftArrowColor] = useState('#afafaf');
    const [CompleteRightArrowColor, SetCompleteRightArrowColor] = useState('#221f20');

    const [SliderClicks,SetSliderClicks] = useState(1);


    useEffect(() => {

        if(ScreenWidth>1285){
            SetMinimumMeterAmount(25);
            SetMaximumMeterAmount(100);
            SetOperand(385);
            setNavLineWidth(25)
        }

        else if(ScreenWidth<700){
            SetCompleteSliderRight(0)
            SetMinimumMeterAmount(16.666);
            SetMaximumMeterAmount(99.996);
            SetOperand(326.5);
            setNavLineWidth(16.666)
        }

        else if(ScreenWidth<765){
            SetCompleteSliderRight(0)
            SetMinimumMeterAmount(20);
            SetMaximumMeterAmount(100);
            SetOperand(325.5);
            setNavLineWidth(20)
        }

        else if(ScreenWidth<900){
            SetCompleteSliderRight(0)
            SetMinimumMeterAmount(20);
            SetMaximumMeterAmount(100);
            SetOperand(385);
            setNavLineWidth(20)
        }
        else if(ScreenWidth<1160){
            SetMinimumMeterAmount(20);
            SetMaximumMeterAmount(100);
            SetOperand(385);
            setNavLineWidth(20)
        }
        else if(ScreenWidth<1285){
            SetCompleteSliderRight(0)
            SetMinimumMeterAmount(25);
            SetMaximumMeterAmount(100);
            SetOperand(385);
            setNavLineWidth(25)
        }
        
            
        // console.log(MaximumMeterAmount);
        // console.log(MinimumMeterAmount);

      }, []);
    
    function moveSlideByPress(event){

        const pressedButtonClass = event.target.className;  

        console.log(document.querySelector('.complete-slider-block').style.width)

            if (pressedButtonClass === "slide-left" && navLineWidth > MinimumMeterAmount) {
                setNavLineWidth(navLineWidth - MinimumMeterAmount);
                SetCompleteSliderRight(CompleteSliderRight - Operand);
                SetSliderClicks((prev)=> prev-1)
            } else if (pressedButtonClass === "slide-right" && navLineWidth < MaximumMeterAmount) {
                setNavLineWidth((prev) => prev + MinimumMeterAmount); 
                SetCompleteSliderRight((prev) => prev + Operand);
                SetSliderClicks((prev)=> prev+1)
            }  
            
        }

        return(
        <section className="complete-slider-con">
                <div className="complete-sliders">
                    <div className="complete-slider-wrapper" style={{right:`${CompleteSliderRight}px`}}>
                        <a href="#" className="complete-slider-block">
                            <img src={completeMealImg}></img>
                            <div className="complete-slider-content">
                                <div>
                                    <p className="complete-slider-desc">the world's most perfect food. science-backed nutrition.</p>
                                </div>
                                <div className="reviews-con">
                                    <div className="review-stars">
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={halfStar}></img>
                                    </div>
                                    <p className="review-count">10,000 reviews</p>
                                </div>
                                <button>Shop Complete Meal</button>
                            </div>
                        </a>
                        <a href="#" className="complete-slider-block">
                            <img src={completeProtein}></img>
                            <div className="complete-slider-content">
                                <div>
                                    <p className="complete-slider-desc">protein. rooted in science. taste perfected</p>
                                </div>
                                <div className="reviews-con">
                                    <div className="review-stars">
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={halfStar}></img>
                                    </div>
                                    <p className="review-count">10,000 reviews</p>
                                </div>
                                <button>Shop Complete Protein</button>
                            </div>
                        </a>
                        <a href="#" className="complete-slider-block">
                            <img src={completeCoffee}></img>
                            <div className="complete-slider-content">
                                <div>
                                    <p className="complete-slider-desc">functional coffee. caffeine for the boost. I-theanine for the balance. coffee perfected</p>
                                </div>
                                <div className="reviews-con">
                                    <div className="review-stars">
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={halfStar}></img>
                                    </div>
                                    <p className="review-count">10,000 reviews</p>
                                </div>
                                <button>Shop Complete Coffee</button>
                            </div>
                        </a>
                        <a href="#" className="complete-slider-block">
                            <img src={completeEnergy}></img>
                            <div className="complete-slider-content">
                                <div>
                                    <p className="complete-slider-desc">smart energy. fuel for the brain and the body. energy perfected.</p>
                                </div>
                                <div className="reviews-con">
                                    <div className="review-stars">
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={halfStar}></img>
                                    </div>
                                    <p className="review-count">10,000 reviews</p>
                                </div>
                                <button>Shop Complete Energy</button>
                            </div>
                        </a>

                        <a href="#" className="complete-slider-block">
                            <img src={completeSnack}></img>
                            <div className="complete-slider-content">
                                <div>
                                    <p className="complete-slider-desc">no mess. no melting. just delicious. snacking perfected.</p>
                                </div>
                                <div className="reviews-con">
                                    <div className="review-stars">
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={fullStar}></img>
                                        <img src={halfStar}></img>
                                    </div>
                                    <p className="review-count">10,000 reviews</p>
                                </div>
                                <button>Shop Complete Snack</button>
                            </div>
                        </a>

                        <a href="#" className="complete-slider-block-quiz">
                            <div className="complete-slider-quiz-content">
                                <div>
                                    <p className="complete-slider-desc">Which Soylent is right for you?</p>
                                </div>
                                <button>Take The Quiz</button>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="complete-slider-nav">
                    <div className="complete-slider-line-con">
                        <div style={{ width: `${navLineWidth}%`}}>

                        </div>
                    </div>
                    <div className="complete-slider-buttons">
                        <button className="slide-left" onClick={(event) => moveSlideByPress(event)} style={{color:`${CompleteLeftArrowColor}`}}><img src={arrowIcon}></img></button>
                        <button className="slide-right" onClick={(event)=>moveSlideByPress(event)} style={{color:`${CompleteRightArrowColor}`}}><img src={arrowIcon}></img></button>
                    </div>
                </div>
                <div className="complete-slider-mobile-buttons">
                        <button className="slide-left" onClick={(event) => moveSlideByPress(event)} style={{color:`${CompleteLeftArrowColor}`}}><img src={arrowIcon}></img></button>
                        <div>
                            <p className="current-amount">{SliderClicks}</p>
                            <p className="total-amount">6</p>
                        </div>
                        <button className="slide-right" onClick={(event)=>moveSlideByPress(event)} style={{color:`${CompleteRightArrowColor}`}}><img src={arrowIcon}></img></button>
                    </div>
            </section>
    )
}

export default CompleteSlider;