import React, { useEffect, useRef, useState } from 'react';
import bg1 from "../../Assets/backgrounds/WaveLinesDesktop1.svg";
import bg2 from "../../Assets/backgrounds/WaveLinesDesktop2.svg";

const MissionBanner = () => {

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
        <div className='relative rounded-4xl ' style={{
            background: `linear-gradient(185deg, #0145b7 20%, #0145b7 10%, #0bc4ec 100%)`
        }}>
            <div className="hidden lg:flex h-80 w-full overflow-hidden absolute ">
                <svg
                    className="absolute top-50 left-30 opacity-100"
                    style={{
                        transform: `translate(${smoothPosition.current.x + loadAnimation.x}px, ${smoothPosition.current.y + loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                    width="1020" height="628" viewBox="0 0 1920 628" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <stop stopColor='##0bc4ec' />
                            <stop offset="1" stopColor='##0bc4ec' stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_26_268" x1="-313.41" y1="890.58" x2="406.1" y2="39.195" gradientUnits="userSpaceOnUse">
                            <stop stopColor='##0bc4ec' />
                            <stop offset="1" stopColor='##0bc4ec' stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_26_268" x1="433.7" y1="1545.4" x2="1559" y2="213.85" gradientUnits="userSpaceOnUse">
                            <stop stopColor='##0bc4ec' />
                            <stop offset="1" stopColor='##0bc4ec' stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_26_268" x1="1327" y1="717.5" x2="1786" y2="258.499" gradientUnits="userSpaceOnUse">
                            <stop stopColor='##0bc4ec' />
                            <stop offset="1" stopColor='##0bc4ec' stopOpacity="0.49" />
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
                    width="1020" height="628" viewBox="0 0 1920 628" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <stop stopColor='#0bc4ec' />
                            <stop offset="1" stopColor='#0bc4ec' stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_26_268" x1="-313.41" y1="890.58" x2="406.1" y2="39.195" gradientUnits="userSpaceOnUse">
                            <stop stopColor='#0bc4ec' />
                            <stop offset="1" stopColor='#0059BF' stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_26_268" x1="433.7" y1="1545.4" x2="1559" y2="213.85" gradientUnits="userSpaceOnUse">
                            <stop stopColor='#0bc4ec' />
                            <stop offset="1" stopColor='#0bc4ec' stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_26_268" x1="1327" y1="717.5" x2="1786" y2="258.499" gradientUnits="userSpaceOnUse">
                            <stop stopColor='#0bc4ec' />
                            <stop offset="1" stopColor='#0bc4ec' stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* first   */}
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
                            <stop stopColor='##0bc4ec' />
                            <stop offset="1" stopColor='##0bc4ec' stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_13_93" x1="1586" y1="682" x2="1927" y2="278.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor='##0bc4ec' />
                            <stop offset="1" stopColor='##0bc4ec' stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_13_93" x1="1038" y1="415.5" x2="1471" y2="45.9998" gradientUnits="userSpaceOnUse">
                            <stop stopColor='##0bc4ec' />
                            <stop offset="1" stopColor='##0bc4ec' stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* <svg
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
                            <stop stopColor='##0bc4ec' />
                            <stop offset="1" stopColor='##0bc4ec' stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_13_93" x1="1586" y1="682" x2="1927" y2="278.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor='#0bc4ec' />
                            <stop offset="1" stopColor='##0bc4ec' stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_13_93" x1="1038" y1="415.5" x2="1471" y2="45.9998" gradientUnits="userSpaceOnUse">
                            <stop stopColor='##0bc4ec' />
                            <stop offset="1" stopColor='##0bc4ec' stopOpacity="0.49" />
                        </linearGradient>
                    </defs>
                </svg> */}

            </div >
            <div className='p-15 relative '>
                <h3 className='text-[#00ffff] uppercase tracking-widest font-bold '>Our Mission</h3>
                <h1 className='text-white text-[40px] font-bold py-5'>To redefine global finance by empowering
                    institutions with technology that drives value
                    and growth.

                </h1>

            </div>



            {/* Diagonal Bottom Shape */}
            {/* <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="gradient1" x1="20%" y1="50%" x2="70%" y2="50%">
                        <stop offset="0%" stopColor='#0bc4ec'  />
                        <stop offset="100%" stopColor='#0bc4ec' />
                    </linearGradient>
                </defs>
                <polygon points="0,92 100,0  100,50 0,100" fill="url(#gradient1)" />
            </svg> */}


        </div >
    );
};

export default MissionBanner;