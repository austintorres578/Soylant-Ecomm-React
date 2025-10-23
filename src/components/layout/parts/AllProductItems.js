import {React, use, useEffect, useState } from 'react';

import '../../../assets/styles/parts/allProductItems.css';

import chocolateDrinkImg from '../../../assets/images/products/CreamyChocolate.webp';
import chocolateDrinkAlternate from '../../../assets/images/products/CreamyChocolateAlternate.webp';

import completeDrink from '../../../assets/images/products/completeMeal.webp';
import completeDrinkAlternative from '../../../assets/images/products/completeMealAlt.webp';

import mintDrink from '../../../assets/images/products/mintDrink.webp';
import mintDrinkAlt from '../../../assets/images/products/mintDrinkAlt.webp';

import halfStar from '../../../assets/images/Header/Half_Star.png'
import fullStar from '../../../assets/images/Header/Full_Star.png'

const changePurchaseMethod = (event) => {
    let clickedValue = event.target.value;
    let productItem = event.target.closest('.product-item'); // Restrict to the current product

    let allProductButtons = productItem.querySelectorAll('.product-add-buttons'); // Only within this product
    let allProductRadios = productItem.querySelectorAll('.product-radio'); // Only within this product

    let revealedButtons;

    if (clickedValue === "subscribe") {
        revealedButtons = "subscription-buttons";
    } else if (clickedValue === "one-time") {
        revealedButtons = "one-time-buttons";
    } else if (clickedValue === "prepaid") {
        revealedButtons = "prepaid-buttons";
    }

    // Hide all buttons within this specific product item
    allProductButtons.forEach(button => {
        if (button.classList.contains(revealedButtons)) {
            button.style.display = "grid";
        } else {
            button.style.display = "none";
        }
    });

    // Update radio button styles within this product item
    allProductRadios.forEach(radio => {
        if (radio.value === clickedValue) {
            radio.classList.remove("unchecked");
            radio.classList.add("checked");
        } else {
            radio.classList.remove("checked");
            radio.classList.add("unchecked");
        }
    });
};


const addItemToCart = (event) => {
    let product = event.target.closest('.product-item'); // Ensures we select the correct product
    let productTitle = product.querySelector('.product-title').innerText;
    let productPaymentType = product.querySelector('.checked').value;
    let productImg = product.querySelector('.product-img')

    console.log(productTitle)

    let quantity;
    let productPrice;

    if (productPaymentType === "subscribe") {
        quantity = Number(product.querySelector('.quantity-con').children[1].innerText);
        productPrice = product.querySelector('.subscribe-price').innerText;
    } else if (productPaymentType === "one-time") {
        quantity = Number(product.querySelector('.one-time-quantity').children[1].innerText);
        productPrice = product.querySelector('.one-time-price').innerText;
    } else if (productPaymentType === "prepaid") {
        quantity = Number(product.querySelector('.prepaid-quantity').children[1].innerText);
        productPrice = product.querySelector('.prepaid-price').innerText;
    }

    let cart = JSON.parse(localStorage.getItem('AustinSoylentCart')) || [];
    
    let newItem = { title: productTitle, price: productPrice, purchaseType: productPaymentType, quantity: quantity, image:productImg.src };

    let found = false;

    for (let index = 0; index < cart.length; index++) {
        console.log(index);

        if (cart[index].title === newItem.title && cart[index].purchaseType === newItem.purchaseType) {
            cart[index].quantity += newItem.quantity; // Update quantity
            found = true;
            break; // Exit loop once found to avoid redundant checks
        }
    }

    // Only push if item was NOT found
    if (!found) {
        cart.push(newItem);
    }

    // Update localStorage once
    localStorage.setItem('AustinSoylentCart', JSON.stringify(cart));

    for (let a = 0; a < document.querySelectorAll('.cart-count').length; a++) {
        document.querySelectorAll('.cart-count')[a].innerText=cart.length;
        
    }

};



