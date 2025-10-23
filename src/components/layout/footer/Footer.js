import {react} from 'react'
import '../../../assets/styles/footer/footer.css'

import soylentLogo from '../../../assets/images/footer/soylent-logo.jpeg'

import instagramIcon from '../../../assets/images/footer/instagram.jpeg';
import tiktokIcon from '../../../assets/images/footer/tiktok.jpeg';
import twitterIcon from '../../../assets/images/footer/twitter.jpeg';
import redditIcon from '../../../assets/images/footer/reddit.jpeg';
import facebookIcon from '../../../assets/images/footer/facebook.jpeg';



function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <div className='top-footer'>
                <div>
                    <p>learn more</p>
                    <a href='#'>blog</a>
                    <a href='#'>press</a>
                    <a href='#'>careers</a>
                    <a href='#'>gift cards</a>
                    <a href='#'>discount programs</a>
                </div>
                <div>
                    <p>support</p>
                    <a href='#'>contact</a>
                    <a href='#'>find a store</a>
                    <a href='#'>where's my order?</a>
                    <a href='#'>faq</a>
                </div>
                <div className='footer-socials'>
                    <p>social</p>
                    <div>
                        <a href='#'><img src={instagramIcon}></img></a>
                        <a href='#'><img src={tiktokIcon}></img></a>
                        <a href='#'><img src={twitterIcon}></img></a>
                        <a href='#'><img src={redditIcon}></img></a>
                        <a href='#'><img src={facebookIcon}></img></a>
                    </div>
                </div>
                <div>
                    <form>
                        <label>SIGN UP FOR OUR NEWSLETTER AND GET 25% OFF YOUR FIRST ORDER!</label>
                        <div>
                            <input type='email' placeholder='Email Address'></input>
                            <button type='submit'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='bottom-footer'>
                <a href='#' className='bottom-footer-logo'><img src={soylentLogo}></img></a>
                <div>
                    <a href='#'>terms & conditions</a>
                    <a href='#'>privacy policy</a>
                    <a href='#'>accessibility statement</a>
                    <a href='#'>do not sell or share my personal Info</a>
                    <a href='#'>notice of collection</a>
                    <a href='#'>cookie policy</a>
                </div>
                <p>Copyright ® {currentYear}, <strong>Soylent</strong></p>
            </div>

        </footer>
    )
}

export default Footer;