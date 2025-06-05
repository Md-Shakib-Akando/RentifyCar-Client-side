
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Cars from '../Components/Car/Cars';

const MyCars = () => {
    const cars = useLoaderData();
    return (
        <>
            <div className='max-w-11/12 mx-auto'>
                <div className="p-4">
                    {
                        cars && cars.length > 0 ? (
                            <>
                                <div className="flex items-center justify-end mt-8">
                                    <h1 className='text-xl font-semibold mr-5'>Sort by: </h1>
                                    <select


                                        className="select select-bordered"
                                    >
                                        <option value="" disabled>
                                            -- Select Sort Option --
                                        </option>
                                        <option value="careLevel">Price(Lowest First)</option>
                                        <option value="nextWatering">Price(Highest First)</option>
                                    </select>
                                </div>

                                <div className="overflow-x-auto min-h-[calc(100vh-144px)]">
                                    <table className="min-w-full my-7 divide-y  divide-gray-300">
                                        <thead className="bg-base-300  ">
                                            <tr >

                                                <th
                                                    scope="col"
                                                    className="px-6 py-7 text-start text-sm font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Car Image
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Car Model
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Daily Rental Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    bookingCount
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Availability
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Date Added
                                                </th>


                                                <th
                                                    scope="col"
                                                    className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        {cars.map((car) => <Cars key={car._id} car={car}></Cars>)}
                                    </table>
                                </div>
                            </>
                        ) : (
                            <div className='flex flex-col justify-center items-center mt-24'>
                                <h1 className='text-3xl '>No Cars Found!!</h1>
                                <Link to='/addCars'><button className='btn'>Add Cars</button></Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default MyCars;