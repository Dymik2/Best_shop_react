import React from 'react';

const Contact = () => {
    return (
        <section className="container contact">
            <div className="contact__wrapper">
                <h2>Any questions?</h2>
                <p>Leave your email address or call</p>
                <div>
                    <p>info@bestshop.xyz</p>
                    <p>123456789</p>
                </div>
            </div>
            <div className="form__wrapper">

                <form action="">

                    <label class="label__input" for="name">name</label>

                    <input type="text" id="name" />


                    <label class="label__input" for="email">email</label>

                    <input type="email" id="email" />

                    <label class="checkbox">

                        <input type="checkbox" />

                        <span></span>
                        <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit illo voluptates repellendus eum iste itaque asperiores blanditiis cum voluptatem vitae vero distinctio, recusandae odit officia reprehenderit quidem sequi facere explicabo?
                        </p>
                    </label>
                    <div><a href="">Send</a></div>

                </form>
            </div>
        </section>
    );
}

export default Contact;