"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Navber from "./Navber";
import { usePathname } from "next/navigation";
import Footer from "./Fotter";

const TransitionPrivider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName} 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="min-h-screen flex flex-col"
      >
      
        <motion.div
          className="fixed h-screen w-screen bg-black rounded-b-[100px] z-40"
          animate={{ height: ["100vh", "0vh"] }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <Navber />
      
        <div className="flex-grow flex justify-center items-center px-4  container mx-auto">
          {children}
        </div>
        <Footer/>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionPrivider;
