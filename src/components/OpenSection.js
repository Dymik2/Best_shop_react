import React from 'react';
import background2 from '../images/Background2.png'

const OpenSection = () => {
    return (
        <section className="container open__section">
            <div className="text">
                <h1>Sell More!</h1>
                <p>Open shop on our platform and increase your sales</p>
                <a href="#">Open your shop</a>
            </div>

            <div className="container image" >
                <img class="container" src={background2} alt="" />
            </div>
        </section>
    );
}

export default OpenSection;