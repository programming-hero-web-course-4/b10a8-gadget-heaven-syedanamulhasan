import React from 'react';

const Footer = () => {
    return (
        <div>
            
            <footer className="bg-gray-100 text-black mt-10">
            <div className='p-8 border-b-2 border-gray-300 lg:w-3/5 mx-auto space-y-2'>
            <h1 className='lg:text-4xl text-2xl text-[#9538E2] text-center font-bold'>Gadget Heaven</h1>
            <p className='lg:text-xl text-center text-[#9538E2]'>Leading the way in cutting-edge technology and innovations</p>
            </div>
                <div className="footer lg:flex justify-around p-10 w-3/5 mx-auto text-gray-700">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;