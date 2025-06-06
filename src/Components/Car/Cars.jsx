import React from 'react';
import { Link } from 'react-router';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { format } from 'date-fns';
import Swal from 'sweetalert2';
const Cars = ({ car,onDelete }) => {
    const { _id, createdAt, bookingCount,  imageUrl, availability, dailyRentalPrice, carModel } = car;
    const formattedDate = createdAt? format(new Date(createdAt), 'dd/MM/yyyy') : 'N/A';

    const handleDelete=(_id)=>{
        console.log(_id)
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
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your plant has been deleted.",
                                icon: "success"
                            });
                            if(onDelete){
                                onDelete(_id)
                            }
                        }
                        
                    })

            }
        });
    }
    return (
        <tbody className="bg-base-200 divide-y divide-gray-200">

            <tr key={_id} className="hover:bg-base-100">
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-16 rounded-full overflow-hidden">
                            <img
                                src={imageUrl}
                                alt=''
                                className="h-full w-full  object-cover"
                            />
                        </div>
                       
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                    
                        { carModel}
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                    ${dailyRentalPrice}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm ">
                    {bookingCount}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm ">
                    {availability ? "Yes" : "No"}
                </td>
               
                <td className="px-6 py-4 text-center whitespace-nowrap">
                    {formattedDate}
                </td>

                <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
                    <div className=" space-x-4 ">
                        <Link>
                            <button className='btn text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white '>
                                <MdEdit size={24} />

                            </button>
                        </Link>
                        <Link>
                            <button
                                onClick={()=>handleDelete(_id)}
                                className='btn text-red-600 border-red-600 hover:bg-red-600 hover:text-white cursor-pointer'>
                                <MdDelete size={24} />

                            </button>
                        </Link>
                    </div>


                </td>
            </tr>

        </tbody>
    );
};

export default Cars;