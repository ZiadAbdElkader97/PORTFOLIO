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
          des="I develop front-end websites and make them more beautiful and professional."
          icon={<GrUserManager />}
        />
        <FeaturesCard
          title="Problem Solving"
          des="I develop front-end websites and make them more beautiful and professional."
          icon={<MdOutlineSyncProblem />}
        />
        <FeaturesCard
          title="It Project Management"
          des="I develop front-end websites and make them more beautiful and professional."
          icon={<GrUserSettings />}
        />
        <FeaturesCard
          title="Business Administration"
          des="I develop front-end websites and make them more beautiful and professional."
          icon={<IoSettingsOutline />}
        />
        <FeaturesCard
          title="Modifying Codes"
          des="I develop front-end websites and make them more beautiful and professional."
          icon={<FaCode />}
        />
      </div>
    </section>
  );
}
