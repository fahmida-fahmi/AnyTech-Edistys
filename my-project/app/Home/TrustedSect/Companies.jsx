import React from "react";
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

const Companies = () => {
  return (
    <div className="w-full py-10">
      <div className="grid  grid-cols-3 lg:grid-cols-5 gap-15">
        {companies.map((company, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={`${company.image}`}
              alt={company.name}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
