import React, { useEffect, useState, useRef } from "react";


import '../../../assets/styles/parts/scienceArticles.css';

import berkeleyLogo from '../../../assets/images/parts/scienceArticles/berkeleyLogo.webp'
import uclaLogo from '../../../assets/images/parts/scienceArticles/ucla.webp'
import torontoLogo from '../../../assets/images/parts/scienceArticles/toronto.webp'
import googleLogo from '../../../assets/images/parts/scienceArticles/google.webp'
import mitLogo from '../../../assets/images/parts/scienceArticles/mit.webp'



import whiteArrow from '../../../assets/images/global/white-arrow.png'

function ScienceArticles(){

    const [ArticlePosition, SetArticlePosition] = useState(0)
    const [SliderOperand,SetSliderOperand] = useState(530)
    const [MaxClicks,SetMaxClicks] = useState(3)
    const [currentClick,SetCurrentClick] = useState(0)

    const [MeterPosition,SetMeterPosition] = useState(0)

    useEffect(() => {
        if(window.innerWidth<1200 && window.innerWidth>855) {
          SetSliderOperand(370)
        }else if(window.innerWidth<855) {
            SetMaxClicks(4)
            SetSliderOperand(370)
          }
      }, []);

    const moveSlider = (event:React.MouseEvent<HTMLElement>) =>{
        const target = event.target as HTMLElement;
        
            if(target.className==='right' && currentClick < MaxClicks){
                SetCurrentClick((prev)=> prev + 1)
                SetArticlePosition((prev) => prev - SliderOperand)
                SetMeterPosition((prev)=> prev+22.2)
            }
            else if(target.className==='left' && currentClick !== 0){
                SetCurrentClick((prev)=> prev - 1)
                SetArticlePosition((prev) => prev + SliderOperand)
                SetMeterPosition((prev)=>prev-22.2)
            }
        
    }


    return(
        <section className='science-articles-con'>
            <h1>Soylent fuels science. because it is science.</h1>
                <div className='science-articles'>
                    <div className='science-wrapper' style={{left:`${ArticlePosition}px`}}>
                        <div className='science-article'>
                            <div className='science-article-logo'>
                                <img src={uclaLogo}></img>
                            </div>
                            <div className='science-article-content'>
                                <h4>Soylent complete meal shakes help cancer patients maintain weight and quality of life</h4>
                                <p>Soylent liquid meal replacement with aggressive dietary moni...</p>
                            </div>
                            <div className='science-article-link'>
                                <a href='#'>Check out their research.</a>
                            </div>
                        </div>
                        <div className='science-article'>
                            <div className='science-article-logo'>
                                <img src={torontoLogo}></img>
                            </div>
                            <div className='science-article-content'>
                                <h4>Soylent is the perfect hack in the cholesterol lowering portfolio diet.</h4>
                                <p>In addition to reducing LDL (or 'bad') cholesterol by about ...</p>
                            </div>
                            <div className='science-article-link'>
                                <a href='#'>Check out their research.</a>
                            </div>
                        </div>
                        <div className='science-article'>
                            <div className='science-article-logo'>
                                <img src={berkeleyLogo}></img>
                            </div>
                            <div className='science-article-content'>
                                <h4>Soylent can improve your gut microbiome.</h4>
                                <p>Among Soylent dieters, we find a significant increase in the...</p>
                            </div>
                            <div className='science-article-link'>
                                <a href='#'>Check out their research.</a>
                            </div>
                        </div>
                        <div className='science-article'>
                            <div className='science-article-logo'>
                                <img src={googleLogo}></img>
                            </div>
                            <div className='science-article-content'>
                                <h4>More than 700 Google staff members regular use Soylent to fuel their innovation.</h4>
                                
                            </div>
                            <div className='science-article-link'>
                                <a href='#'>Check out their research.</a>
                            </div>
                        </div>
                        <div className='science-article'>
                            <div className='science-article-logo'>
                                <img src={mitLogo}></img>
                            </div>
                            <div className='science-article-content'>
                                <h4>400+ MIT students and faculty have used Soylent to nourish their minds and bodies. The future of technology runs on Soylent!</h4>
                               
                            </div>
                            <div className='science-article-link'>
                                <a href='#'>Check out their research.</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='science-articles-meter-con'>
                    <div className='science-articles-meter'>
                        <div style={{left:`${MeterPosition}%`}}>

                        </div>
                    </div>
                    <div className='science-articles-meter-buttons'>
                        <button onClick={(event) => moveSlider(event)} className='left'><img src={whiteArrow}></img></button>
                        <button onClick={(event) => moveSlider(event)} className='right'><img src={whiteArrow}></img></button>
                    </div>
                </div>

                <div className='science-articles-mobile-count'>
                    <button onClick={(event) => moveSlider(event)} className='left'><img src={whiteArrow}></img></button>
                    <div>
                        <p className='current-count'>{currentClick + 1}</p>
                        <p>5</p>
                    </div>
                    <button onClick={(event) => moveSlider(event)} className='right'><img src={whiteArrow}></img></button>
                </div>

        </section>
    )
}

export default ScienceArticles;