import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContext';
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import { MdEdit, MdDelete } from 'react-icons/md';

const MyCars = () => {
    const { user } = useContext(AuthContext);
    const [allCars, setAllCars] = useState([]);
    const [userCars, setUserCars] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [carId,setCarId]=useState(null);

    useEffect(() => {
        const url = sortOption
            ? `http://localhost:3000/sorted-cars?sort=${sortOption}`
            : `http://localhost:3000/cars`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllCars(data));
    }, [sortOption]);

    useEffect(() => {
        if (user?.email) {
            const filteredCars = allCars.filter(car => car.userEmail === user.email);
            setUserCars(filteredCars);
        }
    }, [allCars, user]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/cars/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "Your car has been deleted.", "success");
                            setUserCars(prev => prev.filter(car => car._id !== _id));
                        }
                    });
            }
        });
    };

    const handleUpdateCars = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCar = Object.fromEntries(formData.entries());

        fetch(`http://localhost:3000/cars/${carId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    document.getElementById(`modal-${carId}`).close();
                    Swal.fire({

                        icon: "success",
                        title: "Cars Update successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                     setAllCars(prev =>
                    prev.map(car =>
                        car._id === carId ? { ...car, ...updateCar } : car
                    )
                );
                }
            })


    }

    return (
        <div className='max-w-11/12 mx-auto'>
            <div className="p-4">
                {userCars.length === 0 ? (
                    <div className='flex flex-col justify-center items-center mt-24'>
                        <h1 className='text-3xl md:text-5xl font-bold mb-8'>No Cars Found!!</h1>
                        <p className='text-lg font-medium mb-6'>Go to Add Cars</p>
                        <Link to='/addCar'>
                            <button className='btn bg-orange-500 text-white hover:bg-amber-400'>Add Cars</button>
                        </Link>
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
                                <option value="" disabled>-- Select Sort Option --</option>
                                <option value="asc">Price (Lowest First)</option>
                                <option value="desc">Price (Highest First)</option>
                            </select>
                        </div>

                        <div className="overflow-x-auto min-h-[calc(100vh-144px)]">
                            <table className="min-w-full my-7 divide-y divide-gray-300">
                                <thead className="bg-base-300">
                                    <tr>
                                        <th className="px-6 py-7 text-start text-sm font-medium text-gray-500 uppercase tracking-wider">Car Image</th>
                                        <th className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Car Model</th>
                                        <th className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Daily Rental Price</th>
                                        <th className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Booking Count</th>
                                        <th className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Availability</th>
                                        <th className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
                                        <th className="px-6 py-7 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-base-200 divide-y divide-gray-200">
                                    {userCars.map((car) => {
                                        const {
                                            _id,
                                            carModel,
                                            dailyRentalPrice,
                                            bookingCount,
                                            availability,
                                            createdAt,
                                            imageUrl,

                                        } = car;

                                        const formattedDate = createdAt ? format(new Date(createdAt), 'dd/MM/yyyy') : 'N/A';

                                        return (

                                            <tr key={_id} className="hover:bg-base-100">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-16 w-16 rounded-full overflow-hidden">
                                                            <img
                                                                src={imageUrl}
                                                                alt={carModel}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">{carModel}</td>
                                                <td className="px-6 py-4 text-center">${dailyRentalPrice}</td>
                                                <td className="px-6 py-4 text-center">{bookingCount}</td>
                                                <td className="px-6 py-4 text-center">{availability === 'Available' ? "Yes" : "No"}</td>
                                                <td className="px-6 py-4 text-center">{formattedDate}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className="flex justify-center space-x-4">
                                                        <button
                                                            
                                                            onClick={() => {
                                                                setCarId(_id);
                                                                document.getElementById(`modal-${_id}`).showModal()
                                                            }}
                                                            className='btn text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'

                                                        >
                                                            <MdEdit size={24} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(_id)}
                                                            className='btn text-red-600 border-red-600 hover:bg-red-600 hover:text-white'
                                                        >
                                                            <MdDelete size={24} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>



                                        );

                                    })}
                                </tbody>
                            </table>

                            {userCars.map((car) => {
                                const {
                                    _id,
                                    carModel,
                                    dailyRentalPrice,

                                    availability,

                                    imageUrl,
                                    description,
                                    features,
                                    registrationNumber,

                                } = car;



                                return (

                                    <dialog key={_id} id={`modal-${_id}`} className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">

                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <div>
                                                <h1 className='text-3xl  text-center my-5'>Update Cars</h1>
                                            </div>
                                            <form onSubmit={handleUpdateCars} className="space-y-4">
                                                <div>
                                                    <label className="block mb-1">Car Model</label>
                                                    <input type="text" name="carModel" defaultValue={carModel} className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Enter car model" required />
                                                </div>

                                                <div>
                                                    <label className="block mb-1">Daily Rental Price</label>
                                                    <input type="number" name="dailyRentalPrice" defaultValue={dailyRentalPrice} className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Enter daily rental price" required />
                                                </div>

                                                <div >
                                                    <label className="block mb-1">Availability</label>
                                                    <select name="availability" defaultValue={availability} className=" w-full p-2 border border-gray-300 outline-0  rounded  ">
                                                        <option value="Available">Available</option>
                                                        <option value="Not Available">Not Available</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block mb-1">Vehicle Registration Number</label>
                                                    <input type="text" name="registrationNumber" defaultValue={registrationNumber} className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Enter vehicle registration number" required />
                                                </div>

                                                <div>
                                                    <label className="block mb-1">Features (e.g., GPS, AC, etc.)</label>
                                                    <input type="text" name="features" defaultValue={features} className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Enter features separated by commas" />
                                                </div>

                                                <div>
                                                    <label className="block mb-1">Description</label>
                                                    <textarea name="description" defaultValue={description} className="w-full p-2 border border-gray-300 outline-0  rounded" placeholder="Write a brief description..." rows="3"></textarea>
                                                </div>

                                                <div>
                                                    <label className="block mb-1">Image URL</label>
                                                    <input type="url" name="imageUrl" defaultValue={imageUrl} className="w-full p-2 border  border-gray-300 outline-0  rounded" placeholder="Enter image URL" />
                                                </div>

                                                <div>
                                                    <label className="block mb-1">Location</label>
                                                    <input type="text" name="location" defaultValue={location} className="w-full p-2 border  border-gray-300 outline-0 rounded" placeholder="Enter location" required />
                                                </div>


                                                <button
                                                    type="submit"
                                                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                                                >
                                                    Update
                                                </button>
                                            </form>
                                        </div>
                                    </dialog>



                                );

                            })}

                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MyCars;
