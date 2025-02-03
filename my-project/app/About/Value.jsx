import React from 'react';
import Header from '../shared/Header/Header';
import fireImg from '../Assets/values/fire.svg'
import globalImg from '../Assets/values/earth.svg'
import currentImg from '../Assets/values/current.svg'
import groupImg from "../Assets/values/group.svg";

const Value = () => {
    const valueCard = [
        {
            "img": `${fireImg}`,
            "title": "Driven",
            "description": "Motivated by a desire for change, we empower our customers by tenaciously striving for breakthroughs in financial services."
        },
        {
            "img": `${currentImg}`,
            "title": "Agile",
            "description": "Our agility helps us stay one step ahead, where we embrace change and swiftly adapt in order to deliver cutting-edge solutions."
        },
        {
            "img": `${globalImg}`,
            "title": "Global",
            "description": "We think beyond borders, with a commitment to creating financial technological solutions that empower banks and financial institutions across the world."
        },
        {
            "img": `${groupImg}`,
            "title": "Open",
            "description": "In a world of possibilities, our openness leads us to discover new ideas, fostering creativity and inspiring transformative solutions."
        }
    ]

    return (
        <div className='lg:w-3/5 w-4/5 mx-auto'>
            <Header
                subHeading={'OUR VALUES'}
                Heading={"Built in our core"}
            />
            <div className=''>
                <div className='lg:grid lg:grid-cols-4 lg:gap-10 py-20'>
                    {
                        valueCard.map((card, index) => (
                            <div key={index}>
                                <div className=''>

                                    <img src={card.img} alt={card.title} />
                                </div>
                                <h2 className='text-4xl font-semibold py-5 text-[#01064e]'>{card.title}</h2>

                                <p className='text-sky-900 text-[15px] font-medium'>{card.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Value;