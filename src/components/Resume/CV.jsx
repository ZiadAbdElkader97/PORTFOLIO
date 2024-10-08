import "./Resume.css";
import { motion } from "framer-motion";
import { TbFileCv } from "react-icons/tb";
import { FaDownload } from "react-icons/fa";

export default function CV() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      className="cv"
    >
      <div className="edu-details">
        <p className="edu-title">Download</p>
        <h2 className="edu-heading">
          Download My CV {""}
          <span className="inline-flex">
            <TbFileCv />
          </span>
        </h2>
      </div>
      <div className="mt-12">
        <a
          className="cv-link"
          target="_blank"
          href="https://drive.google.com/file/d/1he11VLt6DbEnZc_OLaEGmfJzcybqVA7T/view?usp=drive_link"
        >
          <FaDownload />
        </a>
      </div>
    </motion.div>
  );
}
