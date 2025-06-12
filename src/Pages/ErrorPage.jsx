import React from 'react';
import ErrorImg from '../../src/assets/cars/error.png'
import { Link } from 'react-router';
import { FaHome } from 'react-icons/fa';
const ErrorPage = () => {
    return (
           <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src={ErrorImg}
              alt="404 "
              className="w-full h-auto rounded-xl shadow-lg mb-8"
            />
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          
          <Link to='/' className='flex justify-center'>
          
          <button
            
            className=" flex gap-1  bg-white border border-indigo-600 text-indigo-600 px-6 py-2  whitespace-nowrap cursor-pointer font-medium text-base transition-all duration-200 hover:bg-indigo-200"
          >
            <FaHome size={24}></FaHome>
            
            Home
          </button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;