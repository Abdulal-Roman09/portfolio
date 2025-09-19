import { Button } from "@/components/ui/button";
import React from "react";
import About from "./about/page";
import Project from "./projects/page";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Banner from "@/components/Banner";
import ContactPage from "./contact/page";
import Marquee from "@/components/Marquee";
import { CertificationCard } from "@/components/CertificationCard";
import CertificationContainer from "@/components/CertificationContainer";

const Home = () => {
  return (
    <>
      <div className="pt-10">
        <Banner />
        <About />
        <Marquee/>
        <Skills />
        <Education />
        {/* <CertificationCard/> */}
        <CertificationContainer/>
        <Project />
        <ContactPage/>
      </div>
    </>
  );
};

export default Home;
