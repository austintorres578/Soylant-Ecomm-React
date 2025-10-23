import { React, useState, useEffect } from "react";
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
    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('AustinSoylentCart')) || [];
        setMobileCartCountText(cart.length);
    };

    useEffect(() => {
        updateCartCount(); // Initial load

        // Listen for localStorage changes (from other tabs)
        const handleStorageChange = (event) => {
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
        let cartWrapper = document.querySelector('.cart-wrapper');
        let yourCart = document.querySelector('.your-cart');
        let body = document.querySelector('body');

        cartWrapper.style.opacity = 1;
        cartWrapper.style.pointerEvents = "all";
        yourCart.style.right = "0px";

        body.style.overflow = 'hidden'; // Disables scrolling
        body.style.touchAction = 'none'; // Prevents touch gestures from triggering scroll
        body.style.overscrollBehavior = 'none'; // Stops scroll chaining
    };

    const toggleHamMenu = () => {
        let hamMenu = document.querySelector('.ham-menu');
        let hamIconVar;

        if (hamMenu.style.display === "none") {
            hamMenu.style.display = "block";
            hamIconVar = xIcon;
            SetHamIconImg(hamIconVar);
            document.querySelector('.page-con').style.display = 'none';
            document.querySelector('footer').style.display = 'none';
            document.querySelector('header').style.position = "relative";
        } else if (hamMenu.style.display === "block") {
            hamMenu.style.display = "none";
            hamIconVar = mobileHamIcon;
            SetHamIconImg(hamIconVar);
            document.querySelector('.page-con').style.display = 'block';
            document.querySelector('footer').style.display = 'block';
            document.querySelector('header').style.position = "fixed";
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

