import react from 'react';

import '../../../assets/styles/parts/weHackedFood.css';

import redCircle from '../../../assets/images/parts/hackedFood/redHacked.webp';
import yellowCircle from '../../../assets/images/parts/hackedFood/yellowCircle.webp';
import brownCircle from '../../../assets/images/parts/hackedFood/brownCircle.webp';
import mintCirlce from '../../../assets/images/parts/hackedFood/mintCircle.webp';
import blueCircle from '../../../assets/images/parts/hackedFood/blueCircle.webp';
import whiteCircle from '../../../assets/images/parts/hackedFood/whiteCircle.webp';

function WeHackedFood(){
    return(
        <section className='hacked-food-con'>
             <h1>we hacked food.</h1>
            <div className='hacked-food-wrapper'>
                <div className='hacked-food-grid'>
                    <div className='hacked-food-block'>
                        <img src={redCircle}></img>
                        <div>
                            <p className='hacked-title'><strong>science-backed nutrition</strong></p>
                            <p className='hacked-title-sub'>we did our homework, so you don’t have to.</p>
                            <p>the perfect synergy of macro and micro nutrients, backed by science. every ingredient in our formula has been validated through clinical research to work in synergy with each other and for your health.</p>
                        </div>
                    </div>
                    <div className='hacked-food-block'>
                        <img src={yellowCircle}></img>
                        <div>
                            <p className='hacked-title'><strong>science-backed nutrition</strong></p>
                            <p className='hacked-title-sub'>we did our homework, so you don’t have to.</p>
                            <p>the perfect synergy of macro and micro nutrients, backed by science. every ingredient in our formula has been validated through clinical research to work in synergy with each other and for your health.</p>
                        </div>
                    </div>
                    <div className='hacked-food-block'>
                        <img src={brownCircle}></img>
                        <div>
                            <p className='hacked-title'><strong>science-backed nutrition</strong></p>
                            <p className='hacked-title-sub'>we did our homework, so you don’t have to.</p>
                            <p>the perfect synergy of macro and micro nutrients, backed by science. every ingredient in our formula has been validated through clinical research to work in synergy with each other and for your health.</p>
                        </div>
                    </div>
                    <div className='hacked-food-block'>
                        <img src={mintCirlce}></img>
                        <div>
                            <p className='hacked-title'><strong>science-backed nutrition</strong></p>
                            <p className='hacked-title-sub'>we did our homework, so you don’t have to.</p>
                            <p>the perfect synergy of macro and micro nutrients, backed by science. every ingredient in our formula has been validated through clinical research to work in synergy with each other and for your health.</p>
                        </div>
                    </div>
                    <div className='hacked-food-block'>
                        <img src={blueCircle}></img>
                        <div>
                            <p className='hacked-title'><strong>science-backed nutrition</strong></p>
                            <p className='hacked-title-sub'>we did our homework, so you don’t have to.</p>
                            <p>the perfect synergy of macro and micro nutrients, backed by science. every ingredient in our formula has been validated through clinical research to work in synergy with each other and for your health.</p>
                        </div>
                    </div>
                    <div className='hacked-food-block'>
                        <img src={whiteCircle}></img>
                        <div>
                            <p className='hacked-title'><strong>science-backed nutrition</strong></p>
                            <p className='hacked-title-sub'>we did our homework, so you don’t have to.</p>
                            <p>the perfect synergy of macro and micro nutrients, backed by science. every ingredient in our formula has been validated through clinical research to work in synergy with each other and for your health.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeHackedFood;