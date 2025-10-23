import React from "react";

import '../../../assets/styles/parts/ingredientsBlocks.css'

function ingredientsBlocks(){
    return(
        <section className='ingredients-con'>
                <h2>technically, delicious.</h2>
                <div>
                    <div>
                        <h1>28</h1>
                        <p>vitamins & minerals</p>
                    </div>
                    <div>
                        <h1>12</h1>
                        <p>brain boosters</p>
                    </div>
                    <div>
                        <h1>9</h1>
                        <p>essential amino acids</p>
                    </div>
                    <div>
                        <h1>0</h1>
                        <p>gluten, dairy, eggs</p>
                    </div>
                </div>
        </section>
    )
}

export default ingredientsBlocks;