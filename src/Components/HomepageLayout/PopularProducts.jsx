import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { PiCoffeeFill } from 'react-icons/pi';
import CoffeeContainer from './CoffeeContainer';
import NoCoffee from './NoCoffee';

const PopularProducts = () => {
    const [allCoffeeData, setAllCoffeeData] = useState(useLoaderData());

    return (
        <section className='py-32'
            style={{
                backgroundImage: `url('https://i.ibb.co/KxFbJSFf/4.png'), url('https://i.ibb.co/HfvnJ31j/5.png')`,
                backgroundPosition: 'top left, bottom right',
                backgroundSize: 'auto, auto',
                backgroundRepeat: 'no-repeat, no-repeat',
            }}
        >
            <div className='text-center space-y-4'>
                <p className='text-xl'>---Sip & Savor---</p>
                <h1 className='rancho-regular text-6xl text-primary text-shadow-md'>Our Popular Products</h1>
                <Link to='add-coffee'>
                    <button className='rancho-regular text-2xl btn shadow-none bg-[#E3B577] border-2 border-black hover:bg-transparent'>Add Coffee
                        <PiCoffeeFill />
                    </button>
                </Link>
            </div>


            {
                allCoffeeData.length === 0 ?
                    <NoCoffee></NoCoffee>
                    :
                    <CoffeeContainer allCoffeeData={allCoffeeData} setAllCoffeeData={setAllCoffeeData}></CoffeeContainer>
            }
        </section>
    );
};

export default PopularProducts;