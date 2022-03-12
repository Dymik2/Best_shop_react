import React from 'react';

const Pricing = () => {
    return (
        <section className="container pricing">
            <h2>Pricing</h2>
            <div className="articles">
                <article className="offer">
                    <div>
                        <h3>Basic</h3>
                        <h2>0$</h2>
                    </div>
                    <div>
                        <p><i className="far fa-check-square"></i> 100 MB HDD</p>
                        <p><i className="far fa-check-square"></i> 1 Subdomain</p>
                        <p><i className="far fa-check-square"></i> 2 E-mails</p>
                        <p><i className="far fa-times-circle"></i> Two years license</p>
                        <p><i className="far fa-times-circle"></i> Full Support</p>
                        <a href="">Begin</a>
                    </div>

                </article>
                <article className="offer">
                    <div>
                        <h3>Professional</h3>
                        <h2>25$</h2>
                        <p>Lmited offer</p>
                    </div>
                    <div>
                        <p><i className="far fa-check-square"></i> 500 MB HDD</p>
                        <p><i className="far fa-check-square"></i> 2 Subdomain</p>
                        <p><i className="far fa-check-square"></i> 5 E-mails</p>
                        <p><i className="far fa-check-square"></i> One year license</p>
                        <p><i className="far fa-times-circle"></i> Full Support</p>
                        <a href="">Begin</a>
                    </div>

                </article>
                <article className="offer">
                    <div>
                        <h3>Premium</h3>
                        <h2>60$</h2>
                        <p>Lmited offer</p>
                    </div>
                    <div>
                        <p><i className="far fa-check-square"></i> 2 GB HDD</p>
                        <p><i className="far fa-check-square"></i> 5 Subdomain</p>
                        <p><i className="far fa-check-square"></i> 20 E-mails</p>
                        <p><i className="far fa-check-square"></i> Two years license</p>
                        <p><i className="far fa-check-square"></i> Full Support</p>
                        <a href="">Begin</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Pricing;