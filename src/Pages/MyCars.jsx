
import React, { useContext, useEffect, useState } from 'react';
import { Link} from 'react-router';
import Cars from '../Components/Car/Cars';
import { AuthContext } from '../AuthContext';

const MyCars = () => {
    const {user}=useContext(AuthContext);
    
    const [allCars, setAllCars] = useState([]);
    const [userCars, setUserCars] = useState([]);
    const [sortOption, setSortOption] = useState('');
    
    useEffect(() => {
        const url = sortOption
            ? `http://localhost:3000/sorted-cars?sort=${sortOption}`
            : `http://localhost:3000/cars`;
        
        fetch(url)
            .then((res) => res.json())
            .then((data) =>  setAllCars(data))
            
    }, [sortOption]);

    useEffect(() => {
        if (user?.email ) {
            const filteredCars = allCars.filter(car => car.userEmail === user.email);
            setUserCars(filteredCars);
            
        }
    }, [allCars, user]);
    return (
        <>
            <div className='max-w-11/12 mx-auto'>
                <div className="p-4">
                    {
                        userCars.length === 0 ? (
                            <div className='flex flex-col justify-center items-center mt-24'>
                                <h1 className='text-3xl md:text-5xl font-bold mb-8'>No Cars Found!!</h1>
                                <p className='text-lg font-medium mb-6'>Go to Add Cars</p>
                                <Link to='/addCar'><button className='btn bg-orange-500 text-white hover:bg-amber-400'>Add Cars</button></Link>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center justify-end mt-8">
                                    <h1 className='text-xl font-semibold mr-5'>Sort by: </h1>
                                    <select
                                        value={sortOption}
                                        onChange={(e) => setSortOption(e.target.value)}

                                        className="select select-bordered"
                                    >
                                        <option value="" disabled>
                                            -- Select Sort Option --
                                        </option>
                                        <option value="asc">Price(Lowest First)</option>
                                        <option value="desc">Price(Highest First)</option>
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
                                        {userCars.map((car) => <Cars key={car._id} car={car} onDelete={(id) => setUserCars(prev => prev.filter(cr => cr._id !== id))}></Cars>)}
                                    </table>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default MyCars;