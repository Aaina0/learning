
import React from 'react';
import Typed from 'react-typed'

export default function Banner() {
    return (
        <div className='bg-maroon w-full py-[50px]'>
            <div className='max-w-[1240px] mx-auto py-[100px] text-center font-bold'>
                <div className='text-xl md:text-3xl md:p-[24px]'>Learn with Us</div>
                <h2 className='text-white md:text-[80px] text-5xl md:p-[24px]'>Grow with us.</h2>
                <div className='text-[20px] md:text-[50px] text-white md:p-[24px]'>Learn <Typed
                    strings={['Web Development', 'Digital Marketing', 'Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                />
                </div>
                <button className='bg-yellow text-white p-3 rounded'>Get Started </button>
            </div>
        </div>
    )
}