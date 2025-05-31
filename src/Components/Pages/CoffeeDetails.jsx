import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffeeData = useLoaderData();
    const { name, price, barista, taste, category, details, photoURL } = coffeeData;

    return (
        <section
            className='w-8/10 md:w-7/10 mx-auto pt-12 pb-30'
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/YFfY4B8D/11.png)",
            }}
        >
            <Link to='/' className='flex w-fit items-center rancho-regular text-[#374151] text-shadow-md text-3xl hover:underline'> <IoArrowBack /> back to home</Link>


            <div className="hero lg:justify-start p-5 md:py-10 md:px-20 lg:py-20 lg:px-40 bg-[#F4F3F090] mt-10 rounded-2xl shadow-sm">
                <div className="hero-content gap-5 lg:gap-10 xl:gap-20 flex-col lg:flex-row">
                    <img
                        src={photoURL}
                        className="rounded-lg"
                    />
                    <div>
                        <h1 className="text-center md:text-start text-4xl font-bold rancho-regular text-primary text-shadow-md">{name}</h1>
                        <div className='text-xl mt-8 space-y-2'>
                            <p><span className='font-semibold'>Barista: </span>{barista}</p>
                            <p><span className='font-semibold'>Price: </span>{price} taka</p>
                            <p><span className='font-semibold'>Taste: </span>{taste}</p>
                            <p><span className='font-semibold'>Category: </span>{category}</p>
                            <p><span className='font-semibold'>Details: </span>{details}</p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoffeeDetails;