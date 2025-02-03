import React from 'react';
import Header from '../../shared/Header/Header';

import philosophy from "../../Assets/philosophy/philosophy.jpg";
import mbPhilosophy from "../../Assets/philosophy/mb-philosophy.jpg";
import PhiloCard from './PhiloCard';

const Philosophy = () => {
    return (
        <div className='xl:w-3/5 sm:w-4/5 w-3/4 mx-auto py-15 text-center'>
            <Header
                subHeading={"OUR PHILOSOPHY"}
                Heading={"Human-centred innovation"}
            />
            <div className="py-10 md:max-w-full  max-w-md mx-auto object-contain">
                <img
                    src={philosophy}
                    alt="philosophy_img"
                    className=" transform hidden md:flex transition-all duration-300"
                />
                {/* for mobile device  */}
                <img
                    src={mbPhilosophy}
                    alt="philosophy_img"
                    className="transform flex md:hidden transition-all duration-300 "
                />
            </div>

            <div className='text-left'>
                <PhiloCard />
            </div>
        </div>
    );
};

export default Philosophy;