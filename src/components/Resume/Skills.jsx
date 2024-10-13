import "./Resume.css";
import { motion } from "framer-motion";
import { FaNetworkWired, FaFileCode } from "react-icons/fa";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      className="skills"
    >
      <div className="skill-section">
        <div className="skill-sec-one">
          <div className="edu-details">
            <p className="edu-title">Features</p>
            <h2 className="edu-heading">
              IT Skills {""}
              <span className="inline-flex">
                <FaNetworkWired />
              </span>
            </h2>
          </div>
          <div className="mt-14 overflow-x-hidden">
            <p className="skill-paragraph">Microsoft Office</p>
            <span className="w-full h-[10px] inline-flex rounded-[10px] mt-[10px] bg-[#131517]">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[100%] h-full relative rounded-[10px] bg-gradient-to-r from-[#0575e6] to-[#16a085]"
              >
                <span className="absolute text-[#dadada] -top-7 right-0">
                  100%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="mt-14 overflow-x-hidden">
            <p className="skill-paragraph">Software - Hardware</p>
            <span className="w-full h-[10px] inline-flex rounded-[10px] mt-[10px] bg-[#131517]">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-[90%] h-full relative rounded-[10px] bg-gradient-to-r from-[#0575e6] to-[#16a085]"
              >
                <span className="absolute text-[#dadada] -top-7 right-0">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="mt-14 overflow-x-hidden">
            <p className="skill-paragraph">Networking (N+)</p>
            <span className="w-full h-[10px] inline-flex rounded-[10px] mt-[10px] bg-[#131517]">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-[80%] h-full relative rounded-[10px] bg-gradient-to-r from-[#0575e6] to-[#16a085]"
              >
                <span className="absolute text-[#dadada] -top-7 right-0">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="mt-14 overflow-x-hidden">
            <p className="skill-paragraph">Networking (mcsa)</p>
            <span className="w-full h-[10px] inline-flex rounded-[10px] mt-[10px] bg-[#131517]">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-[90%] h-full relative rounded-[10px] bg-gradient-to-r from-[#0575e6] to-[#16a085]"
              >
                <span className="absolute text-[#dadada] -top-7 right-0">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="mt-14 overflow-x-hidden">
            <p className="skill-paragraph">Command Line</p>
            <span className="w-full h-[10px] inline-flex rounded-[10px] mt-[10px] bg-[#131517]">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="w-[75%] h-full relative rounded-[10px] bg-gradient-to-r from-[#0575e6] to-[#16a085]"
              >
                <span className="absolute text-[#dadada] -top-7 right-0">
                  75%
                </span>
              </motion.span>
            </span>
          </div>
        </div>

        <div className="skill-sec-two">
          <div className="edu-details">
            <p className="edu-title">Features</p>
            <h2 className="edu-heading">
              Programming skills {""}
              <span className="inline-flex">
                <FaFileCode />
              </span>
            </h2>
          </div>
          <div className="mt-14 overflow-x-hidden">
            <p className="skill-paragraph">html</p>
            <span className="w-full h-[10px] inline-flex rounded-[10px] mt-[10px] bg-[#131517]">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full relative rounded-[10px] bg-gradient-to-r from-[#0575e6] to-[#16a085]"
              >
                <span className="absolute text-[#dadada] -top-7 right-0">
                  95%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="mt-14 overflow-x-hidden">
            <p className="skill-paragraph">css</p>
            <span className="w-full h-[10px] inline-flex rounded-[10px] mt-[10px] bg-[#131517]">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-[85%] h-full relative rounded-[10px] bg-gradient-to-r from-[#0575e6] to-[#16a085]"
              >
                <span className="absolute text-[#dadada] -top-7 right-0">
                  85%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="mt-14 overflow-x-hidden">
            <p className="skill-paragraph">javascript</p>
            <span className="w-full h-[10px] inline-flex rounded-[10px] mt-[10px] bg-[#131517]">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-[75%] h-full relative rounded-[10px] bg-gradient-to-r from-[#0575e6] to-[#16a085]"
              >
                <span className="absolute text-[#dadada] -top-7 right-0">
                  75%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="mt-14 overflow-x-hidden">
            <p className="skill-paragraph">framework (tailwind)</p>
            <span className="w-full h-[10px] inline-flex rounded-[10px] mt-[10px] bg-[#131517]">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-[90%] h-full relative rounded-[10px] bg-gradient-to-r from-[#0575e6] to-[#16a085]"
              >
                <span className="absolute text-[#dadada] -top-7 right-0">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="mt-14 overflow-x-hidden">
            <p className="skill-paragraph">react</p>
            <span className="w-full h-[10px] inline-flex rounded-[10px] mt-[10px] bg-[#131517]">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="w-[85%] h-full relative rounded-[10px] bg-gradient-to-r from-[#0575e6] to-[#16a085]"
              >
                <span className="absolute text-[#dadada] -top-7 right-0">
                  85%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
