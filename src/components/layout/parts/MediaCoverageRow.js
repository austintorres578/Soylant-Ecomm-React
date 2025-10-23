import {React,useState,useEffect} from "react";

import smartlessLogo from '../../../assets/images/parts/mediaCoverageRow/smartless-logo.webp';
import newYorkTimesLogo from '../../../assets/images/parts/mediaCoverageRow/new-york-times-logo.webp';
import timeLogo from '../../../assets/images/parts/mediaCoverageRow/time-logo.webp';
import forbesLogo from '../../../assets/images/parts/mediaCoverageRow/forbes-logo.webp';
import cnnLogo from '../../../assets/images/parts/mediaCoverageRow/cnn-logo.webp';
import sfgateLogo from '../../../assets/images/parts/mediaCoverageRow/sfgate-logo.webp';
import voxLogo from '../../../assets/images/parts/mediaCoverageRow/vox-logo.avif';
import fastCompanyLogo from '../../../assets/images/parts/mediaCoverageRow/fast-company-logo.avif';
import techCrunchLogo from '../../../assets/images/parts/mediaCoverageRow/techcrunch-logo.webp';

import blackArrow from '../../../assets/images/global/thin-black-arrow.png';


import '../../../assets/styles/parts/mediaCoverageRow.css';

function MediaCoverageRow(){

    const [MediaCoveragePos,SetMediaCoveragePos] = useState(0);
    const [Operand,SetOperand] = useState(272)
    const [AllowedClicks,SetAllowedClicks] = useState(5)
    const [CurrentClick,SetCurrentClick] = useState(0)
    const [MeterPosition,SetMeterPosition] = useState(0)
    const [MeterPositionOperand,SetMeterPositionOperand] = useState(16)

    useEffect(() => {
        if(window.innerWidth<1125&window.innerWidth>875){
            SetAllowedClicks(6)
            SetMeterPositionOperand(13.3)
        }else if(window.innerWidth<875&window.innerWidth>555){
            SetAllowedClicks(7)
            SetMeterPositionOperand(11.42857)
        }
        else if(window.innerWidth<555){
            SetAllowedClicks(8)
            SetMeterPositionOperand(10)
        }
      }, []);

    const moveMediaSlider = (event) => {
        if(event.target.className==="left" && CurrentClick!==0){
            SetMediaCoveragePos((prev) => prev + Operand)
            SetCurrentClick((prev)=>prev - 1)
            SetMeterPosition((prev)=>prev-MeterPositionOperand)
        }else if(event.target.className==="right" && CurrentClick<AllowedClicks){
            SetMediaCoveragePos((prev) => prev - Operand)
            SetCurrentClick((prev)=>prev + 1)
            SetMeterPosition((prev)=>prev+MeterPositionOperand)
        }
        
    }

    return(
        <section className="media-coverage-section">
            <div className="media-coverage-con">
                <div className="media-coverage-flex" style={{left:`${MediaCoveragePos}px`}}>
                    <div>
                        <img src={newYorkTimesLogo}></img>
                    </div>
                    <div>
                        <img src={timeLogo}></img>
                    </div>
                    <div>
                        <img src={forbesLogo}></img>
                    </div>
                    <div>
                        <img src={cnnLogo}></img>
                    </div>
                    <div>
                        <img src={sfgateLogo}></img>
                    </div>
                    <div>
                        <img src={smartlessLogo}></img>
                    </div>
                    <div>
                        <img src={voxLogo}></img>
                    </div>
                    <div>
                        <img src={fastCompanyLogo}></img>
                    </div>
                    <div>
                        <img src={techCrunchLogo}></img>
                    </div>
                </div>
            </div>
            <div className="media-coverage-meter-con">
                <div className="media-coverage-meter">
                    <div className="media-meter-position" style={{left:`${MeterPosition}%`}}>

                    </div>
                </div>
                <div className="media-coverage-buttons-con">
                    <button onClick={(event) => moveMediaSlider(event)} className="left"><img src={blackArrow}></img></button>
                    <button onClick={(event) => moveMediaSlider(event)} className="right"><img src={blackArrow}></img></button>
                </div>
                
            </div>
            <div className='mobile-media-buttons'>
                <button onClick={(event) => moveMediaSlider(event)} className="left"><img src={blackArrow}></img></button>
                <p className="media-count">{CurrentClick+1}</p>
                <p className="media-total">{AllowedClicks+1}</p>
                <button onClick={(event) => moveMediaSlider(event)} className="right"><img src={blackArrow}></img></button>
            </div>
        </section>
    )
}

export default MediaCoverageRow;