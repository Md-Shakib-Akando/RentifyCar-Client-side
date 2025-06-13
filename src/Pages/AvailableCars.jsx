import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { HiBookmark, HiCheckCircle, HiMiniXCircle } from 'react-icons/hi2';
import { FaCar } from 'react-icons/fa';
import { FaLocationDot, FaSackDollar } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { AuthContext } from '../AuthContext';
import Loading from '../Components/Loading';
const AvailableCars = () => {
    const {loading}=useContext(AuthContext)
    const [allCars, setAllCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    const [sortOption, setSortOption] = useState('');
    const [viewType, setViewType] = useState("grid");
    useEffect(() => {

        const url = sortOption
            ? `http://localhost:3000/sorted-cars?sort=${sortOption}`
            : `http://localhost:3000/cars`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllCars(data));

    }, [sortOption]);




    useEffect(() => {
        const url = searchTerm
            ? `http://localhost:3000/search-cars?search=${searchTerm}`
            : `http://localhost:3000/cars`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllCars(data));
    }, [searchTerm]);
    if (loading) {
        return <Loading></Loading>
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };




    return (

        <>
            <div className='max-w-11/12 mx-auto py-10'>
                <div>
                    <div className='flex justify-between flex-col lg:flex-row items-center gap-4 mb-4'>

                        <div className='w-full lg:w-[50%] '>
                            <input
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className='w-full p-2 border rounded-md outline-0 border-orange-200' type="text" name="search" placeholder='search by car model or location' />
                        </div>
                        <div className='flex flex-col lg:flex-row items-center lg:gap-7'>
                            <div className="flex  items-center  my-3">
                                <h1 className='text-xl w-[50%] font-semibold mr-5 '>Sort by: </h1>
                                <select
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="select select-bordered border-orange-200"
                                >
                                    <option value="" disabled>-- Select Sort Option --</option>
                                    <option value="asc">Price (Lowest First)</option>
                                    <option value="desc">Price (Highest First)</option>
                                </select>
                            </div>
                            <div className='w-full lg:w-fit'>
                                <button
                                    onClick={() => setViewType(viewType === 'grid' ? 'list' : 'grid')}
                                    className="btn w-full border-orange-200 text-orange-400"
                                >
                                    {viewType === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {viewType === 'grid' ? (
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
                            {
                                allCars.map(car => (


                                    <motion.div

                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                        viewport={{ once: true }}
                                        key={car._id}
                                        className="flex flex-col justify-between rounded-md shadow-md border-1 border-orange-300  dark:bg-gray-50 dark:text-gray-800  hover:cursor-pointer">

                                        <div >
                                            <img src={car.imageUrl} alt="" className="object-cover object-center  rounded-t-md  dark:bg-gray-500" />
                                            <div className="p-3">

                                                <div className="flex flex-wrap items-center pt-3 pb-1">
                                                    <div className="flex flex-col  space-x-2">

                                                        <span className='flex'><h1 className='flex items-center gap-3 text-xl font-semibold'><FaCar className='text-orange-400' size={24}></FaCar>{car.carModel}</h1></span>
                                                        <span className='mt-2 mb-1'><h1 className=' flex items-center gap-4 font-medium'><FaSackDollar className='text-orange-400' size={16}></FaSackDollar>Price : ${car.dailyRentalPrice}/day</h1></span>
                                                        <span className='mt-2 mb-1'><h1 className=' flex items-center gap-4 font-medium'><FaLocationDot size={20}></FaLocationDot>{car.location}</h1></span>
                                                        <span className='mb-1'><h1 className=' font-medium'>{car.availability == "Available" ? (
                                                            <>
                                                                <span className='flex items-center gap-2'><HiCheckCircle size={20} className='text-green-400'></HiCheckCircle>Available</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span className='flex items-center gap-2'><HiMiniXCircle size={20} className='text-red-500'></HiMiniXCircle>Not Available</span>
                                                            </>
                                                        )}</h1></span>
                                                        <span className='mb-1 '><h1 className=' flex items-center gap-2 font-medium'><HiBookmark className='text-blue-400' size={20}></HiBookmark>BookingCount: {car.bookingCount}</h1></span>
                                                        <span>{car.description}</span>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                        <div className='w-11/12 mx-auto mb-3'>
                                            <Link to={`/carDetails/${car._id}`}>

                                                <button className='btn w-full'>Book Now</button>
                                            </Link>
                                        </div>
                                    </motion.div>



                                ))
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <div className='space-y-5' >
                            {
                                allCars.map(car => (
                                    <>
                                        <motion.div

                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="overflow-x-auto  flex flex-col w-full justify-between rounded-md shadow-md border-1 border-orange-300  dark:bg-gray-50 dark:text-gray-800  hover:cursor-pointer">

                                            <div className='flex items-center gap-10'>
                                                <img src={car.imageUrl} alt="" className="object-cover object-center w-[30%] h-[20%] rounded-t-md  dark:bg-gray-500" />
                                                <div className="p-3 w-[50%]">

                                                    <div className="flex flex-wrap items-center pt-3 pb-1">
                                                        <div className="flex flex-col  space-x-2">

                                                            <span className='flex'><h1 className='flex items-center gap-3 text-xl font-semibold'><FaCar className='text-orange-400' size={24}></FaCar>{car.carModel}</h1></span>
                                                            <span className='mt-2 mb-1'><h1 className=' flex items-center gap-4 font-medium'><FaSackDollar className='text-orange-400' size={16}></FaSackDollar>Price : ${car.dailyRentalPrice}/day</h1></span>
                                                            <span className='mt-2 mb-1'><h1 className=' flex items-center gap-4 font-medium'><FaLocationDot size={20}></FaLocationDot>{car.location}</h1></span>
                                                            <span className='mb-1'><h1 className=' font-medium'>{car.availability == "Available" ? (
                                                                <>
                                                                    <span className='flex items-center gap-2'><HiCheckCircle size={20} className='text-green-400'></HiCheckCircle>Available</span>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <span className='flex items-center gap-2'><HiMiniXCircle size={20} className='text-red-500'></HiMiniXCircle>Not Available</span>
                                                                </>
                                                            )}</h1></span>
                                                            <span className='mb-1 '><h1 className=' flex items-center gap-2 font-medium'><HiBookmark className='text-blue-400' size={20}></HiBookmark>BookingCount: {car.bookingCount}</h1></span>
                                                            <span>{car.description}</span>

                                                        </div>


                                                    </div>

                                                </div>
                                                <div className='w-[20%] flex justify-center '>
                                                    <Link to={`/carDetails/${car._id}`}>

                                                        <button className='btn ml-24'>Book Now</button>
                                                    </Link>
                                                </div>
                                            </div>

                                        </motion.div>
                                    </>
                                ))
                            }
                        </div>
                    </>
                )}

            </div>
        </>
    );
};

export default AvailableCars;