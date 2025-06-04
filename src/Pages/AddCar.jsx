import React from 'react';

const AddCar = () => {
    return (
        <>
            <div className='bg-orange-50'>
                <div className='  max-w-11/12 mx-auto min-h-[calc(100vh-845px)] py-10'>
                    <div className="max-w-xl md:max-w-2xl xl:max-w-6xl mx-auto  bg-blue-50 p-8 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold text-center mb-6">Add New Car</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1">Car Model</label>
                                <input type="text" name="carModel" className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Enter car model" required />
                            </div>

                            <div>
                                <label className="block mb-1">Daily Rental Price</label>
                                <input type="number" name="dailyRentalPrice" className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Enter daily rental price" required />
                            </div>

                            <div >
                                <label className="block mb-1">Availability</label>
                                <select name="availability" className=" w-full p-2 border border-gray-300 outline-0  rounded  ">
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1">Vehicle Registration Number</label>
                                <input type="text" name="registrationNumber" className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Enter vehicle registration number" required />
                            </div>

                            <div>
                                <label className="block mb-1">Features (e.g., GPS, AC, etc.)</label>
                                <input type="text" name="features" className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Enter features separated by commas" />
                            </div>

                            <div>
                                <label className="block mb-1">Description</label>
                                <textarea name="description" className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Write a brief description..." rows="3"></textarea>
                            </div>

                            <div>
                                <label className="block mb-1">Image URL</label>
                                <input type="url" name="imageUrl" className="w-full p-2 border  border-gray-300 outline-0  rounded" placeholder="Enter image URL" />
                            </div>

                            <div>
                                <label className="block mb-1">Location</label>
                                <input type="text" name="location" className="w-full p-2 border  border-gray-300 outline-0 rounded" placeholder="Enter location" required />
                            </div>

                            
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                            >
                               Add Car
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCar;