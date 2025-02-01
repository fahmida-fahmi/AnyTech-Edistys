import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counter = ({ value, suffix, prefix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 50);

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);
      
      return () => clearInterval(counter);
    }
  }, [inView, value]);

  return (
    <motion.div 
      ref={ref} 
      className="text-8xl font-medium text-[#065fc4] pb-5"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {prefix}{count}{suffix}
    </motion.div>
  );
};

const Statistics = () => {
  return (
    <div className=" px-20 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 ">
        <div className="text-center">
          <Counter value={20} prefix=">" />
          <p className="text-lg text-[#0b305b]">Years of Experience</p>
        </div>
        <div className="text-center">
          <Counter value={40} suffix="+" prefix="" />
          <p className="text-lg text-[#0b305b]">Financial Institutions</p>
        </div>
        <div className="text-center">
          <Counter value={200} suffix="m" prefix=">" />
          <p className="text-lg text-[#0b305b]">Customers Each</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
