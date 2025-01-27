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
            <div className='flex gap-10'>
                <div className='flex flex-col px-8 border-2 border-gray-400 gap-6 py-5 bg-white'>
                <button className="btn btn-outline btn-accent">All Product</button>
                <button className="btn btn-outline btn-accent">Laptop</button>
                <button className="btn btn-outline btn-accent">Phones</button>
                <button className="btn btn-outline btn-accent">Accessories</button>
                </div>
                <div className='flex-1 grid grid-cols-3'>
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