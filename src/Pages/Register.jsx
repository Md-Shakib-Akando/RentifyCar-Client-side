import React from 'react';
import RegImg from '../../src/assets/Register/Animation - 1748787229109.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
const Register = () => {
    return (
        <div className="max-w-11/12 mx-auto min-h-[calc(100vh-454px)]  ">
            <div className="flex w-full min-h-[calc(100vh-454px)] items-center justify-center   shadow-lg rounded-lg overflow-hidden my-5 lg:my-0">

                <div className="hidden lg:block  w-1/2 relative">

                    <Lottie className=" h-[600px]" animationData={RegImg} loop={true}></Lottie>
                </div>


                <div className="w-full h-full mx-auto lg:w-1/2 p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-base-content mb-6">Create an Account</h3>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm mb-2">Full Name</label>
                            <input
                                type="text"
                                name='name'
                                className="w-full px-4 py-3 border rounded-lg"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Photo URL</label>
                            <input
                                type="text"
                                name='photo'
                                className="w-full px-4 py-3 border rounded-lg"
                                placeholder="Enter your phot url"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Email Address</label>
                            <input
                                type="email"
                                name='email'
                                className="w-full px-4 py-3 border rounded-lg"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Password</label>
                            <input
                                type="password"
                                name='password'
                                className="w-full px-4 py-3 border rounded-lg"
                                placeholder="Enter a strong password"
                                required
                            />
                        </div>
                        <div>

                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                        >
                            Create Account
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"

                            className="flex  w-full items-center justify-center px-4 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 cursor-pointer hover:text-white !rounded-button whitespace-nowrap"
                        >
                            <FcGoogle size={32} className='mr-5'></FcGoogle>
                            Google
                        </button>



                        <div className="text-center mt-4">
                            <p className="text-lg">
                                Already have an account?{" "}
                                <Link to="/login" className="text-orange-500 hover:underline">
                                    Log In
                                </Link>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;