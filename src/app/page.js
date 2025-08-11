import { Button } from "@/components/ui/button";
import React from "react";
import About from "./about/page";
import Project from "./projects/page";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Banner from "@/components/Banner";
import ContactPage from "./contact/page";

const Home = () => {
  return (
    <>
      <div className="py-20">
        <Banner />
        <About />
        <Skills />

        <Education />
        <Project />
        <ContactPage/>
      </div>
    </>
  );
};

export default Home;
