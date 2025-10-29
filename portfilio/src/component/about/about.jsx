import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutWrapper">
          <p>ali.yazdanpanahfard@gmail.com</p>
          <p>Frontend Developer</p>
        </div>
        <div className="AboutWrapper">
          <div className="Conect">
            <Link> <FaGithub /> </Link>
            <Link> <FaLinkedin /> </Link>
            <p>+98 993 100 1382</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About