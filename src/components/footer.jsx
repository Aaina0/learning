
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
export default function footer() {
    return (
        <div className='bg-maroon p-4'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-4 gap-9'>
                <div>
                    <div className='text-5xl font-bold text-center mb-8'>Logo</div>
                    <p className='text-white text-[10px] md:text-[17px] text-center mb-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the </p>
                    <div className='flex text-white gap-5 justify-center'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaGithub />
                    </div>
                </div>
                <div>
                    <h1 className='text-white font-bold md:text-[20px]'>Solutions</h1>
                    <br />
                    <h2>Analytics</h2>
                    <br />
                    <h2>Marketing</h2>
                    <br />
                    <h2>Commerce</h2>
                    <br />
                    <h2>Analysis</h2>
                </div>
                <div>
                    <h1 className='text-white font-bold md:text-[20px]'>Support</h1>
                    <br />
                    <h2>Pricing</h2>
                    <br />
                    <h2>Documentation</h2>
                    <br />
                    <h2>Guides</h2>
                    <br />
                    <h2>Api Solutions</h2>
                </div>
                <div>
                    <h1 className='text-white font-bold md:text-[20px]'>Company</h1>
                    <br />
                    <h2>About</h2>
                    <br />
                    <h2>Blog</h2>
                    <br />
                    <h2>Jobs</h2>
                    <br />
                    <h2>Career</h2>
                </div>
            </div>
        </div>
    )
}
