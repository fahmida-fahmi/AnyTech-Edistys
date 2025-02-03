import React from 'react';
import introImg from "../../Assets/imgs/intro_img.jpg";
import chart from "../../Assets/intro-imgs/chart.svg";
import home from "../../Assets/intro-imgs/home.svg";
import media from "../../Assets/intro-imgs/media.svg";
import { motion } from "framer-motion";
import topIntroImg from "../../Assets/frames/founder/3.svg";
import bottomIntroImg from "../../Assets/frames/founder/2.svg";
// import carousel from "../../Assets/frames/carousel-image-frame-2.jpg";
import Header from '../../shared/Header/Header';



const Intro = () => {
    return (
        <div
            className="py-17 relative -z-50"
            style={{
                background: "linear-gradient(15deg, #f1f7fe 30%, white 70%)"
            }}
        >

            <div className='xl:w-3/5 sm:w-4/5 w-4/5 mx-auto lg:grid lg:grid-cols-2 grid grid-cols-1 lg:gap-y-15 py-15'>

                <div className='flex flex-col justify-between '>
                    <div className='md:order-1'>
                        <Header
                            subHeading="POWERING THE FUTURE OF FINANCE"
                            Heading="Uncovering new ways to delight customers"
                        />
                        <div className='md:order-2 order-3'>

                            <p className='font-bold text-[#0b305b] text-[15px]'>AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</p>
                            <p className='py-8 text-[#0b305b] font-medium text-[15px]'>Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.</p>
                        </div>

                    </div>
                </div>
                <div className='relative md:order-3 lg:my-10 max-w-auto'>
                    <div className='z-10'>
                        {/* Floating Home Icon */}
                        <motion.img
                            className='absolute top-15 right-5 lg:flex '
                            src={home}
                            alt=""
                            initial={{ y: -10 }}
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Floating Chart Icon */}
                        <motion.img
                            className='absolute lg:top-50 lg:left-30 top-60 right-135 lg:flex '
                            src={chart}
                            alt=""
                            initial={{ y: -10 }}
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />

                        {/* Floating Media Icon */}
                        <motion.img
                            className='absolute lg:top-25 lg:left-8 top-20 right-130 lg:flex '
                            src={media}
                            alt=""
                            initial={{ y: -10 }}
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                        />
                    </div>
                    <div className='lg:w-auto p-10'>
                        <img className='lg:flex  absolute lg:w-70 w-50 lg:-top-20 lg:-left-0 -top-20 rotate-180 -z-10' src={topIntroImg} alt="" />
                        <img className='lg:flex  absolute lg:w-40 w-20 lg:top-105 lg:right-0 top-105 right-10  rotate-180 -z-10' src={topIntroImg} alt="" />
                        <img className='lg:flex  absolute w-25 lg:-right-0 lg:top-90 right-10 top-90  z-10  rotate-180' src={bottomIntroImg} alt="" />
                        <img className='lg:flex  absolute w-35 left-23 top-100  z-10  rotate-180' src={bottomIntroImg} alt="" />
                        <img className='lg:flex  absolute w-60 right-0 -top-16  -z-10  rotate-180' src={bottomIntroImg} alt="" />
                        <img className='lg:flex  absolute w-35 right-15 -top-16  -z-10  rotate-180' src={bottomIntroImg} alt="" />
                        {/* <img className='absolute  -bottom-20 right-10 -rotate-90' src={carousel} alt="" /> */}
                    </div>


                    {/* Main Image */}
                    <div className='px-25 lg:px-10'>

                        <img className="" src={introImg} alt="intro-img" />
                    </div>

                </div>
            </div>

            {/* Diagonal Bottom Shape */}
            <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,100 100,10 100,100 0,100" fill="white" />
            </svg>
        </div>
    );
};

export default Intro;