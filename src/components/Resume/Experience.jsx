import "./Resume.css";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { FaUserTie } from "react-icons/fa";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      className="experience"
    >
      <div className="edu-details">
        <p className="edu-title">2018 - Now</p>
        <h2 className="edu-heading">
          Job Experience {""}
          <span className="inline-flex">
            <FaUserTie />
          </span>
        </h2>
      </div>
      <div className="edu-res-card">
        <ResumeCard
          title="Computer Engineer"
          subTitle="Freelancer (2021 - Now)"
          result="Cairo"
          des="I Worked as a Computer and Network Engineer in Many Institutions and
            Companies ... and have more than 5 years of experience in the field."
        />
        <ResumeCard
          title="Accountant"
          subTitle="Al-Amir for Trading (2022 - 2024)"
          result="Obour"
          des="I Worked as an Accountant in the Company and had Experience in 
            Inventory Accounts ... and have Experience in Microsoft AX System."
        />
        <ResumeCard
          title="IT Help Desk"
          subTitle="Ivision Company (2018 - 2020)"
          result="New Elnozha"
          des="I Worked for an Active company in the IT department because I have
            little experience in the field for a period of nine months."
        />
      </div>
    </motion.div>
  );
}
