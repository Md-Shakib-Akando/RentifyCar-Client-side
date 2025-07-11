import React, { useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import WhyChoose from '../Components/WhyChoose';
import RecentCars from './RecentCars';
import { useLoaderData } from 'react-router';
import OfferSection from '../Components/OfferSection';
import HowIsWork from '../Components/HowIsWork';
import Review from '../Components/Review';

const Home = () => {
    const latestCar = useLoaderData();
      useEffect(() => {
        document.title = 'RentifyCars | Home';
    }, [])
    return (
        <>
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <div className='max-w-11/12 mx-auto py-12'>
                <div>
                    <h1 className='text-3xl md:text-5xl font-bold text-center mt-7 mb-12'>RECENT CARS</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8'>
                    {
                        latestCar.map((car) => <RecentCars key={car._id} car={car}></RecentCars>)
                    }
                </div>
            </div>
            <HowIsWork></HowIsWork>
            <OfferSection></OfferSection>
            <Review></Review>

        </>
    );
};

export default Home;