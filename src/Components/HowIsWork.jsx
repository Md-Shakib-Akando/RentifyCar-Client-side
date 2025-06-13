import React from 'react';
import { motion } from "framer-motion";
import { FaCalendar, FaKey, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router';
const HowIsWork = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (




        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">How Is It Works</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Renting your dream car is just a few simple steps away.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    
                    <motion.div
                        className="relative flex flex-col items-center text-center group"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div
                           className=" w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 transition-all duration-300 hover:bg-orange-500 group-hover:shadow-lg text-orange-500 hover:text-white animate-bounce"
                            
                            
                        >
                            <FaSearch size={28}></FaSearch>
                        </div>
                        <div className="h-1 w-full bg-orange-200 absolute ml-9 top-10 left-1/2 transform -translate-y-1/2 hidden md:block"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Choose Your Car
                        </h3>
                        <p className="text-gray-600">
                            Browse our extensive collection of premium vehicles and select
                            your perfect match.
                        </p>
                    </motion.div>

                    
                    <motion.div
                        className="relative flex flex-col items-center text-center group"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div
                           className=" w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 transition-all duration-300 hover:bg-orange-500 group-hover:shadow-lg text-orange-500 hover:text-white animate-bounce"
                            
                            
                        >
                            <FaCalendar size={28} ></FaCalendar>
                        </div>
                        <div className="h-1 w-full bg-orange-200 absolute ml-9 top-10 left-1/2 transform -translate-y-1/2 hidden md:block"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Book Your Dates
                        </h3>
                        <p className="text-gray-600">
                            Select your pickup and return dates, and complete the booking
                            process securely.
                        </p>
                    </motion.div>

                    
                    <motion.div
                        className="relative flex flex-col items-center text-center group"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div
                            className=" w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 transition-all duration-300 hover:bg-orange-500 group-hover:shadow-lg text-orange-500 hover:text-white animate-bounce"
                            
                        >
                            <FaKey size={28} ></FaKey>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Get Your Keys
                        </h3>
                        <p className="text-gray-600">
                            Pick up your car at the designated location and start your
                            luxury driving experience.
                        </p>
                    </motion.div>
                </div>

               
                <motion.div
                    className="mt-16 text-center"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                   <Link to='/availableCars'>
                    <button
                        className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-md text-lg font-medium transition duration-300 !rounded-button whitespace-nowrap cursor-pointer animate-pulse"
                        
                    >
                        Start Your Journey Now
                    </button>
                   </Link>
                </motion.div>
            </div>
        </section>
    );

};

export default HowIsWork;