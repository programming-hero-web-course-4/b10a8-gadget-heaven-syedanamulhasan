import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({gadget}) => {
    const {product_id, product_title, product_image, category, price}= gadget
    return (
        <div>
            <img className='w-[300px] h-[200px] border-1 border-gray-400 rounded-lg' src={product_image} alt="" />
            <h1>{product_title}</h1>
            <p>{price}</p>
            <Link to={`gadgets/${product_id}`}><button className='btn btn-outline btn-primary'>View Details</button></Link>
        </div>
    );
};

export default Gadget;