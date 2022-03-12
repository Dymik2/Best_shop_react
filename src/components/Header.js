import React from 'react';


const Header = () => {
    return (
        <div className="header">
            <nav className="header__wrapper container">
                <a className="logo" href="">BestShop</a>
                <input type="checkbox" id="menu" className="menu-btn" />
                <label for="menu" className="menu-icon"><i className="fas fa-bars"></i></label>
                <ul>
                    <li><a href="">Why us</a></li>
                    <li><a href="">Benefit</a></li>
                    <li><a href="">Prices</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;