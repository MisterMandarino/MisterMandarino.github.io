import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import React, {useRef} from "react"
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import DoraFinetuning from '../../public/images/articles/dora_finetuning.png'
import DefaultArticle from '../../public/images/articles/ArticleDefault.jpg'
import Hamiltonian from '../../public/images/articles/hamiltonian.png'
import AliceAdventures from '../../public/images/articles/alice_adventures.png'
import Article2 from '../../public/images/articles/clip-article-image.png'
import Article3 from '../../public/images/articles/minecraft-article-image.png'
import {motion, useMotionValue} from 'framer-motion'

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX);
        y.set(-10);
    } 

    function handleMouseLeave(event){
        imgRef.current.style.display = 'none';
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
            <FramerImage
            style={{x:x, y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:0.2}}} 
            ref={imgRef}
            src={img} 
            alt={title} 
            className="z-10 w-96 h-auto hidden absolute rounded=lg"/>
        </Link>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'/>
            <Link href={link} target='_blank'
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                />
                
            </Link>
            <Link href={link} target='_blank'>
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibol dark:text-primaryDark">{time}</span>
        </li>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li
        initial = {{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:'easeInOut'}}}
        viewport={{once: true}}
        className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center 
        justify-between 
        bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light">
            <MovingImg title={title} img={img} link={link}/>
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark">{date}</span>
        </motion.li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>GiovanniScialla | Articles Page</title>
                <meta name='description' content='any description'/>
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text='Suggested Readings!' className="mb-16"/>
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticle
                        title='Hamiltonian Neural Networks'
                        img={Hamiltonian}
                        summary=' Drawing inspiration from Hamiltonian mechanics, a branch of physics concerned with conservation laws 
                        and invariances, we define Hamiltonian Neural Networks, or HNNs. 
                        By construction, these models learn conservation laws from data. 
                        We will show that they have some major advantages over regular neural networks on a variety of physics problems.'
                        time='45 min read'
                        link='https://greydanus.github.io/2019/05/15/hamiltonian-nns/'
                        />
                        <FeaturedArticle
                        title='Introducing DoRA, a High-Performing Alternative to LoRA for Fine-Tuning'
                        img={DoraFinetuning}
                        summary='Full fine-tuning (FT) is commonly employed to tailor general pretrained models for specific downstream tasks. 
                        To reduce the training cost, parameter-efficient fine-tuning (PEFT) methods have been introduced to fine-tune pretrained models 
                        with a minimal number of parameters. Among these, Low-Rank Adaptation (LoRA) and its variants have gained considerable popularity 
                        because they avoid additional inference costs.'
                        time='30 min read'
                        link='https://developer.nvidia.com/blog/introducing-dora-a-high-performing-alternative-to-lora-for-fine-tuning/'
                        />
                        <FeaturedArticle
                        title="Alice's Adventures in a Differentiable Wonderland"
                        img={AliceAdventures}
                        summary='Neural networks surround us, in the form of large language models, speech transcription systems, 
                        molecular discovery algorithms, robotics, and much more. Stripped of anything else, neural networks are compositions 
                        of differentiable primitives, and studying them means learning how to program and how to interact with these models, 
                        a particular example of what is called differentiable programming. This primer is an introduction to this fascinating 
                        field imagined for someone, like Alice, who has just ventured into this strange differentiable wonderland.'
                        time='Book - 200 pages'
                        link='https://arxiv.org/abs/2404.17625'
                        />
                        <FeaturedArticle
                        title='Contrastive Language-Image Pre-training'
                        img={Article2}
                        summary='CLIP (Contrastive Language-Image Pre-training) builds on a large body
                         of work on zero-shot transfer, natural language supervision, 
                         and multimodal learning. The idea of zero-data learning dates back over 
                         a decade8 but until recently was mostly studied in computer vision as a way of 
                         generalizing to unseen object categories.'
                        time='20 min read'
                        link='https://openai.com/research/clip'
                        />
                        <FeaturedArticle
                        title='Learning to play Minecraft with Video PreTraining'
                        img={Article3}
                        summary='We trained a neural network to play Minecraft by Video PreTraining (VPT) 
                        on a massive unlabeled video dataset of human Minecraft play, while using only a 
                        small amount of labeled contractor data. '
                        time='20 min read'
                        link='https://openai.com/research/vpt'
                        /> 
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All articles</h2>
                    <ul>
                        <Article
                        title='AI4Finance Foundation'
                        img={DefaultArticle}
                        date='GitHub Repository'
                        link='https://github.com/AI4Finance-Foundation'
                        />
                        <Article
                        title='Python Tools for Machine Learning'
                        img={DefaultArticle}
                        date='Python Libraries'
                        link='https://github.com/ml-tooling/best-of-ml-python'
                        />
                        <Article
                        title='Gomorra SQL'
                        img={DefaultArticle}
                        date='GitHub Repository'
                        link='https://github.com/aurasphere/gomorra-sql'
                        />
                        <Article
                        title='Z-Library'
                        img={DefaultArticle}
                        date='Free Ebooks Download'
                        link='https://z-library.it/'
                        />
                        <Article
                        title='Machine Learning Startups'
                        img={DefaultArticle}
                        date='Job Opportunities'
                        link='https://github.com/gmberton/awesome-machine-learning-startups'
                        />
                        <Article
                        title='Learn PyTorch for Deep Learning'
                        img={DefaultArticle}
                        date='Pytorch Course'
                        link='https://www.learnpytorch.io/'
                        />
                        <Article
                        title='Papers with Code'
                        img={DefaultArticle}
                        date='Scientific Research'
                        link='https://paperswithcode.com/'
                        />
                        <Article
                        title='Practical Deep Learning'
                        img={DefaultArticle}
                        date='Deep Learning course'
                        link='https://course.fast.ai/'
                        />
                        <Article
                        title='Papers Implementations'
                        img={DefaultArticle}
                        date='GitHub Repository'
                        link='https://github.com/labmlai/annotated_deep_learning_paper_implementations'
                        />
                        <Article
                        title='Open Source Games'
                        img={DefaultArticle}
                        date='GitHub Repository'
                        link='https://github.com/michelpereira/awesome-open-source-games'
                        />
                        <Article
                        title='Financial Toolkit'
                        img={DefaultArticle}
                        date='Financial Engineering'
                        link='https://www.jeroenbouma.com/projects/financetoolkit'
                        />
                        <Article
                        title='Diffusion Models'
                        img={DefaultArticle}
                        date='GitHub Repository'
                        link='https://diff-usion.github.io/Awesome-Diffusion-Models/'
                        />
                        <Article
                        title='GPT from Scratch'
                        img={DefaultArticle}
                        date='Deep Learning tutorial'
                        link='https://jaykmody.com/blog/gpt-from-scratch/'
                        />
                        <Article
                        title='Deep Learning - NYU center for Data Science'
                        img={DefaultArticle}
                        date='Deep Learning Course'
                        link='https://atcold.github.io/NYU-DLSP21/'
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles