import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const EditCoffee = () => {

    const coffeeData = useLoaderData();

    const { _id, name, barista, price, taste, category, details, photoURL } = coffeeData;

    const handleEditCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedData = Object.fromEntries(formData.entries());

        // console.log(updatedData)

        //send the updated data to server

        fetch(`https://expresso-emporium-server-eta.vercel.app/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Data after update : ", data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Updated",
                        text: "Updated coffee data successfully!",
                        icon: "success"
                    });
                }
            })

    }

    return (
        <section className='w-8/10 md:w-7/10 mx-auto pt-12 pb-30'>
            <Link to='/' className='flex w-fit items-center rancho-regular text-[#374151] text-shadow-md text-3xl hover:underline'> <IoArrowBack /> back to home</Link>

            <div className='py-20 px-30 bg-[#F4F3F0] mt-10'>
                <div className='space-y-5 px-28'>
                    <h1 className='text-5xl rancho-regular text-tertiary text-shadow-md text-center'>Edit Information</h1>
                </div>

                <div className='mt-10'>
                    <form onSubmit={handleEditCoffee}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Name</legend>
                                <input defaultValue={name} type="text" name="name" className="input w-full" placeholder="Enter Coffee Name" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Barista</legend>
                                <input defaultValue={barista} type="text" name="barista" className="input w-full" placeholder="Enter Barista Name" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Price</legend>
                                <input defaultValue={price} type="text" name="price" className="input w-full" placeholder="Enter Supplier Name" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Taste</legend>
                                <input defaultValue={taste} type="text" name="taste" className="input w-full" placeholder="Enter Coffee taste" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Category</legend>
                                <input defaultValue={category} type="text" name="category" className="input w-full" placeholder="Enter Coffee Category" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Details</legend>
                                <input defaultValue={details} type="text" name="details" className="input w-full" placeholder="Enter Coffee Details" />
                            </fieldset>
                        </div>

                        <fieldset className="fieldset my-6">
                            <legend className="fieldset-legend font-semibold text-xl">Photo</legend>
                            <input defaultValue={photoURL} type="text" name="photoURL" className="input w-full" placeholder="Enter PhotoURL" />
                        </fieldset>


                        <input type="submit" className="btn w-full rancho-regular text-2xl shadow-none bg-[#E3B577] border-2 border-black hover:bg-transparent" value="Add Coffee" />

                    </form>
                </div>
            </div>

        </section>
    );
};

export default EditCoffee;