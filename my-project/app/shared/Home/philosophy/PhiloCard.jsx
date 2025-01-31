import React from 'react';
import card1  from "../../../Assets/philosophy/card1.svg";
import card2  from "../../../Assets/philosophy/card2.avif";
import card3  from "../../../Assets/philosophy/card3.svg";
const PhiloCard = () => {

    const cardDate = [
        {
            "title": "Full-suite solutions",
            "description": "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
            "image": `${card1}`
        },
        {
            "title": "Simplify the complex",
            "description": "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
            "image": `${card2}`
        },
        {
            "title": "Cutting-edge tech",
            "description": "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
            "image": `${card3}`
        }
    ]

    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                cardDate.map((card, index) => {
                    return (
                        <div key={index} className='bg-[#f8fcff] rounded-2xl shadow-md p-10'>
                            <div className=''>
                                <img src={card.image} alt={card.title} />
                            </div>
                            <div className=''>
                                <h1 className='text-2xl font-bold text-[#0b305b] py-5'>{card.title}</h1>
                                <p className='text-[#0b305b] font-medium text-[15px]'>{card.description}</p>
                            </div>
                        </div>
                    )
                }
            )
            }
        </div>
    );
};

export default PhiloCard;