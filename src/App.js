import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from '../src/components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './pages/Home';
import Cart from './components/layout/parts/Cart';


import Products from './pages/Products';

function App() {

  const closeDiscountTab = (event) => {

    let discountTab = document.querySelector('.discount-tab');
    discountTab.style.right='-150px'

  }

  const closeProjectDisclaimer = () => {
    document.querySelector('.site-disclaimer-con').style.opacity=0;
    document.querySelector('.site-disclaimer-con').style.pointerEvents="none";
  }

  return (
    <Router>
      <div className="App">
        
          <div className='discount-tab'>
            <p>25% Off</p>
            <button onClick={closeDiscountTab}>X</button>
          </div>
          <div className='site-disclaimer-con'>
            <div className='site-disclaimer'>
              <h3>Project Details</h3>
              <p>The purpose of this project was to make a clone of the home and product page of <a href="https://soylent.com/">soylent.com</a> with <strong>checkout functionality through stripe.</strong> Quick links to the Home and Product Page is at the top of screen, with the product page and cart being the main components for the ecomm functionality.</p>
              <p><strong>if you want to purchase products visit <a href="https://soylent.com/">soylent.com</a></strong></p>
              <p><strong>Test Card Info for transactions</strong></p>
              <div>
                <p><strong>Card Number:</strong> 4242 4242 4242 4242</p>
                <p><strong>Month/Year:</strong> 12/34</p>
                <p><strong>CVC:</strong>567</p>
              </div>
              <button onClick={closeProjectDisclaimer}>X</button>
            </div>
          </div>
        <Header />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
