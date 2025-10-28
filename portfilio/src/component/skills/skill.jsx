import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

import './skill.css'

const Skills = () => {
  return (
    <>
      <h1 className="PageTittle">My Skills</h1>
      <div className="SkillWrapper">
        <div className="Skills">
          <div className="SkillItem">
            <FaHtml5 className="Icons" />
            <h3 className="IconTittle">Html</h3>
          </div>

          <div className="SkillItem">
            <FaCss3Alt className="Icons" />
            <h3 className="IconTittle">CSS</h3>
          </div>

          <div className="SkillItem">
            <FaJsSquare className="Icons" />
            <h3 className="IconTittle">JavaScript</h3>
          </div>

          <div className="SkillItem">
            <FaReact className="Icons" />
            <h3 className="IconTittle">React js</h3>
          </div>

          <div className="SkillItem">
            <RiBootstrapLine className="Icons" />
            <h3 className="IconTittle">Bootstrap</h3>
          </div>

          <div className="SkillItem">
            <RiTailwindCssFill className="Icons" />
            <h3 className="IconTittle">Tailwind</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills