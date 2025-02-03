import React, { useEffect, useRef, useState } from 'react';
import bg1 from "../../Assets/backgrounds/WaveLinesDesktop1.svg";
import bg2 from "../../Assets/backgrounds/WaveLinesDesktop2.svg";
import BannerHeading from './BannerHeading';

const HeroBanner = ({subHeading, Heading, text, badge,  img1, img2, img3, img4, img5, img6,img7, img8, img9, img10,img11, img12, img13, img14, img15, img16,img17, img18, img19, img20, bgColor1, bgColor2, bgColor3, shapeColor1, shapeColor2 }) => {

    const mouseRef = useRef({ x: 0, y: 0 }); // Store target mouse position
    const smoothPosition = useRef({ x: 0, y: 0 }); // Store smooth position
    const [render, setRender] = useState(0); // Trigger re-render
    const [loadAnimation, setLoadAnimation] = useState({ x: -30, y: -20 }); // Initial animation offset
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Initial animation effect
    useEffect(() => {
        const animationDuration = 2000; // Animation duration in ms
        const startTime = Date.now();

        const animateOnLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / animationDuration, 1);

            // Ease out effect
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setLoadAnimation({ x: -30 + easeOut * 30, y: -20 + easeOut * 20 });

            if (progress < 1) {
                requestAnimationFrame(animateOnLoad);
            }
        };

        animateOnLoad();
    }, []);

    // Update mouse target position
    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseRef.current = {
                x: (event.clientX / window.innerWidth - 0.5) * 40, // Adjust intensity
                y: (event.clientY / window.innerHeight - 0.5) * 50,
            };
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Smooth animation using requestAnimationFrame
    useEffect(() => {
        const smoothMove = () => {
            // Apply easing for smooth transition
            smoothPosition.current.x += (mouseRef.current.x - smoothPosition.current.x) * 0.1;
            smoothPosition.current.y += (mouseRef.current.y - smoothPosition.current.y) * 0.1;

            setRender((prev) => prev + 1); // Trigger re-render

            requestAnimationFrame(smoothMove);
        };

        smoothMove();
    }, []);


    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const screenCenter = window.innerWidth / 2;

            // Move right when mouse moves left, and vice versa
            const moveX = (screenCenter - clientX) * 0.01;
            const moveY = (window.innerHeight / 2 - clientY) * 0.05;

            setMousePosition({ x: moveX, y: moveY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);


    // radial-gradient(300.77% 113.48% at -0.00% 99.92%, 
    //     , ${bgColor1} 15.56%, ${bgColor2} 25.98%, ${bgColor3} 40%)

    return (
        <div className='relative' style={{
            background: `linear-gradient(185deg, ${bgColor1} 20%, ${bgColor3} 10%, ${bgColor2} 100%)`
        }}>
            <div className="hidden lg:flex  w-full h-[70vh] overflow-hidden absolute ">
                <svg
                    className="absolute top-50 left-30 opacity-100"
                    style={{
                        transform: `translate(${smoothPosition.current.x + loadAnimation.x}px, ${smoothPosition.current.y + loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                    width="1920" height="628" viewBox="0 0 1920 628" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M1509 -371.405V-737L327 445H692.596L1509 -371.405Z" fill="url(#paint0_linear_26_268)" />
                    </g>
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M596 -133.212V-329L-37 304H158.789L596 -133.212Z" fill="url(#paint1_linear_26_268)" />
                    </g>
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M1856 -55.7907V-362L866 628H1172.21L1856 -55.7907Z" fill="url(#paint2_linear_26_268)" />
                    </g>
                    <path d="M1967 168.744V11L1457 521H1614.74L1967 168.744Z" fill="url(#paint3_linear_26_268)" />
                    <defs>
                        <linearGradient id="paint0_linear_26_268" x1="1259.5" y1="862" x2="689" y2="188.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img7} />
                            <stop offset="1" stopColor={img8} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_26_268" x1="-313.41" y1="890.58" x2="406.1" y2="39.195" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img9} />
                            <stop offset="1" stopColor={img10} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_26_268" x1="433.7" y1="1545.4" x2="1559" y2="213.85" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img11} />
                            <stop offset="1" stopColor={img12} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_26_268" x1="1327" y1="717.5" x2="1786" y2="258.499" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img13} />
                            <stop offset="1" stopColor={img14} stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* mouse moving opposite position  */}
                <svg
                    className="absolute top-0 left-100 opacity-100"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                    width="1920" height="628" viewBox="0 0 1920 628" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M1509 -371.405V-737L327 445H692.596L1509 -371.405Z" fill="url(#paint0_linear_26_268)" />
                    </g>
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M596 -133.212V-329L-37 304H158.789L596 -133.212Z" fill="url(#paint1_linear_26_268)" />
                    </g>
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M1856 -55.7907V-362L866 628H1172.21L1856 -55.7907Z" fill="url(#paint2_linear_26_268)" />
                    </g>
                    <path d="M1967 168.744V11L1457 521H1614.74L1967 168.744Z" fill="url(#paint3_linear_26_268)" />
                    <defs>
                        <linearGradient id="paint0_linear_26_268" x1="1259.5" y1="862" x2="689" y2="188.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1F80F0" />
                            <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_26_268" x1="-313.41" y1="890.58" x2="406.1" y2="39.195" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1F80F0" />
                            <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_26_268" x1="433.7" y1="1545.4" x2="1559" y2="213.85" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1F80F0" />
                            <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_26_268" x1="1327" y1="717.5" x2="1786" y2="258.499" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00E9EA" />
                            <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* first imgs  */}
                <svg
                    className="absolute -top-50 left-0 opacity-100"
                    style={{
                        transform: `translate(${smoothPosition.current.x + loadAnimation.x}px, ${smoothPosition.current.y + loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                    width="1920" height="929" viewBox="0 0 1920 929" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M788 23.4954V-382L-523 929H-117.504L788 23.4954Z" fill="url(#paint0_linear_13_93)" />
                    </g>
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M2017 196.791V104L1717 404H1809.79L2017 196.791Z" fill="url(#paint1_linear_13_93)" />
                    </g>
                    <path d="M1480 126.679V11L1106 385H1221.68L1480 126.679Z" fill="url(#paint2_linear_13_93)" />
                    <defs>
                        <linearGradient id="paint0_linear_13_93" x1="-668.962" y1="1499.58" x2="811.884" y2="18.7308" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img1} />
                            <stop offset="1" stopColor={img2} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_13_93" x1="1586" y1="682" x2="1927" y2="278.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img3} />
                            <stop offset="1" stopColor={img4} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_13_93" x1="1038" y1="415.5" x2="1471" y2="45.9998" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img5} />
                            <stop offset="1" stopColor={img6} stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* second img  */}
                {/* <svg
                    lassName="absolute top-20 left-20 opacity-100"
                    style={{
                        transform: `translate(${smoothPosition.current.x + loadAnimation.x}px, ${smoothPosition.current.y + loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                    width="1020" height="628" viewBox="0 0 1920 628" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g style={{ mixBlendMode: 'multiply' }}>
                        <path d="M1509 -371.405V-737L327 445H692.596L1509 -371.405Z" fill="url(#paint0_linear_26_268)" />
                    </g>
                    <g style={{ mixBlendMode: 'multiply' }}>
                        <path d="M596 -133.212V-329L-37 304H158.789L596 -133.212Z" fill="url(#paint1_linear_26_268)" />
                    </g>
                    <g style={{ mixBlendMode: 'multiply' }}>
                        <path d="M1856 -55.7907V-362L866 628H1172.21L1856 -55.7907Z" fill="url(#paint2_linear_26_268)" />
                    </g>
                    <path d="M1967 168.744V11L1457 521H1614.74L1967 168.744Z" fill="url(#paint3_linear_26_268)" />
                    <defs>
                        <linearGradient id="paint0_linear_26_268" x1="1259.5" y1="862" x2="689" y2="188.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1F80F0" />
                            <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_26_268" x1="-313.41" y1="890.58" x2="406.1" y2="39.195" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img1} />
                            <stop offset="1" stopColor={img2} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_26_268" x1="433.7" y1="1545.4" x2="1559" y2="213.85" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img3} />
                            <stop offset="1" stopColor={img4} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_26_268" x1="1327" y1="717.5" x2="1786" y2="258.499" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img5} />
                            <stop offset="1" stopColor={img6} stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg> */}

                {/* <svg
                    className="absolute -top-100 left-180 opacity-100"
                    style={{
                        transform: `translate(${smoothPosition.current.x + loadAnimation.x}px, ${smoothPosition.current.y + loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                    width="1020" height="929" viewBox="0 0 1920 929" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M788 23.4954V-382L-523 929H-117.504L788 23.4954Z" fill="url(#paint0_linear_13_93)" />
                    </g>
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M2017 196.791V104L1717 404H1809.79L2017 196.791Z" fill="url(#paint1_linear_13_93)" />
                    </g>
                    <path d="M1480 126.679V11L1106 385H1221.68L1480 126.679Z" fill="url(#paint2_linear_13_93)" />
                    <defs>
                        <linearGradient id="paint0_linear_13_93" x1="-668.962" y1="1499.58" x2="811.884" y2="18.7308" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img1} />
                            <stop offset="1" stopColor={img2} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_13_93" x1="1586" y1="682" x2="1927" y2="278.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img3} />
                            <stop offset="1" stopColor={img4} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_13_93" x1="1038" y1="415.5" x2="1471" y2="45.9998" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img5} />
                            <stop offset="1" stopColor={img6} stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg> */}

                {/* <svg
                    className="absolute -top-80 right-0 opacity-100"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                    width="1520" height="929" viewBox="0 0 1920 929" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M788 23.4954V-382L-523 929H-117.504L788 23.4954Z" fill="url(#paint0_linear_13_93)" />
                    </g>
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M2017 196.791V104L1717 404H1809.79L2017 196.791Z" fill="url(#paint1_linear_13_93)" />
                    </g>
                    <path d="M1480 126.679V11L1106 385H1221.68L1480 126.679Z" fill="url(#paint2_linear_13_93)" />
                    <defs>
                        <linearGradient id="paint0_linear_13_93" x1="-668.962" y1="1499.58" x2="811.884" y2="18.7308" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img1} />
                            <stop offset="1" stopColor={img2} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_13_93" x1="1586" y1="682" x2="1927" y2="278.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img3} />
                            <stop offset="1" stopColor={img4} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_13_93" x1="1038" y1="415.5" x2="1471" y2="45.9998" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img5} />
                            <stop offset="1" stopColor={img6} stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg> */}
                <svg
                    className="absolute -top-60 -left-30 opacity-100"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                    width="920" height="929" viewBox="0 0 1920 929" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M788 23.4954V-382L-523 929H-117.504L788 23.4954Z" fill="url(#paint0_linear_13_93)" />
                    </g>
                    <g style={{ mixBlendMode: "multiply" }}>
                        <path d="M2017 196.791V104L1717 404H1809.79L2017 196.791Z" fill="url(#paint1_linear_13_93)" />
                    </g>
                    <path d="M1480 126.679V11L1106 385H1221.68L1480 126.679Z" fill="url(#paint2_linear_13_93)" />
                    <defs>
                        <linearGradient id="paint0_linear_13_93" x1="-668.962" y1="1499.58" x2="811.884" y2="18.7308" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img15} />
                            <stop offset="1" stopColor={img16} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_13_93" x1="1586" y1="682" x2="1927" y2="278.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img17} />
                            <stop offset="1" stopColor={img18} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_13_93" x1="1038" y1="415.5" x2="1471" y2="45.9998" gradientUnits="userSpaceOnUse">
                            <stop stopColor={img19} />
                            <stop offset="1" stopColor={img20} stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg>

            </div >
            <div className='lg:w-3/5 w-4/5 mx-auto z-100  lg:flex lg:flex-col lg:justify-center py-48 relative'>
                <h3 className='text-[#00ffff] uppercase tracking-widest font-bold '>{subHeading}</h3>
                <h1 className='text-gray-300 text-7xl font-bold py-10 lg:w-2/3'>{Heading}</h1>
                {
                    <p className='text-white lg:w-1/3'>{text}</p>
                    ||
                    <img src={badge} alt="" />

                }
            </div>



            {/* Diagonal Bottom Shape */}
            <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="gradient1" x1="20%" y1="50%" x2="70%" y2="50%">
                        <stop offset="0%" stopColor={`${shapeColor1}`} />
                        <stop offset="100%" stopColor={`${shapeColor2}`} />
                    </linearGradient>
                </defs>
                <polygon points="0,92 100,0  100,50 0,100" fill="url(#gradient1)" />
            </svg>


        </div >
    );
};

export default HeroBanner;