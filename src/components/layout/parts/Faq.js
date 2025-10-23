import react from 'react'

import '../../../assets/styles/parts/faq.css'

import rightChevron from '../../../assets/images/parts/faq/rightChevron.png';

function Faq(){

    function revealAccordian(event){

        console.log(event.target)

        let questionCon = event.target;

        if(questionCon.querySelector('.faq-answer').children[0].style.lineHeight==="0%"){
            questionCon.querySelector('.faq-answer').children[0].style.lineHeight="145%";
            questionCon.querySelector('.faq-answer').children[0].style.opacity=1;
            questionCon.querySelector('button').style.transform="rotate(270deg)"
        }else if(questionCon.querySelector('.faq-answer').children[0].style.lineHeight="145%"){
            questionCon.querySelector('.faq-answer').children[0].style.lineHeight="0%";
            questionCon.querySelector('.faq-answer').children[0].style.opacity=0;
            questionCon.querySelector('button').style.transform="rotate(90deg)";

        }
        

        
    }


    return(
        <section className='faq-con'>
            <div className='faq-wrapper'>
                <h1>frequently asked questions about Soylent</h1>
                <div className='faq-question-con'>
                    <div onClick={(event)=>revealAccordian(event)} className='faq-question' >
                        <div className='faq-question-text'>
                            <p>does Soylent contain any artificial flavors or sweeteners?</p>
                            <button><img src={rightChevron}></img></button>
                        </div>
                        <div className='faq-answer'>
                            <p style={{lineHeight:"0%"}}>our complete meal shakes have no artificial flavors. we use a carbohydrate blend which includes allulose. allulose is a naturally occurring low-calorie carbohydrate that offers the taste and mouthfeel of sugar with 1/10th the calories and no added sugar. it does not raise blood glucose or insulin levels and actually moderates our insulin response to other carbs. Allulose is not a sugar alcohol and can naturally be found in figs, raisins, molasses and maple syrup and it can also be made through fermentation of several sources of carbohydrates. in addition, our shakes also contain sucralose which improves the taste of our products, without adding additional calories.</p> 
                        </div>
                    </div>
                    <div onClick={(event)=>revealAccordian(event)} className='faq-question' >
                        <div className='faq-question-text'>
                            <p>Why Soy?</p>
                            <button><img src={rightChevron}></img></button>
                        </div>
                        <div className='faq-answer'>
                            <p style={{lineHeight:"0%"}}>we use soy protein isolate in our formulas because it’s an excellent source of high-quality, plant-based protein! soy is also a complete source of protein, which means it contains all the essential amino acids needed for healthy, functioning bodies. soy has many health benefits including helping to lower the glycemic index of our product, higher digestibility, not to mention it provides a smoother texture when consumed and is more sustainable for the environment. You can read more about why we use soy protein by visiting our blog!</p> 
                        </div>
                    </div>
                    <div onClick={(event)=>revealAccordian(event)} className='faq-question' >
                        <div className='faq-question-text'>
                            <p>how long will my Soylent last?</p>
                            <button><img src={rightChevron}></img></button>
                        </div>
                        <div className='faq-answer'>
                            <p style={{lineHeight:"0%"}}>Soylent that is unopened can be stored at room temperature with a shelf-life of up to one year. while most users choose to refrigerate their Soylent before enjoying it, it isn’t required. heat should not cause Soylent to spoil, however, if temperatures go above 110 degrees the vitamins & nutrients may begin to break down over time. the "best by" date listed on your Soylent is not an expiration date but rather the date where we have data for best taste and texture quality. consuming our product after the “best by” date should not pose a food safety concern.</p> 
                        </div>
                    </div>
                    <div onClick={(event)=>revealAccordian(event)} className='faq-question' >
                        <div className='faq-question-text'>
                            <p>how much Soylent should I drink? can I replace every meal?</p>
                            <button><img src={rightChevron}></img></button>
                        </div>
                        <div className='faq-answer'>
                            <p style={{lineHeight:"0%"}}>while Soylent can replace any meal, it is not intended to replace every meal. If you are just getting started, try incorporating Soylent gradually into a balanced diet. as with any change in diet or health, we recommend talking to your health care provider or nutritionist to determine if Soylent is a good fit for your needs. Soylent can help you reach your nutrition goals over the course of a day or week. consider adding Soylent to your diet to ensure you are getting the nutrition you need to be healthy.</p> 
                        </div>
                    </div>
                    <div onClick={(event)=>revealAccordian(event)} className='faq-question' >
                        <div className='faq-question-text'>
                            <p>why do you use GMOs?</p>
                            <button><img src={rightChevron}></img></button>
                        </div>
                        <div className='faq-answer'>
                            <p style={{lineHeight:"0%"}}>we believe modern food processing can be a safe and economic option for food production when complete nutrition is at the forefront. we use scientific methods in food design and production to fill in the gaps in your day -- and your diet. GMO crops can provide nutritious, sustainable, and efficient yields that will help in maximizing the land in which they are grown. GMOs also cut down on food waste as well as the time and resources spent to grow food. this means GMO crops are more sustainable and reliable than those that are organically grown. many of the misconceptions and myths around GMOs stem from a lack of awareness around current science and our food system. read more about Soylent’s approach to modern food processing by visiting <a href='#'>our blog.</a></p> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;