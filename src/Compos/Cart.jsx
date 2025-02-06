import { IoMdClose } from "react-icons/io";
import React from 'react';

const Cart = ({ cart, handleRemove }) => {
    const { product_title, description, price, product_image } = cart
    return (
        <div className='lg:flex items-center gap-6 my-4 p-4 border-2 rounded-lg'>
            <div>
                <img className='rounded-lg lg:w-[150px] lg:h-[150px]' src={product_image} alt="" />
            </div>
            <div className='lg:flex w-full justify-between items-center'>
                <div className='space-y-2'>
                    <h1 className='text-xl font-bold'>{product_title}</h1>
                    <p>{description}</p>
                    <p className='font-bold'>Price: $ {price}</p>
                </div>
                <span onClick={() => handleRemove(id)} className='text-4xl text-red-500'>
                    <IoMdClose />
                </span>
            </div>
        </div>
    );
};

export default Cart;
