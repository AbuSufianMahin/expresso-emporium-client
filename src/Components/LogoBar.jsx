import React from 'react';

const LogoBar = () => {
    return (
        
        <nav style={{backgroundImage: "url(https://i.ibb.co/0jyXt6M8/15.jpg)"}} className='py-4'>

            <div className='flex items-center justify-center gap-2'>
                <img src="https://i.ibb.co/ZR3Wt9xz/logo1.png" alt="" className='h-24' />
                <h1 className='text-white text-6xl rancho-regular'>Expresso Emporium</h1>
            </div>

        </nav>
    );
};

export default LogoBar;