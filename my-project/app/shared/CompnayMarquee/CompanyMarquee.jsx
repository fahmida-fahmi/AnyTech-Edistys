import React, { useState, useRef } from "react";
// companies 

import bankOfChengde from "../../Assets/companies/bankOfChengde.webp";
import bankOfChina from "../../Assets/companies/bankOfChina.webp";
import bankOfShanghai from "../../Assets/companies/bankOfShanghai.webp";
import cardCenter from "../../Assets/companies/cardCenter.webp";
import CGB from "../../Assets/companies/CGB.webp";
import chinaCiticBank from "../../Assets/companies/chinaCiticBank.webp";
import connectingTheDots from "../../Assets/companies/connectingTheDots.webp";
import onBank from "../../Assets/companies/onBank.webp";
import pingBank from "../../Assets/companies/pingBank.webp";
import postalSavingBank from "../../Assets/companies/postalSavingBank.webp";
import ShardongCity from "../../Assets/companies/ShardongCity.webp";
import spdBank from "../../Assets/companies/spdBank.webp";
import VipFinance from "../../Assets/companies/VipFinance.webp";
import xiamanBank from "../../Assets/companies/xiamanBank.webp";
import xw from "../../Assets/companies/xw.webp";
// import Companies from '../Home/TrustedSect/Companies';




const CompanyMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);
  const companies = [
    { name: "Bank of Chengde", image: `${bankOfChengde}` },
    { name: "Bank of China", image: `${bankOfChina}` },
    { name: "Bank of Shanghai", image: `${bankOfShanghai}` },
    { name: "CGB", image: `${CGB}` },
    { name: "China Citic Bank", image: `${chinaCiticBank}` },
    { name: "OnBank", image: `${onBank}` },
    { name: "Ping Bank", image: `${pingBank}` },
    { name: "Postal Saving Bank", image: `${postalSavingBank}` },
    { name: "Connecting The Dots", image: `${connectingTheDots}` },
    { name: "Shardong City", image: `${ShardongCity}` },
    { name: "Vip Finance", image: `${VipFinance}` },
    { name: "Xiaman Bank", image: `${xiamanBank}` },
    { name: "XW", image: `${xw}` },
    { name: "SPD Bank", image: `${spdBank}` },
    { name: "Card Center", image: `${cardCenter}` },
];

  return (
    <div className="overflow-hidden relative w-full  py-20">
      <div
        ref={marqueeRef}
        className={`flex items-center space-x-10 whitespace-nowrap transition-transform ${
          isPaused ? "pause-animation" : "animate-marquee"
        }`}
      >
        {companies.concat(companies).map((company, index) => (
          <img
            key={index}
            src={company.image}
            alt={company.name}
            className="h-16 w-auto object-cover cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />
        ))}
      </div>

      {/* Add CSS styles */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CompanyMarquee;
