import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import Swal from 'sweetalert2';

const AddCar = () => {
    const { user } = useContext(AuthContext)
     useEffect(() => {
            document.title = 'RentifyCars | AddCar';
        }, [])
    const handleAddCars = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const carData = Object.fromEntries(formData.entries());

        const fullData = {
            ...carData,
            userName: user.displayName,
            userEmail: user.email,
            bookingCount: 0,
            bookingStatus: 'confirmed',


        };
        fetch('https://rentify-cars-server-side.vercel.app/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fullData),
        })
         .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Car Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Failed to Add Car',
          text: 'Please try again later.',
        });
      });


    }
    return (
        <>
            <div className='bg-orange-50'>
                <div className='  max-w-11/12 mx-auto min-h-[calc(100vh-845px)] py-10'>
                    <div className="max-w-xl md:max-w-2xl xl:max-w-6xl mx-auto  bg-blue-50 p-8 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold text-center mb-6">Add New Car</h2>
                        <form onSubmit={handleAddCars} className="space-y-4">
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
                                <input type="text" name="features" className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Enter features separated by commas" required />
                            </div>

                            <div>
                                <label className="block mb-1">Description</label>
                                <textarea name="description" className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Write a brief description..." required rows="3"></textarea>
                            </div>

                            <div>
                                <label className="block mb-1">Image URL</label>
                                <input type="url" name="imageUrl" className="w-full p-2 border  border-gray-300 outline-0  rounded" placeholder="Enter image URL" required />
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