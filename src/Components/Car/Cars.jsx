import React from 'react';
import { Link } from 'react-router';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { format } from 'date-fns';
const Cars = ({ car }) => {
    const { _id, createdAt, bookingCount,  imageUrl, availability, dailyRentalPrice, carModel } = car;
    const formattedDate = createdAt? format(new Date(createdAt), 'dd/MM/yyyy') : 'N/A';
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