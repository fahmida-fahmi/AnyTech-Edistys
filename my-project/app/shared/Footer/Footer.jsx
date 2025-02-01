import React from 'react';
import logo    from "../../Assets/logo/logo.jpg";

const Footer = () => {
    return (
        <div className=''>

            {/* footer nav  */}

            <footer className='bg-[#142e4b] '>
                <nav className='text-white py-10 xl:w-3/5 sm:w-4/5 mx-auto flex justify-between items-center'>
                    <a href="#" className='text-4xl font-bold'><img src={logo} alt="logo" /></a>
                    <div className='flex items-center '>
                        <ul className='flex text-[#00e9cf]'>
                            <li className='p-3 border-r border-[#58807b] font-semibold'>Our Solution</li>
                            <a href="" className='p-3'>

                                <li>AnyCaaS</li>
                            </a>
                            <a href="" className='p-3'>
                                <li>AnyBaaS</li>
                            </a>
                            <a href="" className='p-3'>
                                <li>AnyPaaS</li>
                            </a>

                        </ul>
                    </div>
                </nav>

            </footer>

            {/* footer copyright section */}

            <div className='bg-[#00152d] text-sky-400 py-4 border-t border-[#3f5c80]'>
                <div className='xl:w-3/5 sm:w-4/5 mx-auto flex justify-between items-center'>
                    <p className='text-sm font-semibold'>&copy; {new Date().getFullYear()}  All rights reserved. <span className='font-normal'> Any Technology Pte Ltd.</span></p>
                    <ul className='flex'>
                        <li className='p-3'><a href="#" className=''>Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;