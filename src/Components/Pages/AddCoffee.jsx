import React from 'react';
import { Link } from 'react-router';
import { IoArrowBack } from "react-icons/io5";
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const coffeeData = Object.fromEntries(formData.entries());

        console.log(coffeeData);


        // send data to server

        fetch('https://expresso-emporium-server-eight.vercel.app/coffees', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(coffeeData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Added Successfully",
                        icon: "success"
                    });

                    form.reset();
                }
            })
    }

    return (
        <section className='w-8/10 md:w-7/10 mx-auto pt-12 pb-30'>
            <Link to='/' className='flex w-fit items-center rancho-regular text-[#374151] text-shadow-md text-3xl hover:underline'> <IoArrowBack /> back to home</Link>

            <div className='py-20 px-30 bg-[#F4F3F0] mt-10'>
                <div className='space-y-5 px-28'>
                    <h1 className='text-5xl rancho-regular text-tertiary text-shadow-md text-center'>Add New Coffee</h1>
                    <p className='text-center px-'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <div>
                    <form onSubmit={handleAddCoffee}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Name</legend>
                                <input type="text" name="name" className="input w-full" placeholder="Enter Coffee Name" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Barista</legend>
                                <input type="text" name="barista" className="input w-full" placeholder="Enter Barista Name" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Price</legend>
                                <input type="text" name="price" className="input w-full" placeholder="Enter Supplier Name" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Taste</legend>
                                <input type="text" name="taste" className="input w-full" placeholder="Enter Coffee taste" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Category</legend>
                                <input type="text" name="category" className="input w-full" placeholder="Enter Coffee Category" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-semibold text-xl">Details</legend>
                                <input type="text" name="details" className="input w-full" placeholder="Enter Coffee Details" />
                            </fieldset>
                        </div>

                        <fieldset className="fieldset my-6">
                            <legend className="fieldset-legend font-semibold text-xl">Photo</legend>
                            <input type="text" name="photoURL" className="input w-full" placeholder="Enter PhotoURL" />
                        </fieldset>


                        <input type="submit" className="btn w-full rancho-regular text-2xl shadow-none bg-[#E3B577] border-2 border-black hover:bg-transparent" value="Add Coffee" />

                    </form>
                </div>
            </div>

        </section>
    );
};

export default AddCoffee;