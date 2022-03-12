import React from 'react';
import OpenSection from "./OpenSection";
import Statistic from "./Statistic";
import Pricing from "./Pricing";
import Contact from "./Contact";

const Main = () => {
    return (
        <main>
            <OpenSection />
            <Statistic />
            <Pricing />
            <Contact />
        </main>
    );
}

export default Main;