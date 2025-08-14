import { Button } from "@/components/ui/button";
import React from "react";
import About from "./about/page";
import Project from "./projects/page";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Banner from "@/components/Banner";
import ContactPage from "./contact/page";
import Marquee from "@/components/Marquee";

const Home = () => {
  return (
    <>
      <div className="pt-10">
        <Banner />
        <About />
        <Marquee/>
        <Skills />

        <Education />
        <Project />
        <ContactPage/>
      </div>
    </>
  );
};

export default Home;
