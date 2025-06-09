import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { MdCalendarMonth, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/booking-cars?email=${user.email}`)
                .then(res => res.json())
                .then(data => setBookings(data))
                .catch(error => console.error('Error fetching bookings:', error));
        }
    }, [user]);

    const handleCancel = (id) => {

        Swal.fire({
            title: "Are you sure you want to cancel this booking?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/booking-cars/${id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: 'Canceled' })
                })
                    .then(res => res.json())
                    .then(updated => {
                        if (updated.modifiedCount > 0) {
                            const updatedBookings = bookings.map(b =>
                                b._id === id ? { ...b, status: 'Canceled' } : b
                            );
                            setBookings(updatedBookings);

                            Swal.fire({
                                title: 'Canceled!',
                                text: 'Your booking has been canceled.',
                                icon: 'success',
                                timer: 1500,
                                showConfirmButton: false
                            });
                        }
                    });

            }
        });

    }

    return (
        <div className='max-w-11/12 mx-auto'>
            <div className="overflow-x-auto min-h-[calc(100vh-144px)]">
                <table className="min-w-full my-7 divide-y divide-gray-300">
                    <thead className="bg-base-300">
                        <tr className=" bg-gray-200">
                            <th className="px-6 py-7 text-start text-sm font-bold  uppercase tracking-wider">Car Image</th>
                            <th className="px-6 py-7 text-center text-sm font-bold  uppercase tracking-wider">Car Model</th>
                            <th className="px-6 py-7 text-center text-sm font-bold  uppercase tracking-wider">Booking Date</th>
                            <th className="px-6 py-7 text-center text-sm font-bold  uppercase tracking-wider">Start Date</th>
                            <th className="px-6 py-7 text-center text-sm font-bold  uppercase tracking-wider">End Date</th>
                            <th className="px-6 py-7 text-center text-sm font-bold  uppercase tracking-wider">Total Price</th>
                            <th className="px-6 py-7 text-center text-sm font-bold  uppercase tracking-wider">Booking Status</th>
                            <th className="px-6 py-7 text-center text-sm font-bold  uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-base-200 divide-y divide-gray-200">


                        {
                            bookings.map(book => (
                                <tr className="odd:bg-white even:bg-gray-100 odd:hover:bg-gray-100 even:hover:bg-white ">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-16 w-16 rounded-full overflow-hidden">
                                                <img
                                                    src={book.imageUrl}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">{book.carModel}</td>
                                    <td className="px-6 py-4 text-center">{book.bookingDate}</td>
                                    <td className="px-6 py-4 text-center">{book.StartDate}</td>

                                    <td className="px-6 py-4 text-center">{book.EndDate}</td>
                                    <td className="px-6 py-4 text-center">${book.totalPrice}</td>
                                    <td className="px-6 py-4 text-center ">
                                        <p className={`${book.status === 'Canceled'
                                                ? 'bg-red-300 w-fit px-1 rounded-md mx-auto'
                                                : 'bg-green-300 w-fit px-1 rounded-md mx-auto '
                                            }`}>{book.status}</p>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex justify-center space-x-4">
                                            <button className='btn bg-blue-400 text-white hover:bg-white hover:text-blue-400  '>
                                                <MdCalendarMonth size={24}></MdCalendarMonth>
                                                Modify
                                            </button>
                                            <button onClick={() => handleCancel(book._id)} className='btn bg-red-400 text-white hover:bg-white hover:text-red-400 '>
                                                <MdDelete size={24}></MdDelete>
                                                Cancel
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                            ))
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;