import React from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { PiCoffeeFill } from 'react-icons/pi';

const PopularProducts = () => {
    const allCoffeeData = useLoaderData();

    return (
        <section className='py-32'
            style={{
                backgroundImage: `url('https://i.ibb.co/KxFbJSFf/4.png'), url('https://i.ibb.co/HfvnJ31j/5.png')`,
                backgroundPosition: 'top left, bottom right',
                backgroundSize: 'auto, auto',
                backgroundRepeat: 'no-repeat, no-repeat',
            }}
        >
            <div className='w-9/10 lg:w-8/10 mx-auto'>
                <div className='text-center space-y-4'>
                    <p className='text-xl'>---Sip & Savor---</p>
                    <h1 className='rancho-regular text-6xl text-primary text-shadow-md'>Our Popular Products</h1>
                    <Link to='add-coffee'>
                        <button className='rancho-regular text-2xl btn shadow-none bg-[#E3B577] border-2 border-black hover:bg-transparent'>Add Coffee
                            <PiCoffeeFill />
                        </button>
                    </Link>
                </div>


                <div className='my-12 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {
                        allCoffeeData.map(coffeeData => <CoffeeCard key={coffeeData._id} coffeeData={coffeeData}></CoffeeCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;