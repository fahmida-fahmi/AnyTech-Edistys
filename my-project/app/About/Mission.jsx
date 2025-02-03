import React from 'react';
import MissionBanner from '../shared/Mission/MissionBanner';

const Mission = () => {
    return (
        <div className='lg:w-3/5 w-4/5 mx-auto py-40 relative'>
            <div className='text-center pb-10'>
                <h3 className='text-sky-400 font-semibold uppercase'>our mission</h3>
                <h1 className='text-6xl font-bold text-[#01064e]'>Redefining tomorrow</h1>
            </div>

            <MissionBanner />
        </div>
    );
};

export default Mission;