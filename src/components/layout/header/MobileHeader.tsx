import React, {useState, useEffect } from "react";
import '../../../assets/styles/header/MobileHeader.css';

import mobileHeaderLogo from '../../../assets/images/Header/soylent logo.jpeg';
import mobileHamIcon from '../../../assets/images/Header/ham-button.png';
import mobileAccount from '../../../assets/images/Header/account-icon.jpeg';
import mobileCart from '../../../assets/images/Header/cart-logo.jpeg';
import xIcon from '../../../assets/images/Header/x-icon.jpg';

function MobileHeader() {
    const [HamIconImg, SetHamIconImg] = useState(mobileHamIcon);
    const [mobileCartCountText, setMobileCartCountText] = useState(0);

    // Function to update the cart count
    type CartItem = {
    title: string;
    price: string;
    purchaseType: string;
    quantity: number;
    image: string;
    };

const updateCartCount = () => {
  const storedCart = localStorage.getItem('AustinSoylentCart');
  const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];
  setMobileCartCountText(cart.length);
};


    useEffect(() => {
        updateCartCount(); // Initial load

        // Listen for localStorage changes (from other tabs)
        const handleStorageChange = (event:StorageEvent) => {
            if (event.key === 'AustinSoylentCart') {
                updateCartCount();
            }
        };
        window.addEventListener('storage', handleStorageChange);

        // Poll every 500ms to detect localStorage changes in the same tab
        const interval = setInterval(updateCartCount, 500);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval); // Cleanup interval on unmount
        };
    }, []);

    const revealCart = () => {
        let cartWrapper = document.querySelector('.cart-wrapper') as HTMLElement | null;
        let yourCart = document.querySelector('.your-cart') as HTMLElement | null;
        let body = document.querySelector('body');

        if(cartWrapper){
            cartWrapper.style.opacity = '1';
            cartWrapper.style.pointerEvents = "all";
        }

        if(yourCart){
            yourCart.style.right = "0px";
        }

        if(body){
            body.style.overflow = 'hidden'; // Disables scrolling
            body.style.touchAction = 'none'; // Prevents touch gestures from triggering scroll
            body.style.overscrollBehavior = 'none'; // Stops scroll chaining
        }
    };

    const toggleHamMenu = () => {
        let hamMenu = document.querySelector('.ham-menu') as HTMLDivElement;
        let hamIconVar;
        let page = document.querySelector('.page-con') as HTMLDivElement;
        let footer = document.querySelector('footer') as HTMLElement;
        let header = document.querySelector('header') as HTMLElement;


        if (hamMenu.style.display === "none") {
            hamMenu.style.display = "block";
            hamIconVar = xIcon;
            SetHamIconImg(hamIconVar);
            page.style.display = 'none';
            footer.style.display = 'none';
            header.style.position = "relative";
        } else if (hamMenu.style.display === "block") {
            hamMenu.style.display = "none";
            hamIconVar = mobileHamIcon;
            SetHamIconImg(hamIconVar);
            page.style.display = 'block';
            footer.style.display = 'block';
            header.style.position = "fixed";
        }
    };

    return (
        <div className="mobile-header">
            <div className='mobile-header-button-con'>
                <button className="ham-button" onClick={toggleHamMenu}>
                    <img src={HamIconImg} alt="Menu Icon" />
                </button>
            </div>
            <div className='mobile-header-logo-con'>
                <a href="#"><img src={mobileHeaderLogo} alt="Logo" /></a>
            </div>
            <div className="mobile-account">
                <a href="#"><img src={mobileAccount} alt="Account" /></a>
                <button className="cart-button" onClick={revealCart}>
                    <img src={mobileCart} alt="Cart" />
                    {mobileCartCountText > 0 && (
                        <p className="cart-count">{mobileCartCountText}</p>
                    )}
                </button>
            </div>
        </div>
    );
};

export default MobileHeader;

