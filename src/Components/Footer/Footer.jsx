import React, { useContext } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../AuthContext';


const Footer = () => {
    const { user } = useContext(AuthContext);
    return (
        <footer className="bg-base-300 text-base-content py-10  ">
            <div className=" max-w-11/12 mx-auto  flex flex-col md:flex-wrap-1 xl:flex-row gap-5 justify-between ">
                <div className="w-fit mx-auto">
                    <div className=' mb-4 md:mb-0 w-[40%] mx-auto xl:mx-0'>
                        <div className='flex justify-center xl:justify-start items-center gap-1 mb-2'>
                        <img className='h-[40%] w-[40%]' src='/logo.png' alt="" />

                        <h1 className='text-xl  md:text-2xl font-semibold '>Rentify<span className='text-orange-500'>Cars</span></h1>
                    </div>
                    </div>
                    <p className='my-3 text-center xl:text-start'>Your trusted partner for convenient and reliable car rentals. <br className='hidden md:flex' /> Explore our seamless booking experience tailored to your needs.</p>
                    <div className="flex justify-center xl:justify-start space-x-4">
                        <Link to='https://www.facebook.com/sha.kib.493731'> <FaFacebook className='text-orange-500 cursor-pointer' size={24}></FaFacebook></Link>
                        <Link to='https://www.linkedin.com/in/md-shakib-akando-b1a84533b/'><FaLinkedin className='text-orange-500 cursor-pointer' size={24}></FaLinkedin></Link>
                        <Link to='/'><FaInstagram className='text-orange-500 cursor-pointer' size={24}></FaInstagram></Link>
                        <Link to='https://www.youtube.com/'><FaYoutube className='text-orange-500 cursor-pointer' size={24}></FaYoutube></Link>


                    </div>

                </div>
                <div className='flex flex-col md:flex-row xl:w-[60%]  justify-around gap-5'>
                    <div className="mb-4 md:mb-0 md:w-[30%]  ">
                    <h1 className='text-xl text-center pt-5 text-orange-500 font-semibold mb-2'>Quick Link</h1>
                    <div className='flex flex-col w-fit  mx-auto text-center '>
                        {
                            user ? <>
                                <NavLink to='/' className='text-sm rounded-sm md:text-lg'>Home</NavLink>
                                <NavLink to='/availableCars' className='text-sm md:text-lg rounded-sm'>Available Cars</NavLink>
                                <NavLink to='/addCar' className='text-sm  rounded-sm md:text-lg'>Add Car</NavLink>
                                <NavLink to='/myCars' className='text-sm rounded-sm  md:text-lg'>My Cars</NavLink>
                                <NavLink to='/myBookings' className='text-sm rounded-sm md:text-lg'>My Booking</NavLink>
                            </> : <>
                                <NavLink to='/' className='text-sm rounded-sm md:text-lg'>Home</NavLink>
                                <NavLink to='/availableCars' className='text-sm rounded-sm md:text-lg'>Available Cars</NavLink>
                            </>
                        }
                    </div>
                </div>
                <div className="mb-4 md:mb-0  md:w-[30%]   ">
                    <h1 className='text-xl text-center pt-5 text-orange-500 font-semibold mb-2'>Our services</h1>
                    <div className='flex flex-col text-center text-lg gap-2'>
                        <p>Business Rental</p>
                        <p>Airport Transfer</p>
                        <p>Luxury Rental</p>
                        <p>Travel Rental</p>
                    </div>
                </div>
                <div className="mb-4 text-center md:text-start md:mb-0  ">

                    <p className='pt-5'>Contact us: <a href="mailto:support@shakibakando2@.com" className="text-orange-500 hover:underline">support@rentifycars.com</a></p>
                    <p className='mt-2'>Phone: +1 (555) 123-4567</p>
                </div>
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