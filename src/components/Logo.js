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
                backgroundColor:['#121212', 'rgba(0,255,0,1)', 'rgba(0,0,0,0)', 'rgba(255,0,0,1)', '#121212'],
                transition:{duration:1, repeat:Infinity}

            }}
            >
            GS</MotionLink>
        </div>
    )
}

export default Logo