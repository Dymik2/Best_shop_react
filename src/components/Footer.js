import React from 'react';
import facebook from '../images/Facebook.svg';
import twitter from '../images/Twitter.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container footer__wrapper">
                <div className="footer__reserved">
                    <h2>BestShop</h2>
                    <p>&copy 2019 BestShop. All right Reserved</p>
                </div>
                <div className="footer__link">
                    <a href="www.facebook.com"><img src={facebook} alt="" /></a>
                    <a href="https://twitter.com/?lang=pl"> <img src={twitter} alt="" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;