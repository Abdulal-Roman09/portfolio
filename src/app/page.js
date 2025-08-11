import { Button } from "@/components/ui/button";
import React from "react";
import About from "./about/page";
import Project from "./projects/page";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div>
      <About />
      <Skills />
      <Project />
    </div>
  );
};

export default Home;
