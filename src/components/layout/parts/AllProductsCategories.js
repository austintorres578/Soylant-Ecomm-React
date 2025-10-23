import React from "react";

import '../../../assets/styles/parts/allProductsCategories.css';
import coffeeCatImg from '../../../assets/images/products/coffeeEnergy.webp';
import mealReplacementCatImg from '../../../assets/images/products/mealReplacement.png';
import highProteinCatImg from'../../../assets/images/products/highProtein.webp';
import snackCatImg from '../../../assets/images/products/snack.webp';

function AllProductsCategories(){
    return(
        <section className="all-products-categories">
            <div className="all-products-categories-wrapper">
                <div className="all-products-categories-header">
                    <h3>All Products</h3>
                    <h1>science-backed nutrition. perfected.</h1>
                </div>
                <div className="all-products-category-links">
                    <a href="#">
                        <img src={mealReplacementCatImg}></img>
                        <p>meal replacements</p>
                    </a>
                    <a href="#">
                        <img src={highProteinCatImg}></img>
                        <p>high protein</p>
                    </a>
                    <a href="#">
                        <img src={coffeeCatImg}></img>
                        <p>coffee + energy</p>
                    </a>
                    <a href="#">
                        <img src={snackCatImg}></img>
                        <p>snacks</p>
                    </a>
                </div>
            </div>
            
        </section>
    )
}

export default AllProductsCategories;