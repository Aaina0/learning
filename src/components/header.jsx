
import { React, useState } from 'react';
import { BiMenu } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'


export default function Header() {
    const [toggle, setToggle] = useState(false);



    return (
        <div className='bg-maroon p-4'>
            <div className='max-w-[1240px] mx-auto flex justify-between items-center py-1 px-2'>
                <div className='text-3xl font-bold'>Logo</div>
                {
                    toggle ?
                        <RxCross2 onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <BiMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                }
                <ul className='md:flex hidden flex text-white gap-10'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* {RESPONSIVE FOR MOBILE} */}
                {/* <ul className={` duration-300 md:hidden fixed text-white bg-black top-[75px] w-full h-screen ${toggle ? 'left-[0]' : 'left[-100%]'} `} >
                    <li className='p-5'>Home</li>
                    <li className='p-5'>Company</li>
                    <li className='p-5'>Resources</li>
                    <li className='p-5'>About</li>
                    <li className='p-5'>Contact</li>
                </ul> */}
            </div>
        </div>
    )
}
