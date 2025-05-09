import React from 'react';

function Hero({ title, subTitle, children }) {
    return (
        <section className="hero">
            <div className="container column">
                {title && <h1 className="hero__title">{title}</h1>}
                {subTitle && <h3 className="hero__subTitle">{subTitle}</h3>}
                {children}
            </div>
        </section>
    );
}

export default Hero;
