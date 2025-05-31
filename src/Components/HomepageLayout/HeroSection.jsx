import React from 'react';

const HeroSection = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/mFr1ff4N/6.jpg)",
            }}
        >
            <div className="hero-content justify-start mx-4 text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-7xl rancho-regular">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="mb-5 text-2xl">
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <button className="rancho-regular text-2xl btn btn-lg shadow-none bg-[#E3B577] border-2 border-black hover:bg-transparent hover:text-white hover:border-white">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;