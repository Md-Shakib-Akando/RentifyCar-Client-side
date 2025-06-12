
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
const OfferSection = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/cars')
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(
                    (car) => car.dailyRentalPrice < 100 || (car.dailyRentalPrice >= 100 && car.dailyRentalPrice < 160)
                );
                setOffers(filtered.slice(0, 3));
            })
            .catch((err) => console.log(err));
    }, []);

    const getDiscountLabel = (price) => {
        if (price == 99) return 'HOLIDAY DEAL';
        if (price <= 130) return '15% OFF';
        if (price < 160) return '25% OFF';
        return '';
    };


    const getDescription = (price) => {

        if (price == 99) return 'Luxury cars at $99/day this holiday season! Experience premium driving at an unbeatable price.';
        if (price <= 130) return 'Get 15% off on all weekend rentals. Valid Friday through Sunday.Minimum 2-day rental required.';
        if (price < 160) return 'Get 25% off on all weekend rentals. Valid Friday through Sunday.Minimum 4-day rental required.';
        return '';
    };

    return (
        <>
            <div className='max-w-11/12 mx-auto my-7'>

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl relative inline-block">
                        Special Offers
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Take advantage of our limited-time deals and save on your next car
                        rental.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {offers.map((car) => (
                        <motion.div
                            key={car._id}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: 'spring', stiffness: 100, duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}

                            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer  transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className=" overflow-hidden">
                                <img
                                    src={car.imageUrl}
                                    alt='car'
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
                                    {getDiscountLabel(car.dailyRentalPrice)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{car.dailyRentalPrice < 100 ? 'Luxury Experience' : 'Weekend Special'}</h3>
                                <p className="text-gray-600 mb-4">{getDescription(car.dailyRentalPrice)}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-900 font-bold">From ${car.dailyRentalPrice}/day</p>
                                    <Link to={`/carDetails/${car._id}`}>
                                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300 cursor-pointer">
                                        Book Now
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OfferSection;
