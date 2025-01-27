import React from 'react';

const Gadget = ({gadget}) => {
    const {product_id, product_title, product_image, category, price}= gadget
    return (
        <div>
            <img className='w-[300px] h-[200px] border-1 border-gray-400 rounded-lg' src={product_image} alt="" />
            <h1>{product_title}</h1>
            <p>{price}</p>
            <button className='btn btn-outline btn-primary'>View Details</button>
        </div>
    );
};

export default Gadget;