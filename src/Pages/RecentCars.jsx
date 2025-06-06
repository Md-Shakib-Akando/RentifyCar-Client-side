import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FaCar} from 'react-icons/fa';
import { FaSackDollar } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { HiBookmark, HiCheckCircle, HiClock, HiMiniXCircle } from 'react-icons/hi2';
const RecentCars = ({ car }) => {
    const { _id, createdAt, bookingCount, imageUrl, availability, dailyRentalPrice, carModel } = car;
    const postedAgo = createdAt
        ? `Added ${formatDistanceToNow(new Date(createdAt), { addSuffix: true })}`
        : 'N/A';
    return (


        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay:0.2 }}
            viewport={{ once: true }}
            className=" rounded-md shadow-md border-1 border-orange-300  dark:bg-gray-50 dark:text-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-pointer">

            <img src={imageUrl} alt="" className="object-cover object-center  rounded-t-md  dark:bg-gray-500" />
            <div className="p-3">

                <div className="flex flex-wrap items-center pt-3 pb-1">
                    <div className="flex flex-col  space-x-2">

                        <span className='flex'><h1 className='flex items-center gap-3 text-xl font-semibold'><FaCar className='text-orange-400' size={24}></FaCar>{carModel}</h1></span>
                        <span className='mt-2 mb-1'><h1 className=' flex items-center gap-4 font-medium'><FaSackDollar className='text-orange-400' size={16}></FaSackDollar>Price : ${dailyRentalPrice}/day</h1></span>
                        <span className='mb-1'><h1 className=' font-medium'>{availability=="Available" ? (
                            <>
                                <span className='flex items-center gap-2'><HiCheckCircle size={20} className='text-green-400'></HiCheckCircle>Available</span>
                            </>
                        ) : (
                            <>
                                <span className='flex items-center gap-2'><HiMiniXCircle size={20} className='text-red-500'></HiMiniXCircle>Not Available</span>
                            </>
                        )}</h1></span>
                        <span className='mb-1'><h1 className=' flex items-center gap-2 font-medium'><HiBookmark className='text-blue-400' size={20}></HiBookmark>BookingCount: {bookingCount}</h1></span>
                        <span className='mb-3'><h1 className=' flex items-center gap-2 font-medium'><HiClock className='text-pink-400' size={20}></HiClock>Date Posted: {postedAgo}</h1></span>
                    </div>
                </div>

            </div>
        </motion.div>


    );
};

export default RecentCars;