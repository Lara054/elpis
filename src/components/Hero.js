import React from 'react';
import '../css/components/hero.css';

function Hero({ title, subTitle }) {
    return (
        <div className="hero">
            <div className="container column">
                {title && <h1 className="hero__title">{title}</h1>}
                {subTitle && <h3 className="hero__subTitle">{subTitle}</h3>}
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/hero/hero-background-image.png`} alt="" />
            <img src={`${process.env.PUBLIC_URL}/images/hero/hero-nav-thinking.png`} alt="" width="100" />
            <img src={`${process.env.PUBLIC_URL}/images/hero/hero-nav-speaking.png`} alt="" width="100" />
            <img src={`${process.env.PUBLIC_URL}/images/hero/hero-nav-listening.png`} alt="" width="100" />
            <img src={`${process.env.PUBLIC_URL}/images/hero/hero-nav-helper.png`} alt="" width="100" />
        </div>
    );
}

export default Hero;
