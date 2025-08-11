import { Button } from "@/components/ui/button";
import React from "react";
import About from "./about/page";
import Project from "./projects/page";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Banner from "@/components/Banner";

const Home = () => {
  return (
    <div className="py-20">
     
      <About />
      <Skills />
      <Project />
      <Education/>
    
    </div>
  );
};

export default Home;
