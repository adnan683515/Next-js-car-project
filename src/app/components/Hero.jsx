
"use client"
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className=''>
            

            <figure className=' rounded-lg'>
                <Image
                className='w-full max-h-[500px]'
                width={200}
                height={2000}
                alt='bannar image'
                src={'https://i.ibb.co.com/M5Cv5Dwt/Gemini-Generated-Image-brn9grbrn9grbrn9.png'}></Image>
            </figure>
        </div>
    );
};

export default Hero;