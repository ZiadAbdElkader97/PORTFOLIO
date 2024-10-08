import { useState } from "react";
import "./Resume.css";
import Title from "../Layouts/Title";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import CV from "./CV";

export default function Resume() {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [expData, setExpData] = useState(false);
  const [cvData, setCvData] = useState(false);
  return (
    <section className="resume" id="resume">
      <div className="resume-title">
        <Title title="7+ Years of Experience" des="My Resume" />
      </div>
      <div>
        <ul className="resume-ul">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExpData(false) &
              setCvData(false)
            }
            className={`${
              educationData
                ? "border-[#16a085] rounded-lg"
                : "border-transparent"
            } resume-li`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExpData(false) &
              setCvData(false)
            }
            className={`${
              skillData ? "border-[#16a085] rounded-lg" : "border-transparent"
            } resume-li`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExpData(true) &
              setCvData(false)
            }
            className={`${
              expData ? "border-[#16a085] rounded-lg" : "border-transparent"
            } resume-li`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExpData(false) &
              setCvData(true)
            }
            className={`${
              cvData ? "border-[#16a085] rounded-lg" : "border-transparent"
            } resume-li`}
          >
            Download CV
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {expData && <Experience />}
      {cvData && <CV />}
    </section>
  );
}
