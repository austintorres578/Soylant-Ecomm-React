import { React, useState, useEffect } from "react";
import '../../../assets/styles/parts/cart.css';

import bananaProduct from '../../../assets/images/parts/animatedSetion/Banana.webp';
import strawberryProduct from '../../../assets/images/parts/animatedSetion/Strawberry.webp';
import originalProduct from '../../../assets/images/parts/animatedSetion/Vanilla.webp';
import brownProduct from '../../../assets/images/parts/animatedSetion/Chocolate_1017e0e6-3409-49ef-9eb8-342a34864a92.webp';

const suggestedProducts = [
    { title: "Soylent complete meal - Vanilla", price: "$48.00", image: originalProduct },
    { title: "Soylent complete meal - Banana", price: "$48.00", image: bananaProduct },
    { title: "Soylent complete meal - Strawberry", price: "$48.00", image: strawberryProduct },
];


function extractPrice(priceString:String) {
    if (!priceString) return 0;
    
    const priceMatch = priceString.match(/[\d,.]+/);
    return priceMatch ? parseFloat(priceMatch[0].replace(/,/g, '')) : 0;
}

function Cart() {
    const [CartItems, SetCartItems] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [CheckoutArray, SetCheckoutArray] = useState([]);

    function checkout(event) {
        event.preventDefault();
    
        // Retrieve cart data from localStorage
        const checkoutArray = JSON.parse(localStorage.getItem('AustinSoylentCart')) || [];
    
        // Send cart data to backend
        fetch("https://ecomm-server-dhv0.onrender.com/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart: checkoutArray }), // ✅ Send cart with title & purchaseType
        })
        .then(response => response.json())
        .then(data => {
            if (data.url) {
                console.log("Redirecting to:", data.url);
                window.location.href = data.url; // ✅ Redirect to Stripe checkout
            } else {
                console.error("No checkout URL received.");
            }
        })
        .catch(error => console.error("Error:", error));
    }
    

    // Function to load cart items from localStorage
    const loadCartFromStorage = () => {

        const storedCart = localStorage.getItem('AustinSoylentCart');
        const parsedCart = storedCart ? JSON.parse(storedCart) : [];

        SetCartItems(parsedCart);
        
        // Filter out products that are already in the cart
        const cartItemTitles = new Set(parsedCart.map(item => item.title));
        const newSuggestions = suggestedProducts.filter(product => !cartItemTitles.has(product.title));
        
        setFilteredSuggestions(newSuggestions);
    };

    // Function to remove an item from cart
    const removeItem = (index) => {
        let updatedCart = [...CartItems];
        updatedCart.splice(index, 1);

        localStorage.setItem('AustinSoylentCart', JSON.stringify(updatedCart));
        SetCartItems(updatedCart);
        loadCartFromStorage(); // Refresh suggested products
    };

    // Function to update item quantity
    const updateQuantity = (index, newQuantity) => {
        if (newQuantity < 1) return;

        let updatedCart = [...CartItems];
        updatedCart[index].quantity = newQuantity;

        localStorage.setItem('AustinSoylentCart', JSON.stringify(updatedCart));
        SetCartItems(updatedCart);
    };

    // Function to add suggested product to cart
    const addToCart = (title, price, image) => {
        let updatedCart = [...CartItems];

        let existingItem = updatedCart.find(item => item.title === title);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            updatedCart.push({ title, price, image, quantity: 1, purchaseType: "one-time" });
        }

        localStorage.setItem('AustinSoylentCart', JSON.stringify(updatedCart));
        SetCartItems(updatedCart);
        loadCartFromStorage(); // Refresh suggested products
    };

    useEffect(() => {
        loadCartFromStorage();

        const handleStorageChange = (event) => {
            if (event.key === 'AustinSoylentCart') {
                loadCartFromStorage();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            loadCartFromStorage();
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const closeCart = () => {
        let cartWrapper = document.querySelector('.cart-wrapper');
        let yourCart = document.querySelector('.your-cart');
        let body = document.body;

        if(!cartWrapper || !yourCart || !body === null) return

        cartWrapper.style.opacity = 0;
        cartWrapper.style.pointerEvents = "none";
        yourCart.style.right = "-1000px";

        body.style.overflow = '';
        body.style.touchAction = '';
        body.style.overscrollBehavior = '';
    };


    
    function displayCartItems(CartItems, removeItem, updateQuantity) {
        if (CartItems.length === 0) {
            return (
                <div className="empty-cart-con">
                    <h2>Your cart is empty!</h2>
                    <a href="#">
                        <button onClick={closeCart}>Shop Now</button>
                    </a>
                </div>
            );
        }

        return CartItems.map((item, index) => (
            <div className="cart-item" key={index}>
                <div className="cart-item-image">
                    <a href="#"><img src={item.image || brownProduct} alt="Product"></img></a>
                    <button className="cart-remove" onClick={() => removeItem(index)}>X Remove</button>
                </div>
                <div>
                    <p style={{ marginBottom: "5px" }}>{item.title || "Soylent complete meal - original"}</p>
                    <p style={{ marginTop: "0px" }}><strong>{item.purchaseType || "one-time"}</strong></p>
                    <div className="cart-buttons">
                        <div className="cart-item-quantity">
                            <p className="quantity-operand" onClick={() => updateQuantity(index, item.quantity - 1)}>-</p>
                            <p>{item.quantity || 1}</p>
                            <p className="quantity-operand" onClick={() => updateQuantity(index, item.quantity + 1)}>+</p>
                        </div>
                        <h3>{item.price || "$99.99"}</h3>
                    </div>
                </div>
            </div>
        ));
    }

    const totalPrice = CartItems.reduce((total, item) => {
        return total + extractPrice(item.price) * (item.quantity || 1);
    }, 0).toFixed(2);

    const cartFreeShipping = () => {

        if(totalPrice>50){
            return <p>Congrats! You've unlocked <strong>FREE SHIPPING!</strong></p>
        }
        else if(totalPrice<50){
            return <p>You are ${50 - totalPrice}.00 away from <strong>FREE SHIPPING</strong></p>
        }
    }

    return (
        <div className="cart-wrapper">
            <div className='your-cart'>
                <div>
                    <div className="cart-header">
                        <h1>Your Cart</h1>
                        <button onClick={closeCart}>X</button>
                    </div>
                    <div className="cart-shipping-meter-con">
                        <div style={{ width: `${totalPrice * 2}%` }}></div>
                    </div>
                    {cartFreeShipping()}

                    {/* Cart Items */}
                    <div className="cart-items-con">
                        {displayCartItems(CartItems, removeItem, updateQuantity)}
                    </div>

                    {/* Suggested Products */}
                    {filteredSuggestions.length > 0 && (
                        <div className="cart-suggestions">
                            <p className="cart-suggestion-title">You May Also Like</p>
                            {filteredSuggestions.slice(0, 3).map((product, i) => (
                                <a href="#" className="suggested-product" key={i}>
                                    <div>
                                        <img src={product.image} alt="Product"></img>
                                    </div>
                                    <div>
                                        <p>{product.title}</p>
                                        <p>{product.price}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => addToCart(product.title, product.price, product.image)}>Add To Cart</button>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Show Subtotal only if the cart is not empty */}
                    {CartItems.length > 0 && (
                        <div className="cart-checkout">
                            <div className="cart-checkout-total">
                                <p>Subtotal ({CartItems.length} items)</p>
                                <p className="total">${totalPrice}</p>
                            </div>
                            <form onSubmit={checkout}>
                                <button type="submit">Checkout</button>
                            </form>
                            <button onClick={closeCart}>Continue Shopping</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
