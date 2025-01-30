import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';


const Gadgets = () => {
    const[gadgets, setGadgets]= useState([]);
    useEffect(()=>{
        fetch('gadgets.json')
        .then(res => res.json())
        .then(data =>setGadgets(data))
    },[])
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            <div className='lg:flex gap-10'>
                <div className='flex flex-col rounded-lg  border-gray-400 px-10 lg:space-y-15 space-y-2 py-8  bg-[#F6F6F6]'>
                <button className="btn btn-outline rounded-4xl  bg-white">All Product</button>
                <button className="btn btn-outline rounded-4xl bg-white">Laptop</button>
                <button className="btn btn-outline rounded-4xl bg-white">Phones</button>
                <button className="btn btn-outline rounded-4xl bg-white">Accessories</button>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 justify-evenly'>
            {
                gadgets.map(gadget=> <Gadget 
                key={gadget.product_id} 
                gadget={gadget}></Gadget>)
            }
            
                </div>
            </div>
        </div>
    );
};

export default Gadgets;