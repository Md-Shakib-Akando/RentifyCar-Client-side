 import Lottie from 'lottie-react';
import React, { useContext, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import logImg from '../../src/assets/Login/Animation - 1749031514792.json'
import { AuthContext } from '../AuthContext';
import Swal from 'sweetalert2';
 const Login = () => {
    const {logIn,googleLogIn,setUser,setLoading}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const handleLogIn=e=>{
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form);
        
        const { email, password } = Object.fromEntries(formData.entries());
        logIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({

                    icon: "success",
                    title: "LogIn successful.",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(`${location.state ? location.state : '/'}`);
            }).catch(error => {
                console.error(error);

                Swal.fire({

                    icon: "error",
                    title: "Oops...",
                    text: "Invalid email or password",

                    showConfirmButton: false,
                    timer: 1500
                });
            }).finally(() => setLoading(false));
    }

    const handleGoogleLogIn=()=>{
        googleLogIn()
         .then(result => {
                console.log(result)
                
                
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
     useEffect(() => {
            document.title = 'RentifyCars | LogIn';
        }, [])

    return (
        <div className=" max-w-11/12 mx-auto min-h-[calc(100vh-454px)] ">
                <div className="flex min-h-[calc(100vh-454px)]  w-full items-center justify-center   shadow-lg rounded-lg overflow-hidden my-5 lg:my-0 ">

                    <div className="hidden lg:block w-1/2 relative">
                       
                        <Lottie  animationData={logImg} loop={false}></Lottie>

                    </div>


                    <div className="w-full h-full mx-auto lg:w-1/2 p-8 md:p-12">
                        <h3 className="text-3xl  font-bold text-base-content mb-8">Log In</h3>

                        <form onSubmit={handleLogIn} className="space-y-6">


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
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember-me"
                                        className="h-4 w-4 cursor-pointer text-orange-500 focus:ring-orange-500  border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-base-content"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    
                                    className="text-sm cursor-pointer text-orange-500 hover:text-orange-500 "
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full cursor-pointer bg-orange-500  text-white py-3 rounded-lg hover:bg-orange-400 "
                            >
                                Sign In
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
                                onClick={handleGoogleLogIn}
                                className="flex  w-full items-center justify-center px-4 py-3 border border-orange-500  text-orange-500  rounded-lg hover:bg-orange-500  cursor-pointer hover:text-white !rounded-button whitespace-nowrap"
                            >
                                <FcGoogle size={32} className='mr-5'></FcGoogle>
                                Google
                            </button>


                            <div className="text-center mt-4">
                                <p className="text-lg">
                                    Don't have an account?{" "}
                                    <Link to="/register" className="text-orange-500 hover:underline">
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
 };
 
 export default Login;