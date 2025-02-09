import { FcFaq } from "react-icons/fc";

const Faq = () => {
    return (
        <div>
            <div className="hero bg-[#9538E2] text-white py-10">
                <div className="hero-content text-center">
                    <div className="max-w-md flex flex-col items-center">
                        <div className="flex text-center gap-5">
                            <h1 className="lg:text-5xl text-2xl font-bold">FAQ </h1>
                            <span className=" text-5xl"><FcFaq /></span>
                        </div>
                        <p className="py-6">
                            You might have some query about Gadget Heaven. You can always email us for your curiosity. Here is some common questions and answers list asked by our clients.
                        </p>

                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-10'>
                <div className="hero bg-base-200 py-10 shadow-2xl rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                        <div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <div className="collapse-title text-xl font-medium">Do you have cash on delivery available on  all products ? </div>
                                <div className="collapse-content">
                                    <p>Almost all products have both COD and advance payment option. Some special products you can have only when you pay advance. </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">What is the product return policy in your shop?</div>
                                <div className="collapse-content">
                                    <p>If the product is not satisfactory you can return it within 7 days.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">Do you sell spare parts of the gadget products?</div>
                                <div className="collapse-content">
                                    <p>No sir, we only sell the electronic devices.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">What kind of service do you provide? warrant or guaranty?</div>
                                <div className="collapse-content">
                                    <p>We provide 1 year guaranty and 3 year warranty services in our all outlets.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <p className='p-2 text-gray-600 text-center font-semibold text-xl'>Please login to get regular updates</p>
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;