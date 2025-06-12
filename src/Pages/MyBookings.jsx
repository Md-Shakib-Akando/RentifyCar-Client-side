import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { MdCalendarMonth, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { format } from 'date-fns';

const MyBookings = () => {
    const { user,token } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
   
    
    useEffect(() => {
        if (user?.email&&token) {
            fetch(`http://localhost:3000/booking-cars?email=${user.email}`,{
                headers:{
                    authorization:`Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => setBookings(data))
                .catch(error => console.error('Error fetching bookings:', error));
        }
    }, [user,token]);

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
    const handleModifyModal = (book) => {
        setSelectedBooking(book);
        setStartDate(book.StartDate);
        setEndDate(book.EndDate);
        document.getElementById('modify-modal').showModal();
    };

    const handleConfirmModify = () => {


        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDiff = end - start;
        const dayCount = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const newTotal = dayCount * selectedBooking.pricePerDay;

        const formattedStart = format(start, 'dd-MM-yyyy HH:mm');
        const formattedEnd = format(end, 'dd-MM-yyyy HH:mm');

        fetch(`http://localhost:3000/booking-cars/${selectedBooking._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                StartDate: formattedStart,
                EndDate: formattedEnd ,
                totalPrice: newTotal
            })
        })
            .then(res => res.json())
            .then(updated => {
                if (updated.modifiedCount > 0) {
                    const updatedBookings = bookings.map(b =>
                        b._id === selectedBooking._id
                            ? { ...b, StartDate: formattedStart, EndDate: formattedEnd, totalPrice: newTotal }
                            : b
                    );
                    setBookings(updatedBookings);
                    Swal.fire('Updated!', 'Booking updated successfully.', 'success');
                    document.getElementById('modify-modal').close();
                }
            });
    };

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
                                <tr key={book._id} className="odd:bg-white even:bg-gray-100 hover:bg-orange-50 ">
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
                                            <button
                                                onClick={() => handleModifyModal(book)}
                                                className='btn bg-blue-400 text-white hover:bg-white hover:text-blue-400  '>
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


                <dialog id={'modify-modal'} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Modify Booking Dates</h3>

                        <div className="mb-3">
                            <label className="block mb-1">Start Date:</label>
                            <input
                                type="date"
                                className="border w-full p-2 rounded"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}

                            />
                        </div>
                        <div className="mb-3">
                            <label className="block mb-1">End Date:</label>
                            <input
                                type="date"
                                className="border w-full p-2 rounded"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>

                        <div className="modal-action">
                            <form method="dialog">

                                <button className="btn bg-gray-400 text-white">Cancel</button>
                            </form>
                            <Link><button onClick={handleConfirmModify} className='btn bg-orange-500 cursor-pointer hover:bg-orange-400 text-white'>Confirm</button></Link>
                        </div>
                    </div>
                </dialog>




            </div>
        </div>
    );
};

export default MyBookings;