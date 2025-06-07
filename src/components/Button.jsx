// Button.js
import React from 'react';

import '../css/components/button.css';

function Button({ text }) {
    return (
        <div className='button'>
            {text}
        </div>
    );
}

export default Button;
