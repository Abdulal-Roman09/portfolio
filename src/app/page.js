import { Button } from "@/components/ui/button";
import React from "react";
import About from "./about/page";
import Project from "./projects/page";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Banner from "@/components/Banner";
import ContactPage from "./contact/page";
import Marquee from "@/components/Marquee";
import CertificationContainer from "@/components/CertificationContainer";
import ProjectsContainer from "@/components/ProjectsContainer";
import { projects } from "../app/data/projects";

const Home = () => {
  return (
    <>
      <div className="pt-10">
        <Banner />
        <About />
        <Marquee />
        <Skills />
        <Education />
        <CertificationContainer />
        <ProjectsContainer projects={projects} />
        <ContactPage />
      </div>
    </>
  );
};

export default Home;
