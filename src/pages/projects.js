import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { GithubIcon } from '@/components/Icons'
import Project1 from '../../public/images/projects/prompt-learning-cover-image.jpg'
import Project2 from '../../public/images/projects/3d-packing-cover-image.png'
import Project3 from '../../public/images/projects/visual-grounding-cover-image.jpg'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light'/>
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                    dark:bg-light dark:text-dark'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'/>
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline 
                    dark:bg-dark dark:text-light'
                    >Visit Project
                    </Link>
                    <Link href={github} target='_blank' className='w-8'><GithubIcon/></Link>
                </div>
            </div>
        </article>
    )
}


const projects = () => {
    return (
        <>
            <Head>
                <title>GiovanniScialla | Projects Page</title>
                <meta name='description' content='any description'/>
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Personal Projects' className='mb-16'/>
                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeaturedProject
                            title='Learning Prompts for Transfer Learning'
                            img={Project1}
                            summary='Large pre-trained vision-language models like CLIP have shown 
                            great potential in learning representations that are transferable across
                             a wide range of downstream tasks. 
                             Inspired by the Natural Language Processing (NLP) literature, 
                             recent CLIP adaptation approaches learn prompts as the textual inputs 
                             to fine-tune CLIP for downstream tasks.'
                            link='https://github.com/MisterMandarino/Learning-Prompts-for-Transfer-Learning'
                            type='Featured Project'
                            github='https://github.com/MisterMandarino/Learning-Prompts-for-Transfer-Learning'
                            >

                            </FeaturedProject>
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='3D Packing Problem with Evolutionary Computations'
                                img={Project2}
                                link='https://github.com/MisterMandarino/3D-Packing-Problem-using-Evolutionary-Computations'
                                type='Project'
                                github='https://github.com/MisterMandarino/3D-Packing-Problem-using-Evolutionary-Computations'
                                >

                            </Project>
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Visual Grounding using CLIP'
                                img={Project3}
                                link='https://github.com/MisterMandarino/VisualGrounding'
                                type='Project'
                                github='https://github.com/MisterMandarino/VisualGrounding'
                                >

                            </Project>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects