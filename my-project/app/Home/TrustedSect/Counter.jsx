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
      className="lg:text-7xl text-5xl font-semibold text-[#065fc4] lg:pb-5"
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
    <div className=" pb-20">
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 md:flex-row justify-between items-center gap-10 ">
        <div className="text-center lg:text-left lg:block flex justify-between items-center lg:border-0 border-b border-dashed pb-5 border-sky-200">
          <Counter value={20} prefix=">" />
          <p className="text-lg  text-[#0b305b]">Years of Experience</p>
        </div>
        <div className="text-center lg:text-left lg:block flex justify-between items-center lg:border-0 border-b border-dashed pb-5 border-sky-200">
          <Counter value={40} suffix="+" prefix="" />
          <p className="text-lg text-[#0b305b]">Financial Institutions</p>
        </div>
        <div className="text-center lg:block flex justify-between items-center lg:border-0 border-b border-dashed pb-5 border-sky-200">
          <Counter value={200} suffix="m" prefix=">" />
          <p className="text-lg text-[#0b305b]">Customers Each</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
