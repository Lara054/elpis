import React from "react";

const IconText = ({ icon, text }) => {
    return (
        <div className="icon-text">
            <img src={icon} alt={text} />
            <span>{text}</span>
        </div>
    );
}

export default IconText;