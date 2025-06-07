import React from 'react';
import '../css/components/hero.css';

function Hero({ title, subTitle }) {
    return (
        <div className="hero">
            <div className="container column">
                {title && <h1 className="hero__title">{title}</h1>}
                {subTitle && <h3 className="hero__subTitle">{subTitle}</h3>}
            </div>
        </div>
    );
}

export default Hero;
