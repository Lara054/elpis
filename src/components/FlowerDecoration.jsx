import React from 'react';
import '../css/components/flower_decoration.css';

function FlowerDecoration({ src }) {
    return (
        <div className="floating-flower-wrapper">
            <img
                src={`${process.env.PUBLIC_URL}/images/decorations/${src}`}
                alt="flower"
                className="floating-flower fade-in"
            />
        </div>
    );
}

export default FlowerDecoration;
