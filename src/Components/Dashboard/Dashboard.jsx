import React, { useEffect, useState } from 'react';
import { TbArrowsSort } from "react-icons/tb";
import { useLoaderData } from 'react-router-dom';
import { getCartList } from '../../utility/addtocart';
import Gadget from '../Gadget/Gadget';
import CartItem from '../CartItem/CartItem';
const Dashboard = () => {

  const [cart, setCart] = useState([]);
  const allGadgets = useLoaderData();

  useEffect(() => {
    const cartList = getCartList();
    console.log(cartList, allGadgets)
    const cartItem = allGadgets.filter(gadget => cartList.includes(gadget.product_id))

    setCart(cartItem)

  }, [])
  return (
    <div className='container mx-auto'>
      <div class="hero bg-[#9538E2] text-white">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>

            <button class="btn btn-outline btn-primary font-bold text-white">cart</button>
            <button class="btn btn-outline btn-primary ml-4 text-white">Wishlist</button>

          </div>
        </div>
      </div>
      <div className='flex justify-between my-10'>
        <p className='text-2xl'>Cart</p>
        <div className='flex items-center gap-6'>
          <p>Total Cost: </p>
          <button className='btn btn-primary rounded-4xl'>Sort by Price <span className='text-xl'><TbArrowsSort /></span></button>
        </div>
      </div>
      <div>
    {
      cart.map(cart => <CartItem key={cart.product_id} cart={cart}></CartItem>)
    }
      </div>
    </div>
  );
};

export default Dashboard;