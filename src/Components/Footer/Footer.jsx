import React from 'react';
import { NavLink } from 'react-router';


const Footer = () => {
    return (
        <footer className="bg-base-300 text-base-content py-10  ">
            <div className="max-w-11/12 mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <div className='flex justify-center md:justify-start items-center gap-1 mb-2'>
                        <img className='h-[40%] w-[40%]' src='/logo.png' alt="" />

                        <h1 className='text-xl md:text-2xl font-semibold '>Rentify<span className='text-orange-500'>Cars</span></h1>
                    </div>
                    <p className='my-3 text-center md:text-start'>Your trusted partner for convenient and reliable car rentals. <br className='hidden md:flex' /> Explore our seamless booking experience tailored to your needs.</p>
                    <div className="flex justify-center md:justify-start space-x-4">

                    </div>

                </div>
                <div className="mb-4 md:mb-0">
                    <h1 className='text-xl text-center text-orange-500 font-semibold mb-2'>Quick Link</h1>
                    <div className='flex flex-col gap-2'>
                        <NavLink to='/' className='text-sm text-center p-1 rounded-md md:text-lg'>Home</NavLink>
                        <NavLink to='/availableCars' className='text-sm p-1 text-center md:text-lg rounded-md'>Available Cars</NavLink>
                    </div>
                </div>
                <div className="mb-4 md:mb-0">
                    <h1 className='text-xl text-center text-orange-500 font-semibold mb-2'>Our services</h1>
                    <div className='flex flex-col gap-2'>
                       <p>Business Rental</p>
                       <p>Airport Transfer</p>
                       <p>Luxury Rental</p>
                       <p>Travel Rental</p>
                    </div>
                </div>
                <div className="mb-4 text-center md:text-start md:mb-0">

                    <p>Contact us: <a href="mailto:support@shakibakando2@.com" className="text-orange-500 hover:underline">support@rentifycars.com</a></p>
                    <p className='mt-2'>Phone: +1 (555) 123-4567</p>
                </div>

            </div>
            <div className='max-w-11/12 mx-auto border-1 border-gray-300 my-5'></div>
            <div className='container mx-auto '>
                <p className='text-center'>© 2025 RentifyCars . All rights reserved.</p>
            </div>
        </footer>

    );
};

export default Footer;