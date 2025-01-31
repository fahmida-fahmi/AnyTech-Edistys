import React, { useState, useEffect, useRef } from "react";
import bg1 from "../../../Assets/backgrounds/WaveLinesDesktop1.svg";
import bg2 from "../../../Assets/backgrounds/WaveLinesDesktop2.svg";
import bg3 from "../../../Assets/backgrounds/WaveLinesDesktop3.svg";
import mbBg3 from "../../../Assets/backgrounds/WaveLinesMobile1.svg";
import mbBg4 from "../../../Assets/backgrounds/WaveLinesMobile2.svg";
import bg4 from "../../../Assets/backgrounds/WaveLinesDesktop4.svg";
import bgImage from "../../../Assets/imgs/man.jpg";

const Banner = () => {
    const mouseRef = useRef({ x: 0, y: 0 }); // Store target mouse position
    const smoothPosition = useRef({ x: 0, y: 0 }); // Store smooth position
    const [render, setRender] = useState(0); // Trigger re-render
    const [loadAnimation, setLoadAnimation] = useState({ x: -30, y: -20 }); // Initial animation offset

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
                y: (event.clientY / window.innerHeight - 0.5) * 40,
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

    return (
        <div className="relative  lg:h-[86vh] h-[100vh] flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            <div>
                <div className="hidden absolute inset-0 lg:flex justify-end">
                    <img
                        src={bgImage}
                        alt="Businesswoman background"
                        className="opacity-100"
                    />
                </div>
                

            </div>
            <div
                className="hidden lg:flex absolute inset-0 opacity-100 w-full"
                style={{
                    clipPath: 'polygon(0% 0%, 78% 0%, 35% 100%, 0% 100%)',
                    background: "radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
                }}
            ></div>

            {/* for mobile device  */}
            <div
                className="lg:hidden flex absolute inset-0 opacity-100 "
                style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    background: "radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
                }}
            ></div>

            {/* Overlay Elements desktop*/}
            <div
                className="hidden lg:flex absolute bottom-10 right-0 w-[200px] h-[200px] opacity-100"
                style={{
                    clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
                    background: "radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
                }}
            ></div>
            <div className="hidden lg:flex absolute w-full h-full overflow-hidden">
                {/* Moves with Initial Animation + Mouse (Smooth) */}
                <img
                    src={bg4}
                    alt="background image"
                    className="absolute -top-100 left-30 "
                    style={{
                        transform: `translate(${-smoothPosition.current.x - loadAnimation.x}px, ${-smoothPosition.current.y - loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                />
                {/* <img
                    src={bg3}
                    alt="background image"
                    className="absolute top-20 -right-30 opacity-50"
                    style={{
                        transform: `translate(${-smoothPosition.current.x - loadAnimation.x}px, ${-smoothPosition.current.y - loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                /> */}
                <img
                    src={bg1}
                    alt="background image"
                    className="absolute w-full h-full object-cover -top-5 -left-1  opacity-100 text-[#0004ea]"
                    style={{
                        transform: `translate(${smoothPosition.current.x + loadAnimation.x}px, ${smoothPosition.current.y + loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                />
                <img
                    src={bg2}
                    alt="background image"
                    className="absolute -top-200 -left-50 opacity-100"
                    style={{
                        transform: `translate(${smoothPosition.current.x + loadAnimation.x}px, ${smoothPosition.current.y + loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                />

                {/* Moves Opposite Direction (Smooth) */}


            </div>
            {/* for mobile device bg images */}
            <div className="lg:hidden ">
                <img
                    src={mbBg3}
                    alt="background image"
                    className="absolute top-20 left-50 w-full h-full object-cover opacity-75"
                    style={{
                        transform: `translate(${-smoothPosition.current.x - loadAnimation.x}px, ${-smoothPosition.current.y - loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                />

                <img
                    src={mbBg4}
                    alt="background image"
                    className="absolute bottom-50 -right-10 w-full h-full object-contain opacity-80"
                    style={{
                        transform: `translate(${-smoothPosition.current.x - loadAnimation.x}px, ${-smoothPosition.current.y - loadAnimation.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                />
            </div>

            {/* Diagonal Bottom Shape */}
            <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,100 100,10 100,100 0,100" fill="white" />
            </svg>

            {/* Content */}
            <div className="lg:w-3/5 w-4/5 mx-auto relative z-10  lg:block px-20">
                <h1 className="lg:w-[42rem] lg:text-7xl text-6xl font-semibold text-white">
                    Embrace the  Future of Finance
                </h1>
                <p className="mt-4 text-lg text-white max-w-[38rem] ">
                    Reimagine financial services with our open platform, distributed banking solutions that drive transformation.
                </p>
                <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 lg:block w-full lg:w-auto">
                    Reach Out to Us →
                </button>
            </div>
        </div>
    );
};

export default Banner;
