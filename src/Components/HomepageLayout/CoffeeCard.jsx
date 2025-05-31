import React from 'react';
import { FaPen } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router';

const CoffeeCard = ({ coffeeData }) => {


    const {_id, name, photoURL, price, barista } = coffeeData;
    return (
        <div className='bg-[#F5F4F195] p-10 flex items-center justify-between rounded-xl'>
            <div className='flex flex-4 items-center md:gap-10'>
                <div className=''>
                    <img src={photoURL} alt="" className='w-2/3 md:w-full mx-auto'/>
                </div>
                <div className='md:text-xl space-y-2'>
                    <h1><span className='font-bold'>Name: </span> {name}</h1>
                    <p><span className='font-bold'>Barista: </span> {barista}</p>
                    <p><span className='font-bold'>Price: </span> {price}</p>
                </div>
            </div>
            <div className='flex items-center flex-1 flex-col space-y-2 '>
                <Link to={`/coffee-details/${_id}`}>
                    <button className='btn btn-sm md:btn-md bg-secondary text-white'>
                        <IoMdEye size={20} />
                    </button>
                </Link>
                <Link>
                    <button className='btn btn-sm md:btn-md bg-[#3C393B] text-white'>
                        <FaPen size={20} />
                    </button>
                </Link>
                <Link>
                    <button className='btn btn-sm md:btn-md bg-[#EA4744] text-white'>
                        <MdDelete size={20} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CoffeeCard;