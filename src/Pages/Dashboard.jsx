import { useEffect, useState } from "react";
import { TbArrowsSort } from "react-icons/tb";

import { useLoaderData } from 'react-router-dom';



import { getCartList, removeCart } from "../utility/addtocart";
import Cart from "../Compos/Cart";
import Categories from "../Compos/Categories";
import Wish from "../Compos/Wish";
import { getWishList } from "../utility/addToWishList";

const Dashboard = () => {
    const [cart, setCart] = useState([]);
    const [wish, setWish] = useState([]);
    const allGadgets = useLoaderData();

    useEffect(()=>{
        const wishList = getWishList();
        const wishItem = allGadgets.filter(gadget => wishList.includes(gadget.product_id))
        setWish(wishItem)
    },[])

    useEffect(() => {
        const cartList = getCartList();
        console.log(cartList, allGadgets)
        const cartItem = allGadgets.filter(gadget => cartList.includes(gadget.product_id))

        setCart(cartItem)

    }, [])
    const handleRemove = product_id => {
        removeCart(product_id)
        const cartList = getCartList();
        console.log(cartList, allGadgets)
        const cartItem = allGadgets.filter(gadget => cartList.includes(gadget.product_id))

        setCart(cartItem)
    }

    const [toggle, setToggle] = useState({
        player: true,
        status: "cart"
    })

    const handleToggle = (status) => {
        if (status == "cart") {
            setToggle({
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
            <div className='container mx-auto'>
                <div class="hero bg-[#9538E2] text-white">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold">Hello there</h1>
                            <p class="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>

                            <button
                                onClick={() => handleToggle("cart")}
                                className={`${toggle.gadget ? "btn btn-primary " : "btn"}`}>cart</button>
                            <button
                                onClick={() => handleToggle("wishlist")} className={`${toggle.gadget ? "btn" : "btn btn-primary"}`}>Wishlist</button>

                        </div>
                    </div>
                </div>
                <div className='flex justify-between my-10'>{toggle.gadget?
                    <p className='text-2xl'>Cart</p>:<p className='text-2xl'>Wishlist</p>}
                    <div className='flex items-center gap-6'>
                        <p>Total Cost: </p>
                        <button className='btn btn-primary rounded-4xl'>Sort by Price <span className='text-xl'><TbArrowsSort /></span></button>
                    </div>
                </div>
                <div>
                    {
                        toggle.gadget ?
                            cart.map(cart => <Cart
                                key={cart.product_id}
                                handleRemove={handleRemove}
                                cart={cart}></Cart>) : wish.map(wish =><Wish
                                key={wish.product_id}
                                wish={wish}></Wish>)
                    }
                    
                </div>
            </div>
        </div >
    );
};

export default Dashboard;