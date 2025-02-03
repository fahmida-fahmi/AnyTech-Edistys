import React from 'react';
import Header from '../../shared/Header/Header';
import Counter from './Counter';
import Companies from './Companies';

const TrustedSect = () => {
    return (
        <div className=' py-25 relative' >

            <div className='xl:w-3/5 sm:w-4/5 w-4/5 mx-auto text-center pb-20'>

                <Header subHeading="trusted by the best"  />
                <div>
                    <Counter />
                </div>
                <div>
                    <Companies />
                </div>

                {/* Diagonal Bottom Shape */}
                
                <svg className="absolute bottom-0 right-0 w-full h-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,0 1,0 100,100 0,0" fill="white" />
                </svg>




            </div>

        </div>
    );
};

export default TrustedSect;