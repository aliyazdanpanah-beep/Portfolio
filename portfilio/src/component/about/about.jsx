import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutContainer">
          <div className="AboutSection">
            <p className="AboutEmail">ali.yazdanpanahfard@gmail.com</p>
            <p className="AboutRole">Frontend Developer</p>
          </div>

          <div className="AboutSection">
            <div className="ConnectWrapper">
              <div className="SocialIcons">
                <Link to="https://github.com/aliyazdanpanah-beep" className="SocialLink">
                  <FaGithub className="Icon" />
                </Link>
                <Link to="https://www.linkedin.com/in/ali-yazdanpanah-79787a2a3/" className="SocialLink">
                  <FaLinkedin className="Icon" />
                </Link>
              </div>
              <p className="PhoneNumber">+98 993 100 1382</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;