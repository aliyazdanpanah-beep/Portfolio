import Prog from "../../component/project/project";
import "./home.css";

const Home = () => {
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
