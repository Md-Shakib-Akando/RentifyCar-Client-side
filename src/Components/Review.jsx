import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

const Review = () => {
    return (
        <>
            <div className='bg-orange-100 py-10'>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Success Stories
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hear from job seekers who found their perfect career match through
                        Job Track.
                    </p>
                </div>
                <div className="carousel w-full">

                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="bg-white max-w-4xl mx-auto p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit text-center">
                            <div className="flex flex-col md:flex-row justify-center items-center mb-6 text-center">

                                <div>
                                    <div className='flex gap-2 items-center'>
                                        <BsPersonCircle size={28} />
                                        <h4 className="text-lg font-bold text-gray-800">
                                            Andrew Blake
                                        </h4>
                                    </div>


                                </div>
                            </div>
                            <blockquote className="text-gray-700 italic mb-4">
                                "The service at DriveLuxe is exceptional. The Tesla Model S I
                                rented was immaculate, and the booking process was seamless.
                                Perfect for business trips!"
                            </blockquote>
                            <div className="flex justify-center items-center gap-2 text-yellow-400">
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="bg-white max-w-4xl mx-auto p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit text-center">
                            <div className="flex flex-col md:flex-row justify-center items-center mb-6 text-center">

                                <div>
                                    <div className='flex gap-2 items-center'>
                                        <BsPersonCircle size={28} />
                                        <h4 className="text-lg font-bold text-gray-800">
                                            Sarah Johnson
                                        </h4>
                                    </div>


                                </div>
                            </div>
                            <blockquote className="text-gray-700 italic mb-4">
                                "The attention to detail and customer service at DriveLuxe is
                                unmatched. The Porsche 911 was a dream to drive. Highly
                                recommend!"
                            </blockquote>
                            <div className="flex justify-center items-center gap-2 text-yellow-400">
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="bg-white max-w-4xl mx-auto p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit text-center">
                            <div className="flex flex-col md:flex-row justify-center items-center mb-6 text-center">

                                <div>
                                    <div className='flex gap-2 items-center'>
                                        <BsPersonCircle size={28} />
                                        <h4 className="text-lg font-bold text-gray-800">
                                            Michael Chen
                                        </h4>
                                    </div>


                                </div>
                            </div>
                            <blockquote className="text-gray-700 italic mb-4">
                                "I've rented luxury cars worldwide, but DriveLuxe stands out.
                                The Range Rover Sport was perfect for my weekend getaway. Will
                                definitely rent again!"

                            </blockquote>
                            <div className="flex justify-center items-center gap-2 text-yellow-400">
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                            </div>
                        </div>
                        <div className=" absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    
                </div>
            </div>

        </>
    );
};

export default Review;