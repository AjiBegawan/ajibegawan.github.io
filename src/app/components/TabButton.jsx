import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: {
    width: 0,
  },
  active: {
    width: "calc(100% - .75rem)",
  },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClesses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClesses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-blue-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
