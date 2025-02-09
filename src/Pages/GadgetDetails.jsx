import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

import { addToWishList, getWishList } from "../utility/addToWishList";
import { addToCartList } from "../utility/addtocart";

const GadgetDetails = () => {
    const gadgetData = useLoaderData();

    const { id } = useParams();

    const [gadgetDetail, setGadgetDetail] = useState([]);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const singleGadgetDetail = gadgetData.find(gadgetDetail => gadgetDetail.product_id == id)
        setGadgetDetail(singleGadgetDetail)

        const wishList = getWishList();
        const isExist = wishList.find(item => item.id == gadgetDetail.product_id)
        // if(isExist){
        //     setIsFavorite(true);
        // }

    }, [gadgetData, id])

    const { product_title, product_image, price, description, Specification, rating, availability, product_id } = gadgetDetail;

    const handleAddToCart = (id) => {
        addToCartList(id)
    }
    const handleWishList = (id) => {
        addToWishList(id);
        setIsFavorite(true);
    }
    return (
        <div className="h-[1600px]">
            <div className="bg-[#9538E2] mt-5 h-[600px] flex flex-col items-center">

                <div className=" text-center text-white mt-10 ">
                    <div className="max-w-md ">
                        <h1 className="lg:text-5xl font-bold">Product Details</h1>
                        <p className="lg:py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
                <div className="hero rounded-2xl bg-gray-100 mt-5 shadow-2xl w-fit p-10">
                    <div className="hero-content flex-col lg:flex-row gap-10 ">
                        <div className="h-full">
                            <img
                                src={product_image}
                                className="max-w-sm rounded-lg shadow-2xl h-full" />
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold">{product_title}</h1>
                            <p className="py-2 font-bold">
                                Price: $ {price}
                            </p>
                            {
                                availability ? <button className="btn btn-outline btn-success">In stock</button> : <button className="btn btn-outline btn-error">Not available</button>
                            }
                            <p className="text-xl">{description}</p>
                            <ol className='text-xl ml-12'>
                                {Specification &&
                                    Object.keys(Specification).map((s, i) => (
                                        <li className='list-decimal' key={i}>
                                            {s}: {Specification[s]}
                                        </li>
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
                            <button className="btn btn-circle btn-active ml-4">{rating}</button>
                            <br />
                            <div className='flex items-center gap-5'>
                                <button onClick={() => handleAddToCart(product_id)} className="btn btn-lg rounded-3xl bg-[#9538E2] text-white">Add to cart <span className='text-xl ml-2'><FaCartArrowDown /></span></button>
                                <button
                                    disabled={isFavorite}
                                    onClick={() => handleWishList(product_id)}
                                    className='btn btn-circle btn-active text-2xl p-2 border-2 '><FaRegHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default GadgetDetails;