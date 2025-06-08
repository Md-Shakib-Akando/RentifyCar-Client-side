import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const CarDetails = () => {
    const data = useLoaderData();
    const { _id } = useParams();
    const details = data.find((singleData) => singleData._id.toString() === _id);
    const {imageUrl,description,features, availability,dailyRentalPrice,carModel}=details
    return (
        <div className='max-w-11/12 min-h-[calc(100vh-438px)] mx-auto py-8'>
            <div className='flex flex-col xl:flex-row items-center gap-2 xl:gap-10'>
                <div className='xl:w-[50%]'>
                    <img className='rounded-lg ' src={imageUrl} alt="" />
                </div>
                <div className='xl:w-[50%]'>
                    <h1 className='text-3xl font-bold mb-5 mt-3 xl:mt-0'>{carModel}</h1>
                    <p className='text-sm md:text-lg font-medium mb-5'>Price Per day : ${dailyRentalPrice}</p>
                    <p className='mb-5 text-lg'>Availability : {availability==="Available"?<span className='bg-green-500 text-white p-2 rounded-lg'>Available</span>:<span className='bg-red-500 text-white p-2 rounded-lg'>Not Available</span>}</p>
                    <p className='text-lg font-semibold mb-2'>Features :</p>
                    <p className='mb-3'>{features}</p>
                    <p className='text-lg font-semibold mv-2'>Description: </p>
                    <p>{description}</p>
                    <div className='mt-5'>
                        <Link>
                        <button className='btn w-full'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
           
            
        </div>
    );
};

export default CarDetails;