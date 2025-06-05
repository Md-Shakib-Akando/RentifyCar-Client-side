import React from 'react';
import { FaCar, FaPhoneAlt } from 'react-icons/fa';
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaSackDollar } from 'react-icons/fa6';
import { motion } from "motion/react"
const WhyChoose = () => {
    return (
        <div className='bg-base-200'>
            <div className='max-w-11/12 mx-auto py-5'>
                <div>
                    <h1 className='text-2xl md:text-4xl font-bold my-7 md:my-14 text-center'>Why Choose Us?</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-5'>
                    <motion.div
                        className='flex flex-col  p-4 justify-center items-center inset-shadow-sm border-b-4 border-t-4 border-pink-400 rounded-xl'
                        initial={{ rotateY: 0 }}
                        whileInView={{ rotateY: 360 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        style={{ perspective: 1000 }}
                    >
                        <div className='bg-gray-200 p-4 mb-4 rounded-full'>
                            <FaCar className='text-pink-400' size={24}></FaCar>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-xl font-bold pb-3 border-b-2 border-pink-300 w-fit mx-auto'>Wide Variety of Cars</h1>
                            <p className='text-center mt-3'>
                                Choose from an extensive selection of vehicles to suit every need and preference — from compact cars for city driving to luxury sedans, spacious SUVs, and rugged off-roaders. Whether you're planning a family trip, a business journey, or an adventure, we have the perfect ride for you.
                            </p>
                        </div>

                    </motion.div>
                    <motion.div
                        className='flex flex-col  p-4 justify-center items-center inset-shadow-sm border-b-4 border-t-4 border-emerald-500 rounded-xl'
                        initial={{ rotateY: 0 }}
                        whileInView={{ rotateY: 360 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        style={{ perspective: 1000 }}


                    >
                        <div className='bg-gray-200 p-4 mb-4 rounded-full'>
                            <FaSackDollar className='text-emerald-500' size={24}></FaSackDollar>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-xl font-bold pb-3 border-b-2 border-emerald-500 w-fit mx-auto'>Affordable Prices</h1>
                            <p className='text-center mt-3'>
                                Competitive daily rates you can count on. We offer a wide selection of well-maintained vehicles at budget-friendly prices, making it easy to find the perfect ride without overspending. Enjoy transparent pricing with no hidden charges — just great value and reliable service every time.
                            </p>
                        </div>

                    </motion.div>
                    <motion.div className='flex flex-col  p-4 justify-center items-center  border-b-4 border-t-4 border-indigo-500 rounded-xl'
                        initial={{ rotateY: 0 }}
                        whileInView={{ rotateY: 360 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        style={{ perspective: 1000 }}
                    >
                        <div className='bg-gray-200 p-4 mb-4 rounded-full'>
                            <FaRegCalendarCheck className='text-indigo-500' size={24} />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-xl font-bold pb-3 border-b-2 border-indigo-500 w-fit mx-auto'>Easy Booking Process</h1>
                            <p className='text-center mt-3'>
                                Enjoy a smooth and hassle-free booking experience with our user-friendly platform. In just a few simple steps, you can choose your preferred car, select dates, and confirm your reservation — all in minutes. No complicated forms, no unnecessary delays — just quick and easy car rentals at your fingertips.
                            </p>
                        </div>

                    </motion.div>
                    <motion.div className='flex flex-col  p-4 justify-center items-center inset-shadow-sm border-b-4 border-t-4 border-yellow-400 rounded-xl'
                        initial={{ rotateY: 0 }}
                        whileInView={{ rotateY: 360 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        style={{ perspective: 1000 }}
                    >
                        <div className='bg-gray-200 p-4 mb-4 rounded-full'>
                            <FaPhoneAlt className='text-yellow-400' size={24}></FaPhoneAlt>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-xl font-bold pb-3 border-b-2 border-yellow-400 w-fit mx-auto'>Customer Support</h1>
                            <p className='text-center mt-3'>
                                We’re here for you 24/7 with prompt, friendly assistance for all your queries and concerns. Whether you need help with booking, vehicle issues, or general questions — our dedicated support team is always just a call or message away.
                            </p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default WhyChoose;