import React,{useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import '../../../assets/styles/parts/cart.css';

import bananaProduct from '../../../assets/images/parts/animatedSetion/Banana.webp';
import strawberryProduct from '../../../assets/images/parts/animatedSetion/Strawberry.webp';
import originalProduct from '../../../assets/images/parts/animatedSetion/Vanilla.webp';
import brownProduct from '../../../assets/images/parts/animatedSetion/Chocolate_1017e0e6-3409-49ef-9eb8-342a34864a92.webp';

import { CartItem, SuggestedProduct } from "@/types/customTypes";

const suggestedProducts = [
    { title: "Soylent complete meal - Vanilla", price: "$48.00", image: originalProduct },
    { title: "Soylent complete meal - Banana", price: "$48.00", image: bananaProduct },
    { title: "Soylent complete meal - Strawberry", price: "$48.00", image: strawberryProduct },
];


function extractPrice(price: string | number): number {
  if (typeof price === "number") return price;

  // If it's nullish or empty
  if (!price) return 0;

  // At this point TypeScript knows price is a string
  const priceMatch = price.match(/[\d,.]+/);
  return priceMatch ? parseFloat(priceMatch[0].replace(/,/g, "")) : 0;
}


function Cart() {
    const [CartItems, SetCartItems] = useState<CartItem[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SuggestedProduct[]>([]);

  function checkout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Retrieve cart data from localStorage (same as original JS)
    const checkoutArray = JSON.parse(
      localStorage.getItem('AustinSoylentCart') || '[]'
    ) as CartItem[];

    console.log('Sending cart to backend:', checkoutArray);

    fetch("https://ecomm-server-dhv0.onrender.com/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: checkoutArray }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          console.log("Redirecting to:", data.url);
          window.location.href = data.url;
        } else {
          console.error("No checkout URL received.", data);
        }
      })
      .catch((error) => console.error("Error:", error));
  }
    

    // Function to load cart items from localStorage
  const loadCartFromStorage = (): void => {
    const storedCart = localStorage.getItem('AustinSoylentCart');

    // Explicitly tell TS what type we're expecting
    const parsedCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

    SetCartItems(parsedCart);

    // Filter out products that are already in the cart
    const cartItemTitles = new Set(parsedCart.map((item) => item.title));

    const newSuggestions = suggestedProducts.filter(
        (product) => !cartItemTitles.has(product.title)
    );

    setFilteredSuggestions(newSuggestions);
   };

    // Function to remove an item from cart
    const removeItem = (index:number) => {
        let updatedCart = [...CartItems];
        updatedCart.splice(index, 1);

        localStorage.setItem('AustinSoylentCart', JSON.stringify(updatedCart));
        SetCartItems(updatedCart);
        loadCartFromStorage(); // Refresh suggested products
    };

    // Function to update item quantity
    const updateQuantity = (index:number, newQuantity:number) => {
        if (newQuantity < 1) return;

        let updatedCart:CartItem[] = [...CartItems];
        updatedCart[index].quantity = newQuantity;

        localStorage.setItem('AustinSoylentCart', JSON.stringify(updatedCart));
        SetCartItems(updatedCart);
    };

    // Function to add suggested product to cart
    const addToCart = (title: string, price: string | number, image: string): void => {
  // clone current cart
    const updatedCart: CartItem[] = [...CartItems];

    // check for existing item
    const existingItem = updatedCart.find(item => item.title === title);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            updatedCart.push({
            title,
            price,
            image,
            quantity: 1,
            purchaseType: "one-time",
            });
        }

        // persist and refresh state
        localStorage.setItem('AustinSoylentCart', JSON.stringify(updatedCart));
        SetCartItems(updatedCart);
        loadCartFromStorage(); // refresh suggested products
    };

    useEffect(() => {
        loadCartFromStorage();

        const handleStorageChange = (event:StorageEvent) => {
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
        // Narrow the types to HTMLElement
        const cartWrapper = document.querySelector<HTMLElement>('.cart-wrapper');
        const yourCart = document.querySelector<HTMLElement>('.your-cart');
        const body = document.body;

        // Fix logic: your previous `!body === null` was incorrect
        if (!cartWrapper || !yourCart || !body) return;

        // Safe to use .style now
        cartWrapper.style.opacity = '0';
        cartWrapper.style.pointerEvents = 'none';
        yourCart.style.right = '-1000px';

        body.style.overflow = '';
        body.style.touchAction = '';
        body.style.overscrollBehavior = '';
    };



    
    type RemoveItemFn = (index: number) => void;
    type UpdateQuantityFn = (index: number, nextQty: number) => void;

    function displayCartItems(
    cartItems: CartItem[],
    removeItem: RemoveItemFn,
    updateQuantity: UpdateQuantityFn
    ): React.ReactNode {
    if (cartItems.length === 0) {
        return (
        <div className="empty-cart-con">
            <h2>Your cart is empty!</h2>
            <a href="#">
            <Link to="/products"><button onClick={closeCart}>Shop Now</button></Link>
            </a>
        </div>
        );
    }

    return cartItems.map((item, index) => {
        const qty = Math.max(1, item.quantity ?? 1);
        return (
        <div className="cart-item" key={index}>
            <div className="cart-item-image">
            <a href="#"><img src={item.image || brownProduct} alt="Product" /></a>
            <button className="cart-remove" onClick={() => removeItem(index)}>X Remove</button>
            </div>

            <div>
            <p style={{ marginBottom: "5px" }}>
                {item.title || "Soylent complete meal - original"}
            </p>
            <p style={{ marginTop: "0px" }}>
                <strong>{item.purchaseType || "one-time"}</strong>
            </p>

            <div className="cart-buttons">
                <div className="cart-item-quantity">
                <p className="quantity-operand" onClick={() => updateQuantity(index, Math.max(1, qty - 1))}>-</p>
                <p>{qty}</p>
                <p className="quantity-operand" onClick={() => updateQuantity(index, qty + 1)}>+</p>
                </div>
                <h3>
                {typeof item.price === "number" ? `$${item.price.toFixed(2)}` : (item.price || "$99.99")}
                </h3>
            </div>
            </div>
        </div>
        );
    });
    }

    const totalPrice = Number(
    CartItems.reduce((total: number, item:CartItem) => {
        return total + extractPrice(item.price) * (item.quantity || 1);
    }, 0).toFixed(2)
    );


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
                            {filteredSuggestions.slice(0, 3).map((product:SuggestedProduct, i) => (
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
