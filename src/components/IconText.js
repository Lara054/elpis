import React from "react";
import '../css/components/icon_text.css';

const IconText = ({ icon, text }) => {
    return (
        <div className="icon-text">
            <img src={icon} alt={text} />
            <p>{text}</p>
        </div>
    );
}

export default IconText;