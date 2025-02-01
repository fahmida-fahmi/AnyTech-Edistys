import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../Header/Header";
import customerImg from "../../../Assets/tech/cumt.avif";
import agileImg from "../../../Assets/tech/agile.avif";
import complianceImg from "../../../Assets/tech/compliance.avif";
import secImg from "../../../Assets/tech/sec.avif";

const Technology = () => {
    const tabItems = ["Customer Focused", "Agile and Adaptable", "Compliance Ready", "Secure and Safe"];
    const tabContent = [
        {
            title: "CUSTOMER FOCUSED",
            subtitle: "Purpose-built financial services",
            description: "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
            extra_info: "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
            image: customerImg,
        },
        {
            title: "AGILE AND ADAPTABLE",
            subtitle: "Agile and adaptable for growth",
            description: "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance, and performance.",
            extra_info: "Optimize your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing, and lending.",
            image: agileImg,
        },
        {
            title: "COMPLIANCE READY",
            subtitle: "Manage compliance with ease",
            description: "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
            extra_info: "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
            image: complianceImg,
        },
        {
            title: "SECURE AND SAFE",
            subtitle: "Highly secure and safe",
            description: "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
            extra_info: "Join over 40 esteemed FIs, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
            image: secImg,
        },
    ];

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % tabContent.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleDragEnd = (_, info) => {
        if (info.offset.x < -50) {
            setDirection(1);
            setIndex((prev) => (prev + 1) % tabContent.length);
        } else if (info.offset.x > 50) {
            setDirection(-1);
            setIndex((prev) => (prev - 1 + tabContent.length) % tabContent.length);
        }
    };

    return (
        <div className="xl:w-3/5 sm:w-4/5 mx-auto py-15 text-center">
            <Header subHeading="Technology built for you" Heading="The future of finance" />

            {/* Tabs */}
            <div className="my-6 hidden lg:block">
                <ul className="flex flex-wrap justify-between text-center">
                    {tabItems.map((tab, idx) => (
                        <li key={idx} className="mx-3">
                            <button
                                className={`px-10 text-[18px] py-3 text-[#1080e2] cursor-pointer transition-all duration-300 rounded-full font-semibold ${index === idx
                                    ? "bg-[#b9d9ff]"
                                    : "border-transparent hover:bg-[#f5faff] hover:text-[#0b305b]"
                                    }`}
                                onClick={() => setIndex(idx)}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tab Content */}
            <div className="relative w-full h-84 sm:h-80 md:h-96 lg:h-[550px] overflow-hidden  mt-10 rounded-xl shadow-lg">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={index}
                        className=" text-white text-2xl font-bold p-15"
                        initial={{ x: direction === 1 ? "100%" : "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: direction === 1 ? "-100%" : "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                    >
                        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                            <div className="text-left ">
                                <h1 className="text-[15px] tracking-widest font-bold text-[#1080e2] ">
                                    {tabContent[index].title}
                                </h1>
                                <h2 className="text-[40px] font-semibold text-[#0b305b] py-5">
                                    {tabContent[index].subtitle}
                                </h2>
                                <p className="text-[#0b3b5b] font-semibold text-[16px] py-5 pr-5">
                                    {tabContent[index].description}
                                </p>
                                <p className="text-[#0b305b] font-medium text-[15px] pb-10 pr-5">
                                    {tabContent[index].extra_info}
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <img className="w-full lg:max-w-lg lg:h-[400px] object-cover rounded-2xl shadow-md" src={tabContent[index].image} alt={tabContent[index].title} />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Technology;
