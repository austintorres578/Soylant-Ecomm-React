import React from "react";

import AllProductsCategories from "../components/layout/parts/AllProductsCategories";
import AllProductItems from "../components/layout/parts/AllProductItems";
import WeHackedFood from "../components/layout/parts/WeHackedFood";
import Faq from "../components/layout/parts/Faq";

function Products(){
    return(
        <div className="page-con">
            <AllProductsCategories />
            <AllProductItems />
            <WeHackedFood />
            <Faq />
        </div>
        
    )
}

export default Products;