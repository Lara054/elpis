// Button.js
import React from 'react';

import '../css/components/button.css';

function Button({ text, link }) {
    return (
        <div className='button'>
            <a href={link} className='row'>
                {text}
                {/* <img src='images/icon/right-arrow.png' alt='右矢印' /> */}
            </a>
        </div>
    );
}

export default Button;
