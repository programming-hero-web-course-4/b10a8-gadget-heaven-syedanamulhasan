import React from 'react';

const CartItem = ({cart}) => {
    const {product_title,description,price,product_image}= cart

    return (
        <div>
            <div className='flex items-center gap-6 mt-4 p-4 border-2 rounded-lg'>
                <img className='w-[150px] h-[150px]' src={product_image} alt="" />
                <div className='space-y-2'>
                    <h1 className='text-xl font-bold'>{product_title}</h1>
                    <p>{description}</p>
                    <p className='font-bold'>Price: $ {price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;