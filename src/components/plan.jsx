

import React from 'react'
import { IoPeopleOutline } from 'react-icons/io5'
import {FaPeopleGroup} from 'react-icons/fa6'
import {IoIosPeople} from 'react-icons/io'
export default function plans() {
    return (
        <div className='py-[100px]'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
                <div className='shadow p-10 items-center justify-center text-center hover:scale-105 duration-400'>
                    <div className='col-span-1 flex items-center justify-center'><IoIosPeople size={60} className='text-maroon' />
                    </div>
                    <h3 className='font-bold text-[30px] mb-5'>App Development</h3>
                    <span className='font-bold text-[20px] mb-5'>$149</span>
                    <h5 className='mb-8'>text of the printing ever since</h5>
                    <h5 className='mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                    <h5 className='mb-8'>Lorem Ipsum is simply dumm text of the</h5>
                    <button className='bg-yellow text-white p-3 rounded'>Start Trial</button>
                </div>
                <div className='shadow bg-skin p-10 items-center justify-center text-center hover:scale-105 duration-400'>
                    <div className='col-span-1 flex items-center justify-center'><IoPeopleOutline size={60} className='text-maroon' />
                    </div>
                    <h3 className='font-bold text-[30px] mb-5'>Digital Marketing</h3>
                    <span className='font-bold text-[20px] mb-5'>$149</span>
                    <h5 className='mb-8'>text of the printing ever since</h5>
                    <h5 className='mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                    <h5 className='mb-8'>Lorem Ipsum is simply dumm text of the</h5>
                    <button className='bg-maroon text-white p-3 rounded'>Start Trial</button>
                </div>
                <div className='shadow p-10 items-center justify-center text-center hover:scale-105 duration-400'>
                    <div className='col-span-1 flex items-center justify-center'><FaPeopleGroup size={60} className='text-maroon' />
                    </div>
                    <h3 className='font-bold text-[30px] mb-5'>Website Development</h3>
                    <span className='font-bold text-[20px] mb-5'>$149</span>
                    <h5 className='mb-8'>text of the printing ever since</h5>
                    <h5 className='mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                    <h5 className='mb-8'>Lorem Ipsum is simply dumm text of the</h5>
                    <button className='bg-yellow text-white p-3 rounded'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

