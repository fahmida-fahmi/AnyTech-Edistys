import React, { useState, useEffect, useRef } from "react";
import bg1 from "../../Assets/backgrounds/WaveLinesDesktop1.svg";
import bg2 from "../../Assets/backgrounds/WaveLinesDesktop2.svg";

// import bgImage from "../../../Assets/imgs/man.jpg";

const Legacy = () => {
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
        <div className="relative h-[58vh]  flex items-center justify-center overflow-hidden">

            <div
                className="hidden lg:flex absolute inset-0 opacity-100 w-full h-full"
                style={{
                    clipPath: 'polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%)',
                    background: "radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
                }}
            ></div>
            <div
                className=" lg:hidden absolute inset-0 opacity-100 w-full h-full"
                style={{
                    clipPath: 'polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%)',
                    background: "radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
                }}
            ></div>


            {/* for mobile device  */}


            {/* for mobile device bg images */}
            {/* <div className="lg:hidden ">
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
            </div> */}

            {/* Overlay Elements desktop*/}
            <div className="relative">

                <div className=" hidden lg:flex  w-full h-full overflow-hidden">
                    {/* Moves with Initial Animation + Mouse (Smooth) */}

                    <div
                        className="absolute w-full h-full object-cover -top-10 opacity-100 z-50"
                        style={{
                            backgroundImage: `url(${bg1})`, // Set background image
                            backgroundSize: "cover", // Ensures the image covers the whole div
                            backgroundPosition: "center", // Centers the image
                            backgroundRepeat: "no-repeat", // Prevents image repetition
                            transform: `translate(${smoothPosition.current.x + loadAnimation.x}px, ${smoothPosition.current.y + loadAnimation.y}px)`,
                            transition: "transform 0.3s ease-out",
                        }}
                    ></div>

                    <img
                        src={bg2}
                        alt="background image"
                        className="absolute  opacity-100 overflow-hidden"
                        style={{
                            transform: `translate(${smoothPosition.current.x + loadAnimation.x}px, ${smoothPosition.current.y + loadAnimation.y}px)`,
                            transition: "transform 0.3s ease-out",
                        }}
                    />

                    {/* Moves Opposite Direction (Smooth) */}


                </div>
            </div>


            {/* Content */}
            <div className="relative xl:w-3/5 w-3/4 mx-auto z-10 mt-20 text-white px-6 flex flex-col justify-between lg:block">
                <h1 className=" text-xl lg:text-6xl font-bold">Legacy no longer</h1>
                <p className="py-2 lg:py-8 text-sm lg:text-[18px]">
                    Talk to us to find out how we can transform your organization for the future.
                </p>
                <button className="text-sm lg:text-lg mt-6 font-semibold bg-orange-500 px-10 py-3 rounded-sm shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Contact Us →
                </button>
            </div>
        </div>
    );
};

export default Legacy;
