"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import Navber from "./Navber";
import { motion } from "framer-motion";

const TransitionPrivider = ({ children }) => {
  return (
    <AnimatePresence>
      <div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{
            height: "0vh",
          }}
          exit={{height:"100vh"}}
          transition={{duration:0.3,ease:"easeInOut"}}
        />
        <Navber />
        <div className="p-5 container mx-auto">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionPrivider;
