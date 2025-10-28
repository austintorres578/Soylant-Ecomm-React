import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/styles/header/Header.css';

import ShopDropDown from './Header-dropdowns/ShopDropDown';
import HealthDropDown from './Header-dropdowns/HealthDropDown';
import AboutDropDown from './Header-dropdowns/AboutDropDown';
import MobileHeader from './MobileHeader';
import HamMenu from './HamMenu';

import HeaderLogo from '../../../assets/images/Header/soylent logo.jpeg';
import AccountLogo from '../../../assets/images/Header/account-icon.jpeg';
import CartLogo from '../../../assets/images/Header/cart-logo.jpeg';

import InstagramLogo from '../../../assets/images/Header/instagram-logo.jpeg';
import TiktokLogo from '../../../assets/images/Header/tiktok-logo.jpeg';
import RedditLogo from '../../../assets/images/Header/reddit-logo.jpeg';
import AmericanFlag from '../../../assets/images/Header/american-flag.jpeg';

import HalfStar from '../../../assets/images/Header/Half_Star.png';
import FullStar from '../../../assets/images/Header/Full_Star.png';

import { CartItem } from '@/types/customTypes';

function Header() {
    const [CurrentDropDown, SetCurrentDropdown] = React.useState<React.ReactNode>(null);
    const [cartCount, setCartCount] = useState(0);

    const [ButtonSliderText, SetButtonSliderText] = useState(
        <p className="shipping-orders">Get free shipping on orders over $50!</p>
    );

    // Function to update cart count
    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('AustinSoylentCart') || '[]') as CartItem[];
    setCartCount(cart.length);
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
        let cartWrapper = document.querySelector('.cart-wrapper') as HTMLDivElement;
        let yourCart = document.querySelector('.your-cart') as HTMLDivElement;
        let body = document.querySelector('body') as HTMLBodyElement;

        cartWrapper.style.opacity = '1';
        cartWrapper.style.pointerEvents = "all";
        yourCart.style.right = "0px";

        body.style.overflow = 'hidden'; // Disables scrolling
        body.style.touchAction = 'none'; // Prevents touch gestures from triggering scroll
        body.style.overscrollBehavior = 'none'; // Stops scroll chaining
    };

    const moveNavDropdown = ( event: React.PointerEvent<HTMLElement>,direction: string) => {
        let navDrop = document.querySelector('.nav-dropdown-con') as HTMLDivElement;
        let navLinkText: string | undefined;

        if (direction === 'up' && navDrop) {
            navDrop.style.top = "-500%";
        } else if (direction === 'down' && navDrop) {
            navDrop.style.top = "100%";
            const target = event.target as HTMLElement; // 👈 cast target
            navLinkText = target.innerText;             // ✅ works now
        }

        if (navLinkText === "SHOP") {
            SetCurrentDropdown(<ShopDropDown />);
        } else if (navLinkText === "HEALTH BENEFITS") {
            SetCurrentDropdown(<HealthDropDown />);
        } else if (navLinkText === "ABOUT") {
            SetCurrentDropdown(<AboutDropDown />);
        }
    };

    const changeButtonSliderText = () => {
        let currentText = ButtonSliderText.props.className;
        let newSliderText;

        if (currentText === 'shipping-orders') {
            newSliderText = (
                <div className="star-flex">
                    <p>Over 18,000</p>
                    <div>
                        <img src={FullStar} alt="Full Star" />
                        <img src={FullStar} alt="Full Star" />
                        <img src={FullStar} alt="Full Star" />
                        <img src={FullStar} alt="Full Star" />
                        <img src={HalfStar} alt="Half Star" />
                    </div>
                    <p>Reviews!</p>
                    <a href="#">See reviews</a>
                </div>
            );
        } else {
            newSliderText = <p className="shipping-orders">Get free shipping on orders over $50!</p>;
        }

        SetButtonSliderText(newSliderText);
    };

    return (
        <header>
            <div className="site-nav">
                <p>Available Pages</p>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                </div>
            </div>
            <div className='top-nav'>
                <div className='top-nav-socials'>
                    <a href='#'><img src={InstagramLogo} alt="Instagram" /></a>
                    <a href='#'><img src={TiktokLogo} alt="TikTok" /></a>
                    <a href='#'><img src={RedditLogo} alt="Reddit" /></a>
                </div>
                <div className='top-nav-slider'>
                    <button onClick={changeButtonSliderText}>‹</button>
                    <div>{ButtonSliderText}</div>
                    <button onClick={changeButtonSliderText}>›</button>
                </div>
                <div className='store-locator'>
                    <a href="#" className="store-locator-link">Store Locator</a>
                    <img className='flag-icon' src={AmericanFlag} alt="American Flag" />
                    <div className='flag-con'>
                        <a className='united-states-link' href='#'>United States</a>
                        <a className='canada-link' href='#'>Canada</a>
                        <a className='global-link' href="#">Global</a>
                    </div>
                </div>
            </div>
            <div className='main-nav'>
                <a href='/' className='header-logo'>
                    <img src={HeaderLogo} alt="Soylent Logo" />
                </a>
                <ul className='desk-nav'>
                    <li onPointerOver={(event) => moveNavDropdown(event, 'down')} onPointerLeave={(event) => moveNavDropdown(event, 'up')}>
                        <a href='#'>Shop</a>
                    </li>
                    <li onPointerOver={(event) => moveNavDropdown(event, 'down')} onPointerLeave={(event) => moveNavDropdown(event, 'up')}>
                        <a href='#'>Health Benefits</a>
                    </li>
                    <li onPointerOver={(event) => moveNavDropdown(event, 'down')} onPointerLeave={(event) => moveNavDropdown(event, 'up')}>
                        <a href='#'>About</a>
                    </li>
                    <li><a href='#'>Why Soy?</a></li>
                    <li><a href='#'>Clinical Trials</a></li>
                    <li><a href='#'>Reviews</a></li>
                    <li><a href='#'>Product Quiz</a></li>
                </ul>
                <div className='nav-account-icons'>
                    <a href='#'><img src={AccountLogo} alt="Account" /></a>
                    <button className="cart-button" onClick={revealCart}>
                        <img src={CartLogo} alt="Cart" />
                        {cartCount > 0 && (
                            <p className="cart-count">{cartCount}</p>
                        )}
                    </button>
                </div>
            </div>
            <div className='nav-dropdown-con' onPointerOver={(event) => moveNavDropdown(event, 'down')} onPointerLeave={(event) => moveNavDropdown(event, 'up')}>
                {CurrentDropDown}
            </div>
            <MobileHeader />
            <HamMenu />
        </header>
    );
}

export default Header;
