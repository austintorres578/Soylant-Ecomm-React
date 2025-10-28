import React, {useEffect, useState } from 'react';

import '../../../assets/styles/parts/allProductItems.css';

import chocolateDrinkImg from '../../../assets/images/products/CreamyChocolate.webp';
import chocolateDrinkAlternate from '../../../assets/images/products/CreamyChocolateAlternate.webp';

import completeDrink from '../../../assets/images/products/completeMeal.webp';
import completeDrinkAlternative from '../../../assets/images/products/completeMealAlt.webp';

import mintDrink from '../../../assets/images/products/mintDrink.webp';
import mintDrinkAlt from '../../../assets/images/products/mintDrinkAlt.webp';

import halfStar from '../../../assets/images/Header/Half_Star.png'
import fullStar from '../../../assets/images/Header/Full_Star.png'

// If these are real <input type="radio"> elements:
const changePurchaseMethod = (event: React.MouseEvent<HTMLInputElement>) => {
  const target = event.currentTarget; // safe, never null in React
  const clickedValue = target.value as 'subscribe' | 'one-time' | 'prepaid';

  const productItem = target.closest<HTMLElement>('.product-item');
  if (!productItem) return;

  const revealedButtonsMap: Record<typeof clickedValue, string> = {
    subscribe: 'subscription-buttons',
    'one-time': 'one-time-buttons',
    prepaid: 'prepaid-buttons',
  };
  const revealedButtons = revealedButtonsMap[clickedValue];

  // Only search inside this product
  const allProductButtons = productItem.querySelectorAll<HTMLElement>('.product-add-buttons');
  allProductButtons.forEach((button) => {
    button.style.display = button.classList.contains(revealedButtons) ? 'grid' : 'none';
  });

  const allProductRadios = productItem.querySelectorAll<HTMLInputElement>('.product-radio');
  allProductRadios.forEach((radio) => {
    const isMatch = radio.value === clickedValue;
    radio.classList.toggle('checked', isMatch);
    radio.classList.toggle('unchecked', !isMatch);
  });
};


type PurchaseType = 'subscribe' | 'one-time' | 'prepaid';

type CartItem = {
  title: string;
  price: string;
  purchaseType: PurchaseType;
  quantity: number;
  image: string;
};

export const addItemToCart: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  const btn = event.currentTarget; // safer than event.target
  const product = btn.closest<HTMLElement>('.product-item');
  if (!product) return;

  const titleEl = product.querySelector<HTMLElement>('.product-title');
  const productTitle = titleEl?.innerText.trim() ?? '';

  // assuming `.checked` is a radio/input that holds the selected purchase type
  const checkedInput = product.querySelector<HTMLInputElement>('.checked');
  const productPaymentType = (checkedInput?.value ?? '') as PurchaseType;

  const imgEl = product.querySelector<HTMLImageElement>('.product-img');
  const productImgSrc = imgEl?.src ?? '';

  let quantity = 0;
  let productPrice = '';

  switch (productPaymentType) {
    case 'subscribe': {
      const qtyEl = product.querySelector<HTMLElement>('.quantity-con')?.children[1] as HTMLElement | undefined;
      quantity = qtyEl ? Number(qtyEl.innerText) || 0 : 0;
      productPrice = product.querySelector<HTMLElement>('.subscribe-price')?.innerText ?? '';
      break;
    }
    case 'one-time': {
      const qtyEl = product.querySelector<HTMLElement>('.one-time-quantity')?.children[1] as HTMLElement | undefined;
      quantity = qtyEl ? Number(qtyEl.innerText) || 0 : 0;
      productPrice = product.querySelector<HTMLElement>('.one-time-price')?.innerText ?? '';
      break;
    }
    case 'prepaid': {
      const qtyEl = product.querySelector<HTMLElement>('.prepaid-quantity')?.children[1] as HTMLElement | undefined;
      quantity = qtyEl ? Number(qtyEl.innerText) || 0 : 0;
      productPrice = product.querySelector<HTMLElement>('.prepaid-price')?.innerText ?? '';
      break;
    }
    default:
      // unknown payment type; bail safely
      return;
  }

  const raw = localStorage.getItem('AustinSoylentCart');
  const cart: CartItem[] = raw ? JSON.parse(raw) : [];

  const existing = cart.find(
    (i) => i.title === productTitle && i.purchaseType === productPaymentType
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      title: productTitle,
      price: productPrice,
      purchaseType: productPaymentType,
      quantity,
      image: productImgSrc,
    });
  }

  localStorage.setItem('AustinSoylentCart', JSON.stringify(cart));

  // Update all cart counters
  document.querySelectorAll<HTMLElement>('.cart-count').forEach((el) => {
    el.innerText = String(cart.length);
  });
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
                                    <button className='add-to-cart' onClick={(event:React.MouseEvent<HTMLButtonElement>)=>addItemToCart(event)}>Add to Cart</button>
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
