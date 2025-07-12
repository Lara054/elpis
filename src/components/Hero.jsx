import React from 'react';
import '../css/components/hero.css';

function Hero({ title, subTitle, backgroundImage }) {
    const heroStyle = backgroundImage
        ? { backgroundImage: `url(${backgroundImage})` }
        : {};
    return (
        <div className="hero" style={heroStyle}>
            <div className="hero__overlay" />
            <div className="container column">
                {title && <h1 className="hero__title">{title}</h1>}
                {subTitle && <h3 className="hero__subTitle">{subTitle}</h3>}
            </div>
        </div>
    );
}

export default Hero;
