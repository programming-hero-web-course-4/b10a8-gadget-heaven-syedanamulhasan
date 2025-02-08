import React from 'react';
import banner from '../assets/banner.jpg'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    let navigate = useNavigate();
    const dashboardNavigation =() =>{
        navigate("/dashboard");
    }
    return (
        <div
            className="hero container mx-auto rounded-b-lg lg:h-[1000px] h-[600px]"
            style={{
                background: "#9538E2"
            }}>

            <div class="hero-content flex flex-col items-center justify-center space-y-2 text-center text-white mt-20">

                <h1 class="lg:text-4xl lg:w-3/5 font-bold ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p class="lg:w-3/5 lg:text-xl">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button onClick={()=>dashboardNavigation()} class="btn text-[#9538E2] rounded-3xl">Shop Now</button>
                {/* <div className='w-4/5 mx-auto lg:mt-10'>
            <img className='border-2 p-4 glass rounded-3xl' src={banner} alt="" />
            
            </div> */}
            
            </div>
            
        </div>
    );
};

export default Banner;