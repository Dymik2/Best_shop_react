import React from 'react';
import catalog from '../images/Catalog.svg';
import eye from "../images/Eye.svg";
import person from "../images/Person.svg"

const Statistic = () => {
    return (
        <section className="container statistic">
            <h2>The most popular sales platform in country</h2>
            <div className="statistic_wrapper">
                <article>
                    <div className="picture">
                        <img src={person} alt="" />

                    </div>
                    <span>100000*</span>
                    <p>daily entries</p>
                </article>
                <article>
                    <div className="picture">
                        <img src={eye} alt="" />

                    </div>
                    <span>100000*</span>
                    <p>seen products every day</p>
                </article>
                <article>
                    <div className="picture">
                        <img src={catalog} />

                    </div>
                    <span>10000*</span>
                    <p>added posts daily</p>
                </article>
            </div>
        </section>
    );
}

export default Statistic;