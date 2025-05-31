import React from 'react';
import icon1 from '../../assets/images/icons/1.png';
import icon2 from '../../assets/images/icons/2.png';
import icon3 from '../../assets/images/icons/3.png';
import icon4 from '../../assets/images/icons/4.png';

const FeaturesSection = () => {
    return (
        <section className='bg-[#ECEAE3]'>

            <div className='w-8/10 md:w-7/10 mx-auto py-14 grid grid-cols-4 gap-10'>

                <div className='space-y-2'>
                    <img src={icon1} alt="" />
                    <div>
                        <h1 className='text-4xl rancho-regular'>Awesome Aroma</h1>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                </div>
                <div className='space-y-2'>
                    <img src={icon2} alt="" />
                    <div>
                        <h1 className='text-4xl rancho-regular'>High Quality</h1>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                </div>
                <div className='space-y-2'>
                    <img src={icon3} alt="" />
                    <div>
                        <h1 className='text-4xl rancho-regular'>Pure Grades</h1>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                </div>
                <div className='space-y-2'>
                    <img src={icon4} alt="" />
                    <div>
                        <h1 className='text-4xl rancho-regular'>Proper Roasting</h1>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;