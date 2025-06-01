import React from 'react';
import { FaPen } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ allCoffeeData, setAllCoffeeData, coffeeData }) => {


    const handleDeleteCoffee = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://expresso-emporium-server-eight.vercel.app/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("Data after deletion - ", data);
                    })

                const remainingCoffee = allCoffeeData.filter(coffee => coffee._id !== id)
                setAllCoffeeData(remainingCoffee)


                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    const { _id, name, photoURL, price, barista } = coffeeData;
    return (
        <div className='bg-[#F5F4F195] p-10 flex items-center justify-between rounded-xl'>
            <div className='flex flex-4 items-center md:gap-10'>
                <div className=''>
                    <img src={photoURL} alt="" className='w-2/3 md:w-full mx-auto' />
                </div>
                <div className='md:text-xl space-y-2'>
                    <h1><span className='font-bold'>Name: </span> {name}</h1>
                    <p><span className='font-bold'>Barista: </span> {barista}</p>
                    <p><span className='font-bold'>Price: </span> {price} taka</p>
                </div>
            </div>
            <div className='flex items-center flex-1 flex-col space-y-2 '>
                <Link to={`/coffee-details/${_id}`}>
                    <button className='btn btn-sm md:btn-md bg-secondary text-white'>
                        <IoMdEye size={20} />
                    </button>
                </Link>
                <Link to={`/edit-coffee/${_id}`}>
                    <button className='btn btn-sm md:btn-md bg-[#3C393B] text-white'>
                        <FaPen size={20} />
                    </button>
                </Link>

                <button onClick={() => handleDeleteCoffee(_id)} className='btn btn-sm md:btn-md bg-[#EA4744] text-white'>
                    <MdDelete size={20} />
                </button>

            </div>
        </div>
    );
};

export default CoffeeCard;