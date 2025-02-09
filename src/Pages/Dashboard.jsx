import { useEffect, useState } from "react";
import { TbArrowsSort } from "react-icons/tb";

import { useLoaderData, useNavigate } from 'react-router-dom';



import { clearStorage, getCartList, removeCart } from "../utility/addtocart";
import Cart from "../Compos/Cart";

import Wish from "../Compos/Wish";
import { getWishList } from "../utility/addToWishList";


const Dashboard = () => {
    let navigate = useNavigate();

    const [cart, setCart] = useState([]);
    console.log(cart)
    const [wish, setWish] = useState([]);
    const [price, setPrice] = useState(0.00);
    // console.log(wish)
    const allGadgets = useLoaderData();

    useEffect(() => {
        const wishList = getWishList();
        // console.log(wishList)
        const wishItem = allGadgets.filter(gadget => wishList.includes(gadget.product_id))
        // console.log(wishItem)
        setWish(wishItem)
    }, [])


    useEffect(() => {
        const cartList = getCartList();
        // console.log(cartList)
        const cartItem = allGadgets.filter(gadget => cartList.includes(gadget.product_id))

        // console.log(cartItem);
        const cartPrice = cartItem.reduce((acc, cart) => acc + cart.price, 0)
        setPrice(cartPrice);
        setCart(cartItem)

    }, [])

    const handleSort = (price) => {
        
            const sorted = [...cart].sort((a, b) => b.price - a.price)
            setCart(sorted);
        
    }

    const handleRemove = product_id => {
        removeCart(product_id)
        const cartList = getCartList();
        console.log(cartList, allGadgets)
        const cartItem = allGadgets.filter(gadget => cartList.includes(gadget.product_id))

        setCart(cartItem)
    }
    const handleModal = () => {
        clearStorage()
        navigate("/")
    }
    const [toggle, setToggle] = useState({
        player: true,
        status: "cart"
    })

    const handleToggle = (status) => {
        if (status == "cart") {
            setToggle(
                {
                    gadget: true,
                    status: "cart"
                })
        }
        else {
            setToggle({
                gadget: false,
                status: "wishlist"
            })
        }
    }
    return (
        <div>

            <div className="hero bg-[#9538E2] text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="lg:text-5xl text-2xl font-bold">Dashboard</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>

                        <button
                            onClick={() => handleToggle("cart")}
                            className={`${toggle.gadget ? "btn mr-4" : "btn btn-outline mr-4"}`}>cart</button>
                        <button
                            onClick={() => handleToggle("wishlist")} className={`${toggle.gadget ? "btn btn-outline" : "btn"}`}>Wishlist</button>

                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className='flex justify-between my-10'>{toggle.gadget ?
                    <p className='text-2xl font-bold'>Cart</p> : <p className='text-2xl font-bold'>Wishlist</p>}
                    {
                        toggle.gadget ?
                            <div className='lg:flex items-center gap-6'>
                                <p className="text-xl">Total Cost: <span>{price.toFixed(2)}$</span></p>
                                <button onClick={() => handleSort(price)} className='btn btn-primary rounded-4xl'>Sort by Price <span className='text-xl'><TbArrowsSort /></span></button>

                                {/* modal */}

                                <button
                                    onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-success rounded-4xl px-6">Purchase</button>
                                <dialog id="my_modal_1" className="modal ">
                                    <div className="modal-box flex flex-col items-center">
                                        <img className="my-2" src="/src/assets/Group.png" alt="" />
                                        <h3 className="font-bold text-2xl lg:my-4">Payment Successfully</h3>
                                        <div className="w-4/5 text-center border-t-2 border-gray-300">
                                            <p className="py-4">Thanks For Purchasing</p>
                                            <p>Total: {price.toFixed(2)}$</p>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">

                                                <button onClick={() => handleModal()} className="btn btn-wide btn-active rounded-4xl">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div> : ""
                    }
                </div>
                <div>
                    {
                        toggle.gadget ?
                            cart.map(cart => <Cart
                                key={cart.product_id}
                                handleRemove={handleRemove}
                                cart={cart}></Cart>) : wish.map(wish => <Wish
                                    key={wish.product_id}
                                    wish={wish}></Wish>)
                    }

                </div>
            </div>
        </div >
    );
};

export default Dashboard;