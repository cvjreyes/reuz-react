import React from 'react';
import './Button.css';

const Button = ({ name, onClick }) => {

    return (
        <>
            <div onClick={onClick} className="button_container">
                <h1 className="button_content"> {name}</h1>
            </div>
        </>
    )
};

export default Button;