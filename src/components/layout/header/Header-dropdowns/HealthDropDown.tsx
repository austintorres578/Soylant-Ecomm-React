import React from "react";
import '../../../../assets/styles/header/Header-dropdowns/HealthDropDown.css';

function HealthDropDown(){
    return(
        <div className="health-dropdown">
            <div className="health-dropdown-wrapper">
                <div>
                    <div className="health-title-green health-title">
                        <h3>weight management</h3>
                        <p>make weight management easy.</p>
                    </div>
                    <div>
                        <a href="#">weight loss</a>
                        <a href="#">weight gain</a>
                        <a href="#">appetite suppression</a>
                        <a href="#">weight suppression</a>
                    </div>
                </div>
                <div>
                    <div className="health-title-blue health-title">
                        <h3>fitness</h3>
                        <p>make weight management easy.</p>
                    </div>
                    <div>
                        <a href="#">fitness</a>
                        <a href="#">workout recovery</a>
                        <a href="#">muscle recovery</a>
                    </div>
                </div>
                <div>
                    <div className="health-title-red health-title">
                        <h3>health</h3>
                        <p>manage your health, the smart way.</p>
                    </div>
                    <div>
                        <a href="#">diabetes & blood sugar management</a>
                        <a href="#">surgury & liquid diets</a>
                    </div>
                </div>
                <div>
                    <div className="health-title-yellow health-title">
                        <h3>nutrition</h3>
                        <p>science-backed nutrition, perfected.</p>
                    </div>
                    <div>
                        <a href="#">plant-based diets</a>
                        <a href="#">daily vitamins & minerals</a>
                        <a href="#">athletes & sport nutrition</a>
                        <a href="#">gluten-free diets</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthDropDown;