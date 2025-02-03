import React from 'react';

const Header = ({subHeading, Heading}) => {
    return (
        <div>
            <p className='text-sm lg:text-[18px] text-[#3d98ff] uppercase font-bold'>
                {subHeading}
            </p>
            <h1 className='text-3xl lg:text-6xl font-semibold py-10 text-[#0b305b]'>
            {Heading}
            </h1>
        </div>
    );
};

export default Header;