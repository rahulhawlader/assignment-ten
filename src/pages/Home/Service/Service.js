import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div className='service-style'>
            <img src={img} alt=' ' />
            <h2>Name:{name}</h2>
            <h3>Price: ${price}</h3>
            <p>description: {description}</p>
            <button>Check Out</button>

        </div>
    );
};

export default Service;