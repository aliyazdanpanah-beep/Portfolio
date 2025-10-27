import Prog from "../../component/project/project";
import { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [prog, setProg] = useState([])
  return (
    <section className="container">
      <div className="hero">
        <h2>wellcom to Portfilio</h2>
      </div>
      <div className="prog">
        <Prog />
      </div>
    </section>
  );
};

export default Home;
