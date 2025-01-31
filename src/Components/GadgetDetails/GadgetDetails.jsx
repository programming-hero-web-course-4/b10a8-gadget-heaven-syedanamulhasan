import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { addToCartList } from '../../utility/addtocart';
import { addToWishList } from '../../utility/addToWishList';
const GadgetDetails = () => {
    const { gadgetId } = useParams();
    const data = useLoaderData();
    const id = parseInt(gadgetId);

    const gadget = data.find(gadget => gadget.product_id === id);

    const { product_title, product_image, price, description, Specification, rating, availability, product_id } = gadget;

    const handleAddToCart = (id) => {
        addToCartList(id)
    }
    const handleWishList = (id) =>{
        addToWishList(id)
    }
    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        src={product_image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{product_title}</h1>
                        <p className="py-2 font-bold">
                            Price: $ {price}
                        </p>
                        {
                            availability ? <button className="btn btn-outline btn-error">In stock</button> : <button className="btn btn-primary">Not available</button>
                        }
                        <p>{description}</p>
                        <ol><span className='font-bold text-xl'>Specifications:</span>
                            {Object.values(Specification).map((value, index) => (
                                <li className='list-decimal' key={index}>{value}</li> // Render each value inside a <p> tag
                            ))}
                        </ol>
                        <div className='flex items-center gap-2'>
                            <p>Rating </p><span className='text-orange-400'><FaRegStarHalfStroke /></span>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />

                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <span>{rating}</span>
                        <br />
                        <div className='flex items-center gap-5'>
                            <button onClick={() => handleAddToCart(product_id)} className="btn btn-lg rounded-3xl bg-[#9538E2] text-white">Add to cart <span className='text-xl ml-2'><FaCartArrowDown /></span></button>
                            <button onClick={() => handleWishList(product_id)}
                                className='text-2xl p-2 border-2 rounded-4xl'><FaRegHeart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
