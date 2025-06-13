import React, { useContext, useEffect, useState } from 'react';
import RegImg from '../../src/assets/Register/Animation - 1748787229109.json'
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../AuthContext';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser,googleLogIn, setUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
     useEffect(() => {
            document.title = 'RentifyCars | Register';
        }, [])
    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const formData = new FormData(form);
        const { name, photo, email, password } = Object.fromEntries(formData.entries());

        setError('');
        const Upass = /[A-Z]/.test(password);
        const Lpass = /[a-z]/.test(password);
        const Num = /\d/.test(password);
        const Length = password.length >= 6;
        if (!Upass) {
            setError("At least one Uppercase letter!");
            return;
        }
        if (!Lpass) {
            setError("At least one Lowercase letter!");
            return;
        }
        if (!Num) {
            setError("Password must contain at least one number!");
            return;
        }
        if (!Length) {
            setError('at least 6 characters password! ')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);


                updateProfile(result.user, { displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...result.user, displayName: name, photoURL: photo });
                        navigate(`${location.state ? location.state : '/'}`);
                        Swal.fire({

                            icon: "success",
                            title: "Your account is created",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    })
                    .catch(error => {
                        console.log(error.message)
                    });
            }).catch(error => {
                console.log(error.message)
            }).finally(() => setLoading(false));

    }
    const handleGoogleRegister=()=>{
            googleLogIn()
             .then(result => {
                    const user = result.user;
    
                    setUser(user)
                      navigate(`${location.state ? location.state : '/'}`);
                    Swal.fire({
    
                        icon: "success",
                        title: "LogIn successful.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                  
                }).catch(error => {
                    console.log(error)
                })
        }
    return (
        <div className="max-w-11/12 mx-auto min-h-[calc(100vh-454px)]  ">
            <div className="flex w-full min-h-[calc(100vh-454px)] items-center justify-center   shadow-lg rounded-lg overflow-hidden my-5 lg:my-0">

                <div className="hidden lg:block  w-1/2 relative">

                    <Lottie className=" h-[600px]" animationData={RegImg} loop={true}></Lottie>
                </div>


                <div className="w-full h-full mx-auto lg:w-1/2 p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-base-content mb-6">Create an Account</h3>

                    <form onSubmit={handleRegister} className="space-y-6">
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
                                placeholder="Enter your photo url"
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
                            {
                                error && <p className='text-sm text-red-500'>{error}</p>
                            }
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
                            onClick={handleGoogleRegister}
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