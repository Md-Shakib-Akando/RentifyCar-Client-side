import React from 'react';
import { Link } from 'react-router';
import BannerImg from '../../assets/cars/BannerImg.jpg'
const Banner = () => {
    return (
        <section className="relative h-[50vh] md:h-[90vh] w-full overflow-hidden">
           
            <div className="absolute inset-0 bg-[rgba(21,43,59,0.7)] z-10 "></div>

            
            <img
                src={BannerImg}
                alt="Luxury car on coastal road"
                className="absolute inset-0 w-full h-full object-cover object-center "
            />

           
            <div className="relative z-90 container mx-auto px-6 h-full flex items-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-xl md:text-4xl  lg:text-6xl font-bold text-white drop-shadow-lg mb-6">
                        Drive Your Dreams Today!
                    </h1>
                    
                    <div className='w-fit mx-auto mt-8'>
                        <Link
                        to='/availableCars'
                        className="  bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-semibold text-sm md:text-lg px-5 md:px-8 py-3 rounded-lg shadow-xl transition duration-300 hover:scale-105"
                    >
                        View Available Cars
                    </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;