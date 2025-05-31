import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer
            style={{
                backgroundImage: "url(https://i.ibb.co/fdwjhZVh/13.jpg)"
            }}
        >
            <div className='w-8/10 md:w-7/10 mx-auto pb-12 pt-30 space-y-14 lg:flex items-center gap-40'>
                <div className='flex-3 space-y-8'>
                    <div className='space-y-6'>
                        <img src="https://i.ibb.co/ZR3Wt9xz/logo1.png" alt="" className='h-24' />
                        <h1 className='text-5xl rancho-regular text-shadow-lg text-primary'>Expresso Emporium</h1>
                        <p className='text-xl'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    </div>
                    <div className='flex gap-4'>
                        <Link className="hover:text-secondary transition" to='https://www.facebook.com/'><FaFacebook size={40} /></Link>
                        <Link className="hover:text-secondary transition" to='https://www.x.com/'><FaTwitter size={40} /></Link>
                        <Link className="hover:text-secondary transition" to='https://www.instagram.com/'><FaInstagram size={40} /></Link>
                        <Link className="hover:text-secondary transition" to='https://www.linkedin.com/'><FaLinkedin size={40} /></Link>
                    </div>
                    <div className='space-y-8'>
                        <h1 className='text-5xl rancho-regular text-shadow-lg text-primary'>Get in Touch</h1>
                        <div className='text-xl space-y-4'>
                            <div className='flex gap-4'>
                                <FaPhoneAlt size={24} />
                                <p>+88 01533 333 333</p>
                            </div>
                            <div className='flex gap-4'>
                                <MdEmail size={24} />
                                <p>info@gmail.com</p>
                            </div>
                            <div className='flex gap-4'>
                                <FaLocationDot size={24} />
                                <p>72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-2'>
                    <h1 className='text-5xl rancho-regular text-shadow-lg text-primary'>Connect with Us</h1>

                    <form>
                        <div className='space-y-4 mt-8'>
                            <input type="text" className="input w-full" placeholder="Name" />
                            <input type="text" className="input w-full" placeholder="Email" />
                            <textarea className="textarea w-full h-30" placeholder="Message"></textarea>
                            <input type="submit" value="Send Message" className='btn rounded-full border-primary text-primary rancho-regular text-2xl hover:bg-primary hover:text-white' />
                        </div>

                    </form>
                </div>
            </div>

            <div
                style={{
                    backgroundImage: "url(https://i.ibb.co/XNd10d0/24.jpg)"
                }}
                className='py-3 text-center'
            >
                <small className='text-white text-xl rancho-regular'>Copyright Espresso Emporium ! All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;