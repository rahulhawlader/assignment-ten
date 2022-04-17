import React from 'react';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div>
            <img src={img} alt=' ' />
            <h2>Name:{name}</h2>
            <h3>Price: ${price}</h3>
            <p>description: {description}</p>

        </div>
    );
};

export default Service;