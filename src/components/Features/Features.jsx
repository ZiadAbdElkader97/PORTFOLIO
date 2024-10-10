import "./Features.css";
import Title from "../Layouts/Title.jsx";
import FeaturesCard from "./FeaturesCard.jsx";
import { AiFillAppstore } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { GrUserManager, GrUserSettings } from "react-icons/gr";
import { MdOutlineSyncProblem } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function Features() {
  return (
    <section className="features" id="features">
      <Title title="Features" des="What I do" />
      <div className="feat-cards">
        <FeaturesCard
          title="Web Developer"
          des="I develop front-end websites and make them more beautiful and professional."
          icon={<AiFillAppstore />}
        />
        <FeaturesCard
          title="Software Engineering"
          des="I do software for devices and electronics and install programs."
          icon={<GrUserManager />}
        />
        <FeaturesCard
          title="Problem Solving"
          des="I have the ability to solve problems related to networks and programming languages."
          icon={<MdOutlineSyncProblem />}
        />
        <FeaturesCard
          title="It Project Management"
          des="I have the ability to manage companies and provide them with networking and electronics tools."
          icon={<GrUserSettings />}
        />
        <FeaturesCard
          title="Business Administration"
          des=" the work of managing an organization's resources, time and people."
          icon={<IoSettingsOutline />}
        />
        <FeaturesCard
          title="Modifying Codes"
          des="I have the ability to fix errors in writing the code and work on changing it and developing from it."
          icon={<FaCode />}
        />
      </div>
    </section>
  );
}