function AllProductItems() {

    const [subscribeQuantityCount,setSubscribeQuantityCount] = useState(1)
    const [oneTimeQuantityCount,setOneTimeQuantityCount] = useState(1)
    const [prepaidQuantityCount,setPrepaidQuantityCount] = useState(1)
    


    useEffect(() => {
        // Initialize AustinSoylentCart in localStorage if it doesn't exist
        if (!localStorage.getItem('AustinSoylentCart')) {
            localStorage.setItem('AustinSoylentCart', JSON.stringify([]));
        }
    }, []);

    return (
        <section className='all-product-items-con'>
            <div className='all-product-items-wrapper'>
                <div className='all-product-inputs'>
                    <div>
                        <p>Filter By:</p>
                        <select>
                            <option>All</option>
                            <option>Chocolate Flavors</option>
                            <option>Community Picks</option>
                            <option>Energy-Packed</option>
                            <option>Grab-and-go Favorites</option>
                            <option>Staff Picks</option>
                        </select>
                    </div>
                    <div>
                        <p>Sort By:</p>
                        <select>
                            <option>Featured</option>
                            <option>Best Selling</option>
                            <option>Alphabetically, A-Z</option>
                            <option>Alphabetically, Z-A</option>
                            <option>Price, low to high</option>
                            <option>Price, high to low</option>
                            <option>Date, old to new</option>
                            <option>Date, new to old</option>
                        </select>
                    </div>
                </div>
                <div className='product-items'>
                    <div className='product-item'>
                        <div className='product-tag'>
                            <p>BEST SELLER</p>
                        </div>
                        <div className='product-images'>
                            <img className='product-img' src={chocolateDrinkImg} alt="Chocolate Drink" />
                            <img className='alternate-product-img' src={chocolateDrinkAlternate} alt="Chocolate Drink Alternate" />
                        </div>
                        <div className='product-title-con'>
                            <p className='product-title'>Soylent complete meal - creamy chocolate</p>
                            <div>
                                <p>12 bottles</p>
                                <div>
                                    <img src={fullStar}></img>
                                    <img src={fullStar}></img>
                                    <img src={fullStar}></img>
                                    <img src={fullStar}></img>
                                    <img src={halfStar}></img>
                                    <p>9,097 reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className='radio-inputs'>
                            <div>
                                <input type='radio' className="product-radio checked" onClick={(event)=>changePurchaseMethod(event)} name="purchaseOptionChocolate" value="subscribe" defaultChecked/>
                                <p>Subscribe & Save</p>
                                <p className='radio-price subscribe-price'>$42.00 ($3.50/meal)</p>
                            </div>
                            <div>
                                <input type='radio' className="product-radio unchecked" onClick={(event)=>changePurchaseMethod(event)} name="purchaseOptionChocolate" value="one-time"/>
                                <p>One-Time Purchase</p>
                                <p className='radio-price one-time-price'>$48.00 ($4.00/meal)</p>
                            </div>
                            <div>
                                <input type='radio' className="product-radio unchecked" onClick={(event)=>changePurchaseMethod(event)} name="purchaseOptionChocolate" value="prepaid"/>
                                <p>Prepaid Subscription</p>
                                <p className='radio-price prepaid-price'>$224.50 ($3.12/meal)</p>
                            </div>
                        </div>
                        <div className='subscription-buttons product-add-buttons' style={{display:'grid'}}>
                            <select defaultValue={"30 DAYS"}>
                                <option>15 DAYS</option>
                                <option>30 DAYS</option>
                                <option>45 DAYS</option>
                                <option>60 DAYS</option>
                            </select>
                            <div className='quantity subscribe-quantity'>
                                <div className='quantity-con'>
                                    <button onClick={() =>
                                        {
                                            if(subscribeQuantityCount>1){
                                                setSubscribeQuantityCount(subscribeQuantityCount-1)
                                            }
                                        }
                                    }>-</button>
                                    <p>{subscribeQuantityCount}</p>
                                    <button onClick={() =>{setSubscribeQuantityCount(subscribeQuantityCount+1)}}>+</button>
                                </div>
                                <div>
                                    <button className='add-to-cart' onClick={(event)=>addItemToCart(event)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='one-time-buttons product-add-buttons'  style={{display:'none'}}>
                            <div className='one-time-quantity'>
                                <button onClick={() =>
                                        {
                                            if(oneTimeQuantityCount>1){
                                                setOneTimeQuantityCount(oneTimeQuantityCount-1)
                                            }
                                        }
                                    }>-</button>
                                <p>{oneTimeQuantityCount}</p>
                                <button onClick={() =>{setOneTimeQuantityCount(oneTimeQuantityCount+1)}}>+</button>
                            </div>
                            <div className='one-time-add-to-cart'>
                                <button onClick={(event)=>addItemToCart(event)}>Add to Cart</button>                            
                            </div>
                        </div>
                        <div className='prepaid-buttons product-add-buttons'  style={{display:'none'}}>
                            <select defaultValue={"6 MONTH"}>
                                <option>3 MONTH</option>
                                <option>6 MONTH</option>
                            </select>
                            <div className='prepaid-quantity-con'>
                                <div className='prepaid-quantity'>
                                <button onClick={() =>
                                        {
                                            if(prepaidQuantityCount>1){
                                                setPrepaidQuantityCount(prepaidQuantityCount-1)
                                            }
                                        }
                                    }>-</button>
                                <p>{prepaidQuantityCount}</p>
                                <button onClick={() =>{setPrepaidQuantityCount(prepaidQuantityCount+1)}}>+</button>
                                </div>
                                <div className='prepaid-add-to-cart'>
                                    <button onClick={(event)=>addItemToCart(event)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <p>subscribe & save 12.50%</p>
                    </div>
                    <div className='product-item'>
                        <div className='product-tag'>
                            <p>BEST SELLER</p>
                        </div>
                        <div className='product-images'>
                            <img className='product-img' src={completeDrink} alt="Chocolate Drink" />
                            <img className='alternate-product-img' src={completeDrinkAlternative} alt="Chocolate Drink Alternate" />
                        </div>
                        <div className='product-title-con'>
                            <p className='product-title'>Soylent complete meal - original</p>
                            <div>
                                <p>12 bottles</p>
                                <div>
                                    <img src={fullStar}></img>
                                    <img src={fullStar}></img>
                                    <img src={fullStar}></img>
                                    <img src={fullStar}></img>
                                    <img src={halfStar}></img>
                                    <p>9,097 reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className='radio-inputs'>
                            <div>
                                <input type='radio' className="product-radio checked" onClick={(event)=>changePurchaseMethod(event)} name="purchaseOptionOriginal" value="subscribe" defaultChecked/>
                                <p>Subscribe & Save</p>
                                <p className='radio-price subscribe-price'>$42.00 ($3.50/meal)</p>
                            </div>
                            <div>
                                <input type='radio' className="product-radio unchecked" onClick={(event)=>changePurchaseMethod(event)} name="purchaseOptionOriginal" value="one-time"/>
                                <p>One-Time Purchase</p>
                                <p className='radio-price one-time-price'>$48.00 ($4.00/meal)</p>
                            </div>
                            <div>
                                <input type='radio' className="product-radio unchecked" onClick={(event)=>changePurchaseMethod(event)} name="purchaseOptionOriginal" value="prepaid"/>
                                <p>Prepaid Subscription</p>
                                <p className='radio-price prepaid-price'>$224.50 ($3.12/meal)</p>
                            </div>
                        </div>
                        <div className='subscription-buttons product-add-buttons' style={{display:'grid'}}>
                            <select defaultValue={"30 DAYS"}>
                                <option>15 DAYS</option>
                                <option>30 DAYS</option>
                                <option>45 DAYS</option>
                                <option>60 DAYS</option>
                            </select>
                            <div className='quantity subscribe-quantity'>
                                <div className='quantity-con'>
                                    <button onClick={() =>
                                        {
                                            if(subscribeQuantityCount>1){
                                                setSubscribeQuantityCount(subscribeQuantityCount-1)
                                            }
                                        }
                                    }>-</button>
                                    <p>{subscribeQuantityCount}</p>
                                    <button onClick={() =>{setSubscribeQuantityCount(subscribeQuantityCount+1)}}>+</button>
                                </div>
                                <div>
                                    <button className='add-to-cart' onClick={(event)=>addItemToCart(event)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='one-time-buttons product-add-buttons'  style={{display:'none'}}>
                            <div className='one-time-quantity'>
                                <button onClick={() =>
                                        {
                                            if(oneTimeQuantityCount>1){
                                                setOneTimeQuantityCount(oneTimeQuantityCount-1)
                                            }
                                        }
                                    }>-</button>
                                <p>{oneTimeQuantityCount}</p>
                                <button onClick={() =>{setOneTimeQuantityCount(oneTimeQuantityCount+1)}}>+</button>
                            </div>
                            <div className='one-time-add-to-cart'>
                                <button onClick={(event)=>addItemToCart(event)}>Add to Cart</button>                            
                            </div>
                        </div>
                        <div className='prepaid-buttons product-add-buttons'  style={{display:'none'}}>
                            <select defaultValue={"6 MONTH"}>
                                <option>3 MONTH</option>
                                <option>6 MONTH</option>
                            </select>
                            <div className='prepaid-quantity-con'>
                                <div className='prepaid-quantity'>
                                <button onClick={() =>
                                        {
                                            if(prepaidQuantityCount>1){
                                                setPrepaidQuantityCount(prepaidQuantityCount-1)
                                            }
                                        }
                                    }>-</button>
                                <p>{prepaidQuantityCount}</p>
                                <button onClick={() =>{setPrepaidQuantityCount(prepaidQuantityCount+1)}}>+</button>
                                </div>
                                <div className='prepaid-add-to-cart'>
                                    <button onClick={(event)=>addItemToCart(event)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <p>subscribe & save 12.50%</p>
                    </div>
                    <div className='product-item'>
                        {/* <div className='product-tag'>
                            <p>BEST SELLER</p>
                        </div> */}
                        <div className='product-images'>
                            <img className='product-img' src={mintDrink} alt="Chocolate Drink" />
                            <img className='alternate-product-img' src={mintDrinkAlt} alt="Chocolate Drink Alternate" />
                        </div>
                        <div className='product-title-con'>
                            <p className='product-title'>Soylent complete meal - mint chocolate</p>
                            <div>
                                <p>12 bottles</p>
                                <div>
                                    <img src={fullStar}></img>
                                    <img src={fullStar}></img>
                                    <img src={fullStar}></img>
                                    <img src={fullStar}></img>
                                    <img src={halfStar}></img>
                                    <p>9,097 reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className='radio-inputs'>
                            <div>
                                <input type='radio' className="product-radio checked" onClick={(event)=>changePurchaseMethod(event)} name="purchaseOption" value="subscribe" defaultChecked/>
                                <p>Subscribe & Save</p>
                                <p className='radio-price subscribe-price'>$42.00 ($3.50/meal)</p>
                            </div>
                            <div>
                                <input type='radio' className="product-radio unchecked" onClick={(event)=>changePurchaseMethod(event)} name="purchaseOption" value="one-time"/>
                                <p>One-Time Purchase</p>
                                <p className='radio-price one-time-price'>$48.00 ($4.00/meal)</p>
                            </div>
                            <div>
                                <input type='radio' className="product-radio unchecked" onClick={(event)=>changePurchaseMethod(event)} name="purchaseOption" value="prepaid"/>
                                <p>Prepaid Subscription</p>
                                <p className='radio-price prepaid-price'>$224.50 ($3.12/meal)</p>
                            </div>
                        </div>
                        <div className='subscription-buttons product-add-buttons' style={{display:'grid'}}>
                            <select defaultValue={"30 DAYS"}>
                                <option>15 DAYS</option>
                                <option>30 DAYS</option>
                                <option>45 DAYS</option>
                                <option>60 DAYS</option>
                            </select>
                            <div className='quantity subscribe-quantity'>
                                <div className='quantity-con'>
                                    <button onClick={() =>
                                        {
                                            if(subscribeQuantityCount>1){
                                                setSubscribeQuantityCount(subscribeQuantityCount-1)
                                            }
                                        }
                                    }>-</button>
                                    <p>{subscribeQuantityCount}</p>
                                    <button onClick={() =>{setSubscribeQuantityCount(subscribeQuantityCount+1)}}>+</button>
                                </div>
                                <div>
                                    <button className='add-to-cart' onClick={(event)=>addItemToCart(event)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='one-time-buttons product-add-buttons'  style={{display:'none'}}>
                            <div className='one-time-quantity'>
                                <button onClick={() =>
                                        {
                                            if(oneTimeQuantityCount>1){
                                                setOneTimeQuantityCount(oneTimeQuantityCount-1)
                                            }
                                        }
                                    }>-</button>
                                <p>{oneTimeQuantityCount}</p>
                                <button onClick={() =>{setOneTimeQuantityCount(oneTimeQuantityCount+1)}}>+</button>
                            </div>
                            <div className='one-time-add-to-cart'>
                                <button onClick={(event)=>addItemToCart(event)}>Add to Cart</button>                            
                            </div>
                        </div>
                        <div className='prepaid-buttons product-add-buttons'  style={{display:'none'}}>
                            <select defaultValue={"6 MONTH"}>
                                <option>3 MONTH</option>
                                <option>6 MONTH</option>
                            </select>
                            <div className='prepaid-quantity-con'>
                                <div className='prepaid-quantity'>
                                <button onClick={() =>
                                        {
                                            if(prepaidQuantityCount>1){
                                                setPrepaidQuantityCount(prepaidQuantityCount-1)
                                            }
                                        }
                                    }>-</button>
                                <p>{prepaidQuantityCount}</p>
                                <button onClick={() =>{setPrepaidQuantityCount(prepaidQuantityCount+1)}}>+</button>
                                </div>
                                <div className='prepaid-add-to-cart'>
                                    <button onClick={(event)=>addItemToCart(event)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <p>subscribe & save 12.50%</p>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    );
}

export default AllProductItems;
