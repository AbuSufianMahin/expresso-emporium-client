import React from 'react';
import CoffeeCard from './CoffeeCard';

const CoffeeContainer = ({ allCoffeeData, setAllCoffeeData }) => {
    return (
        <div className='w-9/10 lg:w-8/10 mx-auto'>
            
            <div className='my-12 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    allCoffeeData.map(coffeeData => <CoffeeCard key={coffeeData._id} allCoffeeData={allCoffeeData} setAllCoffeeData={setAllCoffeeData} coffeeData={coffeeData}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default CoffeeContainer;