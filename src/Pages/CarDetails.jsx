import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const CarDetails = () => {
    const data = useLoaderData();
    const { _id } = useParams();
    const details = data.find((singleData) => singleData._id.toString() === _id);
    const { imageUrl, description, features, availability, dailyRentalPrice, carModel } = details;
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    const handleDateChange = (start, end) => {
        setStartDate(start);
        setEndDate(end);

        if (start && end) {
            const startObj = new Date(start);
            const endObj = new Date(end);
            const timeDiff = endObj - startObj;
            const dayCount = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            if (dayCount > 0) {
                setTotalPrice(dayCount * dailyRentalPrice);
            } else {
                setTotalPrice(0);
            }
        }
        else {
        setTotalPrice(0); 
    }
    };

    return (
        <div className='max-w-11/12 min-h-[calc(100vh-438px)] mx-auto py-8'>
            <div className='flex flex-col xl:flex-row items-center gap-2 xl:gap-10'>
                <div className='xl:w-[50%]'>
                    <img className='rounded-lg ' src={imageUrl} alt="" />
                </div>
                <div className='xl:w-[50%]'>
                    <h1 className='text-3xl font-bold mb-5 mt-3 xl:mt-0'>{carModel}</h1>
                    <p className='text-sm md:text-lg font-medium mb-5'>Price Per day : ${dailyRentalPrice}</p>
                    <p className='mb-5 text-lg'>Availability : {availability === "Available" ? <span className='bg-green-500 text-white p-2 rounded-lg'>Available</span> : <span className='bg-red-500 text-white p-2 rounded-lg'>Not Available</span>}</p>
                    <p className='text-lg font-semibold mb-2'>Features :</p>
                    <p className='mb-3'>{features}</p>
                    <p className='text-lg font-semibold mv-2'>Description: </p>
                    <p>{description}</p>
                    <div className='mt-5'>
                        <Link>
                            <button onClick={() => document.getElementById(`modal-${_id}`).showModal()} className='btn w-full'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>

            <dialog id={`modal-${_id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Booking Confirmation</h3>
                    <p className="py-4">You are booking : <span className='font-semibold'>{carModel}</span></p>
                    <p className="pb-4">Price Per day : ${dailyRentalPrice}</p>
                    <p className="pb-4">Availability : {availability === "Available" ? <span >Available</span> : <span >Not Available</span>}</p>
                    <div className="mb-3">
                        <label className="block mb-1">Start Date:</label>
                        <input
                            type="date"
                            className="border w-full p-2 rounded"

                            value={startDate}
                            onChange={(e) => handleDateChange(e.target.value, endDate)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-1">End Date:</label>
                        <input
                            type="date"
                            className="border w-full p-2 rounded"
                            value={endDate}
                            onChange={(e) => handleDateChange(startDate, e.target.value)}
                        />
                    </div>
                    <div className="font-semibold text-lg mb-4">
                         Total Price: ${totalPrice > 0 ? totalPrice : 0}
                    </div>
                    <div className="modal-action">
                        <form method="dialog">

                            <button className="btn bg-gray-400 text-white">Cancel</button>
                        </form>
                        <Link><button className='btn bg-orange-500 cursor-pointer hover:bg-orange-400 text-white'>Confirm Booking</button></Link>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default CarDetails;