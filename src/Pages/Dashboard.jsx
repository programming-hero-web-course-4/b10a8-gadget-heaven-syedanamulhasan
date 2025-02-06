import { TbArrowsSort } from "react-icons/tb";

const Dashboard = () => {
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
                    {/* {
                        cart.map(cart => <CartItem key={cart.product_id} cart={cart}></CartItem>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;