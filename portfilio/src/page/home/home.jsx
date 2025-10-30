import Prog from "../../component/project/project";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import Skills from "../../component/skills/skill";
import About from "../../component/about/about";
import Menu from "../../component/menu/menu";

const Home = () => {
  return (
    <section className="container">
      <Menu />
      <div id="home" className="hero">
        <h2>wellcom to Portfolio</h2>
      </div>
      <div id="projects" className="prog">
        <div className="TittleWrapper">
          <h3 className="pageTittle">My project</h3>
        </div>
        <div className="Prog">
          <Prog />
        </div>
      </div>
      <div id="skills" className="skillPage">
        <Skills />
      </div>
      <div id="about" className="AboutPage">
        <About />
      </div>
    </section>
  );
};

export default Home;