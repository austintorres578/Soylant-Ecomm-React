import {react,useState,useEffect} from 'react'

import '../../../assets/styles/parts/customerReviews.css'

import fullStar from '../../../assets/images/home/home-hero/Full_Star.png';
import halfStar from '../../../assets/images/home/home-hero/Half_Star.png';
import thumbsUp from '../../../assets/images/parts/customerReviews/thumbs-up-solid.svg';
import thumbsDown from '../../../assets/images/parts/customerReviews/thumbs-down-solid.svg';

import blackArrow from '../../../assets/images/global/thin-black-arrow.png';

import shawnProduct from '../../../assets/images/home/home-hero/complete-protein-powder-bundle-chocolate-vanilla_x280.webp';
import grahamProduct from '../../../assets/images/parts/customerReviews/grahamImg.webp';
import monicaProduct from '../../../assets/images/parts/customerReviews/monicaImg.webp';
import kylerProduct from '../../../assets/images/parts/customerReviews/kylerImg.webp';
import gregProduct from '../../../assets/images/parts/customerReviews/gregImg.webp'

function CustomerReviews(){

    const [customerReviewsDirection, setCustomerReviewsDirection] = useState(0);
    const [AllowedClicks, setAllowedClicks] = useState(0);
    const [sliderClicks,setSliderClicks] = useState(0);

    useEffect(() => {
        const updateAllowedClicks = () => {
            const screenWidth = window.innerWidth;
    
            if (screenWidth > 1185) {
                setAllowedClicks(3);
            } else if (screenWidth <= 1185 && screenWidth > 835) {
                setAllowedClicks(4);
            } else if (screenWidth <= 835) {
                setAllowedClicks(5);
            }

        };
    
        updateAllowedClicks(); // Run initially
        
    }, []);

    const moveSlider = (direction) => {
        let customerReviewBlocks = document.querySelector('.customer-review-blocks');
        let newCustomerReviewDirectionValue;
        let slideDistance;

        slideDistance = 364;
        if (direction === 'right') {
            
            newCustomerReviewDirectionValue = customerReviewsDirection - slideDistance;
            setSliderClicks(prev => prev+=1)
            if(sliderClicks>=AllowedClicks){
                setSliderClicks(0);
                newCustomerReviewDirectionValue = 0;
                setCustomerReviewsDirection(newCustomerReviewDirectionValue);
            }else{
                setCustomerReviewsDirection(newCustomerReviewDirectionValue);
            }
        } else if (direction === 'left') {
            newCustomerReviewDirectionValue = customerReviewsDirection + slideDistance;
            setSliderClicks(prev => prev-=1)
            if(sliderClicks<=0){
                setSliderClicks(AllowedClicks);
                newCustomerReviewDirectionValue = -364 * AllowedClicks;
                setCustomerReviewsDirection(newCustomerReviewDirectionValue);
            }else{
                setCustomerReviewsDirection(newCustomerReviewDirectionValue);
            }
            
        }
    };
    

    return(
        <section className="customer-reviews-con">
                <h1>reviews from our customers</h1>
                <div className='customer-review-stars'>
                    <img src={fullStar}></img>
                    <img src={fullStar}></img>
                    <img src={fullStar}></img>
                    <img src={fullStar}></img>
                    <img src={halfStar}></img>
                </div>
                <p>18,719 reviews</p>
                <div className='customer-review-blocks-con'>
                    <div className='customer-review-blocks' style={{left:`${customerReviewsDirection}px`}}>
                    <div className='customer-review-block'>
                        <div className='reviewer-name'>
                            <div>
                                <p>Graham L.</p>
                                <p><strong>Verified Buyer</strong></p>
                            </div>
                            <a href="#"><img src={grahamProduct}></img></a>
                        </div>
                        <div className='customer-reviews-stars'>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                        </div>
                        <div className="customer-review-content">
                            <p><strong>Delicious And Filling</strong></p>
                            <p className='customer-review-text'>I have a super high metabolism so these lil’ soylent “meal in a bottle” have been a great addition to my daily routine to keep me from being hangry! Delicious, filled with additional vitamins and good amount of protein! </p>
                            <a href='#'>Read More</a>
                        </div>
                        <div className="helpfulness-review">
                            <p>Was this helpful?</p>
                            <div>
                                <button><img src={thumbsUp}></img></button>
                                <button><img src={thumbsDown}></img></button>
                            </div>
                        </div>
                    </div>
                    <div className='customer-review-block'>
                        <div className='reviewer-name'>
                            <div>
                                <p>Monica H.</p>
                                <p><strong>Verified Buyer</strong></p>
                            </div>
                            <a href="#"><img src={monicaProduct}></img></a>
                        </div>
                        <div className='customer-reviews-stars'>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                        </div>
                        <div className="customer-review-content">
                            <p><strong>Easy Going</strong></p>
                            <p className='customer-review-text'>I liked that it’s easy, clean, and nutritious. I am looking for protein intake and Soylent is a good source. I don’t drink it every day, I have it during those busy days when I don’t have that much time to cook. </p>
                            <a href='#'>Read More</a>
                        </div>
                        <div className="helpfulness-review">
                            <p>Was this helpful?</p>
                            <div>
                                <button><img src={thumbsUp}></img></button>
                                <button><img src={thumbsDown}></img></button>
                            </div>
                        </div>
                    </div>
                    <div className='customer-review-block'>
                        <div className='reviewer-name'>
                            <div>
                                <p>Shawn B.</p>
                                <p><strong>Verified Buyer</strong></p>
                            </div>
                            <a href="#"><img src={shawnProduct}></img></a>
                        </div>
                        <div className='customer-reviews-stars'>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                        </div>
                        <div className="customer-review-content">
                            <p><strong>My New Go-To</strong></p>
                            <p className='customer-review-text'>I've been using classic Soylent for about 10 years. Because the one I usually order was out of stock I tried the Protein variation. This is my new go-to. The balance of more protein and fewer carbs works much better and I feel it mixes better too (may just be in my head).  </p>
                            <a href='#'>Read More</a>
                        </div>
                        <div className="helpfulness-review">
                            <p>Was this helpful?</p>
                            <div>
                                <button><img src={thumbsUp}></img></button>
                                <button><img src={thumbsDown}></img></button>
                            </div>
                        </div>
                    </div>
                    <div className='customer-review-block'>
                        <div className='reviewer-name'>
                            <div>
                                <p>Kyler H.</p>
                                <p><strong>Verified Buyer</strong></p>
                            </div>
                            <a href="#"><img src={kylerProduct}></img></a>
                        </div>
                        <div className='customer-reviews-stars'>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                        </div>
                        <div className="customer-review-content">
                            <p><strong>Chocolaty Goodness</strong></p>
                            <p className='customer-review-text'>It’s great tasting and smooth.  My only critique is the plastic bottles vs. something more sustainable.</p>
                            <a href='#'>Read More</a>
                        </div>
                        <div className="helpfulness-review">
                            <p>Was this helpful?</p>
                            <div>
                                <button><img src={thumbsUp}></img></button>
                                <button><img src={thumbsDown}></img></button>
                            </div>
                        </div>
                    </div>
                    <div className='customer-review-block'>
                        <div className='reviewer-name'>
                            <div>
                                <p>Greg K.</p>
                                <p><strong>Verified Buyer</strong></p>
                            </div>
                            
                        </div>
                        <div className='customer-reviews-stars'>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                        </div>
                        <div className="customer-review-content">
                            <p><strong>Easy And Forgiving</strong></p>
                            <p className='customer-review-text'>The store is very easy to navigate and I appreciate how easy it is to update your subscription and make changes whether it be delivery dates or product!</p>
                            <a href='#'>Read More</a>
                        </div>
                        <div className="helpfulness-review">
                            <p>Was this helpful?</p>
                            <div>
                                <button><img src={thumbsUp}></img></button>
                                <button><img src={thumbsDown}></img></button>
                            </div>
                        </div>
                    </div>
                    <div className='customer-review-block'>
                        <div className='reviewer-name'>
                            <div>
                                <p>Greg K.</p>
                                <p><strong>Verified Buyer</strong></p>
                            </div>
                            <a href="#"><img src={gregProduct}></img></a>
                        </div>
                        <div className='customer-reviews-stars'>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                             <img src={fullStar}></img>
                        </div>
                        <div className="customer-review-content">
                            <p><strong>Great Taste And Keeps Me Full!</strong></p>
                            <p className='customer-review-text'>I've been drinking soylent for about two or three weeks now and I'm glad I made the change. Personally I never had the greatest diet and consisted of eating out a lot but this year I made the decision to change. Instead of eating over garbage fast food, I replaced 2 out of my 3 meals a day with soylet and it's been phenomenal! I've already lost 5 lbs just from this change and I'm excited to see how much further this takes me.</p>
                            <a href='#'>Read More</a>
                        </div>
                        <div className="helpfulness-review">
                            <p>Was this helpful?</p>
                            <div>
                                <button><img src={thumbsUp}></img></button>
                                <button><img src={thumbsDown}></img></button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button className='left-button' onClick={() => moveSlider('left')}><img src={blackArrow}></img></button>
                <button className='right-button' onClick={() => moveSlider('right')}><img src={blackArrow}></img></button>

                <div className='mobile-review-slider-buttons'>
                    <button onClick={() => moveSlider('left')} className='mobile-left-button'><img src={blackArrow}></img></button>
                    <p className='current-review-slide'>{sliderClicks+1}</p>
                    <p className='total-review-slide'>{AllowedClicks+1}</p>
                    <button onClick={() => moveSlider('right')} className='mobile-right-button'><img src={blackArrow}></img></button>
                </div>
            </section>
    )
}

export default CustomerReviews;