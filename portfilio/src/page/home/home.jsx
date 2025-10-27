import Prog from "../../component/project/project";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

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
      <div className="hero">
        <h2>wellcom to Portfilio</h2>
      </div>
      <div className="prog">
        {prog.map((Progs) => (
          <Prog key={Progs.id} Progs={Progs} />
        ))}
      </div>
    </section>
  );
};

export default Home;
