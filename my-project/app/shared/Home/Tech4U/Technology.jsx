import React from 'react';
import Header from '../../Header/Header';

const Technology = () => {
    const tabItems = ['customer focused', 'agile and adaptable', 'compliance ready', 'secure and safe']
    const tabContent =
        [
            {
                "title": "CUSTOMER FOCUSED",
                "subtitle": "Purpose-built financial services",
                "description": "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
                "extra_info": "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
                "image": "path/to/customer-focused-image.jpg"
            },
            {
                "title": "AGILE AND ADAPTABLE",
                "subtitle": "Agile and adaptable for growth",
                "description": "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance, and performance.",
                "extra_info": "Optimize your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing, and lending.",
                "image": "path/to/agile-adaptable-image.jpg"
            },
            {
                "title": "COMPLIANCE READY",
                "subtitle": "Manage compliance with ease",
                "description": "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
                "extra_info": "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
                "image": "path/to/compliance-ready-image.jpg"
            },
            {
                "title": "SECURE AND SAFE",
                "subtitle": "Highly secure and safe",
                "description": "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
                "extra_info": "Join over 40 esteemed FIs, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
                "image": "path/to/secure-safe-image.jpg"
            }
        ]

    return (
        <div className='xl:w-3/5 sm:w-4/5 mx-auto py-15 text-center'>
            <Header
                subHeading={"Technology built for you"}
                Heading={"The future of finance"}

            />


            {/* Tabs */}




            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    {
                        // Tabs
                        tabItems.map((tab, index) => {
                            return (
                                <li key={index} className="me-2" role="presentation">
                                    <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">{tab}</button>
                                </li>
                            )
                        }
                        )

                    }
                </ul>
            </div>
            <div id="default-tab-content">

                {
                    tabContent.map((content, index) => {
                        return (
                            <div key={index} className="hidden" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="text-left">
                                        <h1 className="text-2xl font-bold text-[#0b305b] py-5">{content.title}</h1>
                                        <h2 className="text-lg font-bold text-[#0b305b] py-5">{content.subtitle}</h2>
                                        <p className="text-[#0b305b] font-medium text-[15px]">{content.description}</p>
                                        <p className="text-[#0b305b] font-medium text-[15px]">{content.extra_info}</p>
                                    </div>
                                    <div className="text-center">
                                        <img src={content.image} alt={content.title} />
                                    </div>
                                </div>
                            </div>
                            
                        //     <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        //     <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        // </div>
                        )
                    }
                    )
                }
            </div>

        </div>
    );
};

export default Technology;