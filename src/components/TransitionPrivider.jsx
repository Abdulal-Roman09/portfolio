"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import Navber from "./Navber";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionPrivider = ({ children }) => {
    const pathName=usePathname()
  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ 
            height: "0vh",
          }}
          exit={{ height: "200vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <Navber />
        <div className="pt-16 container mx-auto">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionPrivider;
