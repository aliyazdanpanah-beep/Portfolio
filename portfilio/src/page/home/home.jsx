import Prog from "../../component/project/project";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import Skills from "../../component/skills/skill";
import About from "../../component/about/about";

const Home = () => {
  const [prog, setProg] = useState([])

  useEffect(() => {
    setProg([
      axios.get("http://localhost:3000/prog").then((res) => {
        setProg(res.data.data)
      })
    ])
  }, [])
  return (
    <section className="container">
      <div className="MenuIcon">
        <div className="MenuLine"></div>
        <div className="MenuLine"></div>
      </div>
      <div className="hero">
        <h2>wellcom to Portfolio</h2>
      </div>
      <div className="prog">
        <div className="TittleWrapper">
          <h3 className="pageTittle">My project</h3>
        </div>
        {prog.map((Progs) => (
          <Prog key={Progs.id} Progs={Progs} />
        ))}
      </div>
      <div className="skillPage">
        <Skills />
      </div>
      <div className="AboutPage">
        <About />
      </div>
    </section>
  );
};

export default Home;
