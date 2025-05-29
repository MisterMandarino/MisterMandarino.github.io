import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { GithubIcon } from '@/components/Icons'
import UnityGame from '../../public/images/projects/unitygame.png'
import RegionDetectionProject from '../../public/images/projects/peppers.jpg'
import VideoInpaintingProject from '../../public/images/projects/video_inpainting.png'
import RouteOptimizationProject from '../../public/images/projects/optimizing_routes.png'
import PortfolioDashboard from '../../public/images/projects/portfolio_dashboard.png'
import Neu4mes from '../../public/images/projects/self_driving_vehicle.png'
import NNodely from '../../public/images/projects/logo_white_info.png'
import PromptLearningProject from '../../public/images/projects/prompt-learning-cover-image.jpg'
import PackingProject from '../../public/images/projects/3d-packing-cover-image.png'
import VisualGroundingProject from '../../public/images/projects/visual-grounding-cover-image.jpg'

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
                            title='NNodely - Structured Neural Networks for Mechanical Systems'
                            img={NNodely}
                            summary="Modeling, control, and estimation of physical systems are central to many engineering disciplines. 
                            While data-driven methods like neural networks offer powerful tools, they often struggle to incorporate prior domain knowledge, 
                            limiting their interpretability, generalizability, and safety.
                            The framework's goal is to allow fast prototyping of MS-NNs for modeling, control and estimation of physical systems, 
                            by embedding prior domain knowledge into the neural network architecture."
                            link='https://github.com/tonegas/nnodely'
                            type='Framework - under development'
                            github='https://github.com/tonegas/nnodely'
                            >
                            </FeaturedProject>
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                            title='Neu4mes - A Neural Network Framework'
                            img={Neu4mes}
                            summary='Structured neural networks (SNNs) are a new neural networks concept. 
                            These networks base their structure on mechanical and control theory laws.
                            The frameworks goal is to allow the users fast modeling and control of a mechanical system such as 
                            an autonomous vehicle.
                            Using a conceptual representation of your mechanical system the framework generates the structured 
                            neural network of model of mechanical device considered.'
                            link='https://github.com/MisterMandarino/neu4mes-framework'
                            type='Master Thesis'
                            github='https://github.com/MisterMandarino/neu4mes-framework'
                            >
                            </FeaturedProject>
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                            title='Textual Prompts Object Removal for Video Impainting'
                            img={VideoInpaintingProject}
                            summary='In this project we proposed an efficient way to automate the generation of video sequence masks 
                            using state of the art pre-trained models. The models used to achieve textual video inpainting are: 
                            "You Only Look Once" (YOLO), "Contrastive Language-Image Pre-training" (CLIP), "Segment-Anything Model" (SAM)
                            and "Improving Propagation and Transformer for Video Inpainting" (ProPainter)'
                            link='https://github.com/MisterMandarino/Textual-Prompts-Object-Removal-for-Video-Inpainting'
                            type='Deep Learning'
                            github='https://github.com/MisterMandarino/Textual-Prompts-Object-Removal-for-Video-Inpainting'
                            >
                            </FeaturedProject>
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                            title='Learning Prompts for Transfer Learning'
                            img={PromptLearningProject}
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
                                img={PackingProject}
                                link='https://github.com/MisterMandarino/3D-Packing-Problem-using-Evolutionary-Computations'
                                type='Bio-Inspired AI'
                                github='https://github.com/MisterMandarino/3D-Packing-Problem-using-Evolutionary-Computations'
                            >
                            </Project>
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Portfolio Dashboard'
                                img={PortfolioDashboard}
                                link='https://github.com/MisterMandarino/Portfolio-Dashboard'
                                type='Financial Engineering'
                                github='https://github.com/MisterMandarino/Portfolio-Dashboard'
                            >
                            </Project>
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Visual Grounding using CLIP'
                                img={VisualGroundingProject}
                                link='https://github.com/MisterMandarino/VisualGrounding'
                                type='Computer Vision'
                                github='https://github.com/MisterMandarino/VisualGrounding'
                            >
                            </Project>
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Routes Optimization'
                                img={RouteOptimizationProject}
                                link='https://github.com/MisterMandarino/Optimizing-Routes-for-a-Logistic-Company'
                                type='Data Mining'
                                github='https://github.com/MisterMandarino/Optimizing-Routes-for-a-Logistic-Company'
                            >
                            </Project>
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Region Detection'
                                img={RegionDetectionProject}
                                link='https://github.com/MisterMandarino/ImageProcessing'
                                type='Signal Processing'
                                github='https://github.com/MisterMandarino/ImageProcessing'
                            >
                            </Project>
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Arena - 2D Game Engine'
                                img={UnityGame}
                                link='https://github.com/MisterMandarino/Arena_UnityProject'
                                type='Unity Project'
                                github='https://github.com/MisterMandarino/Arena_UnityProject'
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