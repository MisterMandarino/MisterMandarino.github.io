import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href='/' 
            className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold 
            border border-solid border-transparent dark:border-light'
            whileHover={{
                backgroundColor:['rgba(255,172,55,1)', 'rgba(255,213,153,1)', 'rgba(255,196,113,1)', 'rgba(255,185,63,1)', 'rgba(255,172,55,1)'],
                transition:{duration:1, repeat:Infinity}

            }}
            >GS</MotionLink>
        </div>
    )
}

export default Logo