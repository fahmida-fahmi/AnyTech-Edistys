import React from 'react';
import Header from '../../Header/Header';
import Counter from './Counter';
import Companies from './Companies';

const TrustedSect = () => {
    return (
        <div className=' py-25 relative' >

            <div className='xl:w-3/5 sm:w-4/5 mx-auto text-center pb-20'>

                <Header subHeading="trusted by the best"  />
                <div>
                    <Counter />
                </div>
                <div>
                    <Companies />
                </div>

                {/* Diagonal Bottom Shape */}
                





            </div>

        </div>
    );
};

export default TrustedSect;