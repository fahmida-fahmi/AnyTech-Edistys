import React from 'react';
import img from "../Assets/story/man.jpg";
import bgImg from "../Assets/frames/story/1.png";
import topIntroImg from "../Assets/frames/founder/3.svg";
import lineImg from "../Assets/frames/founder/2.svg";
import analysisImg from "../Assets/story/chart.svg";
import databaseImg from "../Assets/story/database.svg";
import groupImg from "../Assets/story/group.svg";
import CompanyMarquee from '../shared/CompnayMarquee/CompanyMarquee';



const OurStory = () => {
    const storyCard = [
        {
            "img": `${analysisImg}`,
            "title": "Experts in technology and finance",
            "description": "With our team's deep expertise in the finance and tech sectors, we are catalysts for change, paving the way for innovation and strategic reorientation, shaping the future of finance."
        },
        {
            "img": `${databaseImg}`,
            "title": "Empowerment through technology",
            description: (
                <>
                    Empowering more than <strong>40 financial institutions</strong> to transform in a digital-first world, our innovative platform enables banks and financial institutions to develop customer-centric financial products and offerings.
                </>
            ),
        },
        {
            "img": `${groupImg}`,
            "title": "Understanding evolving needs",
            "description": "By staying at the forefront of technology and understanding the evolving needs of the industry, we strive to provide cutting-edge solutions that drive efficiency, enhance user experiences, and enable financial inclusion."
        }
    ];



    return (
        <div className='relative bg-gray-100'>
            <div className='lg:w-3/5 w-4/5 mx-auto py-48 relative'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                    <div>
                        <h3 className='text-[#0a81f0] uppercase tracking-widest font-bold '>our story</h3>
                        <h1 className='text-[#01064e] text-6xl font-bold py-10 '>Building the <span className='bg-gradient-to-r from-[#0dbfed] to-[#0d3a6e] bg-clip-text text-transparent'>future</span>  today</h1>
                        <p className='text-[#1e4a7c] font-semibold'>Founded in January 2020, Any Technology is a Singapore-based fintech enterprise committed to helping the global financial services industry reimagine banking and payment services.</p>
                    </div>
                    <div className='relative z-10'>
                        <div>
                            <img className='absolute -top-10 -left-0  w-2/4' src={bgImg} alt="" />
                            <img className='absolute top-20 -z-10 right-0  w-2/5' src={topIntroImg} alt="" />
                            <img className='absolute top-5  right-10  w-1/4' src={lineImg} alt="" />
                        </div>
                        <img className='lg:px-20 z-50' src={img} alt="business man" />
                    </div>
                </div>

                <div className='lg:grid lg:grid-cols-3 lg:gap-10 py-20'>
                    {
                        storyCard.map((card, index) => (
                            <div key={index}>
                                <div className='bg-amber-300 p-3 rounded-full inline-block'>

                                    <img src={card.img} alt={card.title} />
                                </div>
                                <h2 className='text-2xl font-semibold py-5 text-[#01064e]'>{card.title}</h2>

                                <p className='text-sky-900 text-[14px] font-medium'>{card.description}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='relative border-b border-gray-300 py-5'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <div className='font-bold text-[45px]'>Empowering more than <span className='text-[#227ee7]'>40 financial institutions</span>  to transform in a digital-first world.</div>
                </div>

                <div className='row'>
                    <CompanyMarquee />
                </div>
            </div>
            {/* Diagonal Bottom Shape */}
            <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,100 100,10 100,100 0,100" fill="white" />
            </svg>

            
        </div>
    );
};

export default OurStory;
