import React from 'react';
import Header from '../../Header/Header';
import philosophy from "../../../Assets/philosophy/philosophy.jpg";
import PhiloCard from './PhiloCard';

const Philosophy = () => {
    return (
        <div className='xl:w-3/5 sm:w-4/5 mx-auto py-15 text-center'>
            <Header
            subHeading={"OUR PHILOSOPHY"}
            Heading={"Human-centred innovation"}
            />
            <div className='py-10'>
                <img src={philosophy} alt="philosophy_img" />
            </div>
            <div className='text-left'>
                <PhiloCard/>
            </div>
        </div>
    );
};

export default Philosophy;