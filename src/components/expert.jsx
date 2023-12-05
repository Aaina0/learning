
import React from 'react'
import laptop from '../assets/laptop.jpg'

export default function Experts() {
    return (
        <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={laptop} alt='img' className='inline'/>
            </div>
            <div className=' col-span-1 flex flex-col justify-center'>
                <h1 className='text-margenta font-bold my-2'>LEARN FROM EXPERTS</h1>
                <p className='my-2 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset</p>
                <button className='bg-margenta text-white p-3 rounded w-[30%]'>Get Started </button>
            </div>
        </div>
    )
}
