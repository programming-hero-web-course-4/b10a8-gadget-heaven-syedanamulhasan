import React from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
    return (
        <div className='container mx-auto'>

            <Banner></Banner>
            <div class=" flex flex-col items-center space-y-6 text-center text-white my-10">
   
      <h1 class="lg:text-4xl lg:w-3/5 font-bold ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p class="lg:w-3/5 lg:text-xl">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button class="btn text-[#9538E2] rounded-3xl">Shop Now</button>
    
  </div>
            <div className='w-4/5 mx-auto'>
            <img className='border-2 p-4 glass rounded-3xl' src="/src/assets/banner.jpg" alt="" />
            </div>
                
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;