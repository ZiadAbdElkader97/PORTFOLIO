import "./Resume.css";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { FaUserGraduate } from "react-icons/fa6";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      className="education"
    >
      <div className="edu-details">
        <p className="edu-title">2016 - 2021</p>
        <h2 className="edu-heading">
          Education Quality {""}
          <span className="inline-flex">
            <FaUserGraduate />
          </span>
        </h2>
      </div>
      <div className="edu-res-card">
        <ResumeCard
          title="Bachelor of Commerce"
          subTitle="Ain Shams University (2016 - 2021)"
          result="3.90/4"
          des="I got a bachelor's degree from the Department of Accounting,
          and I was studying at Ain Shams University , Faculty of Commerce."
        />
        <ResumeCard
          title="High School"
          subTitle="Al-Marj Secondary School (2013 - 2015)"
          result="4.75/5"
          des="I got a high school diploma in the scientific
          section of Maths and I graduated in 2015."
        />
      </div>
    </motion.div>
  );
}
