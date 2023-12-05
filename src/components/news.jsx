
import React from 'react'

export default function newsLetter() {
    return (
        <div className='bg-maroon p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to Learn Latest I.T skills?</h1>
                    <span className='text-white'>Sign up to our newsLetter and stay up to date.</span>
                </div>
                <div className='m-2'>
                    <input type='text' className='p-3 mx-[-5] text-gray rounded mb-2 mr-2' placeholder='Email' />
                    <button className='bg-yellow text-white p-3 rounded'>Notify Me</button>
                    <br />
                    <p className='text-white'>We care about the protection of your data. <br /> <a href='' className='text-black'>Read our Privacy Policy.</a></p>
                </div>
            </div>
        </div>
    )
}
