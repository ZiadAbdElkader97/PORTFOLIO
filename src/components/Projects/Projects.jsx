import "./Projects.css";
import Title from "../Layouts/Title";
import ProjectsCard from "./ProjectsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import proImg1 from "../../assets/ecommerce-app.jpg";
import proImg2 from "../../assets/food-app.png";
import proImg3 from "../../assets/todo-app.png";
import proImg4 from "../../assets/educational-app.jpg";
import proImg5 from "../../assets/prayer-app.jpg";
import proImg6 from "../../assets/real-estate-app.jpeg";
import proImg7 from "../../assets/Shop-app.png";
import proImg8 from "../../assets/Travel-and-Tour-App.jpg";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="projects" id="projects">
      <div className="pro-title">
        <Title
          title="Visit My Portfolio and Keep Your Feedback"
          des="My Projects"
        />
      </div>
      <div>
        <Slider {...settings}>
          <ProjectsCard
            title="E-Commerce App"
            des="It was Designed by Me to Enable the Buying and Selling
            process to take place through it
            .. and enjoy The Easiest Payment Methods."
            img={proImg1}
            gitHub={
              <a href="http://google.com" target="_blank">
                <FaGithub />
              </a>
            }
            view={
              <a href="http://google.com" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          <ProjectsCard
            title="Food App"
            des="Enjoy The Best Food in The World and Order through
            Our Application and We Will Receive it Immediately."
            img={proImg2}
            gitHub={
              <a href="http://google.com" target="_blank">
                <FaGithub />
              </a>
            }
            view={
              <a href="http://google.com" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          <ProjectsCard
            title="Todo App"
            des="Go through your Day Easily With the My Notes Website
            ... to Record The Most Important Notes and Tasks Easily."
            img={proImg3}
            gitHub={
              <a href="http://google.com" target="_blank">
                <FaGithub />
              </a>
            }
            view={
              <a href="http://google.com" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          <ProjectsCard
            title="Educational App"
            des="Software Designed Specifically to Enhance and Simplify
            The Learning Process and Provide Additional Features For users."
            img={proImg4}
            gitHub={
              <a href="http://google.com" target="_blank">
                <FaGithub />
              </a>
            }
            view={
              <a href="http://google.com" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          <ProjectsCard
            title="Prayer App"
            des="Smart App With All the Daily needs of every Muslim,
            such as the Athan, Prayer Times in all countries in The World."
            img={proImg5}
            gitHub={
              <a href="http://google.com" target="_blank">
                <FaGithub />
              </a>
            }
            view={
              <a href="http://google.com" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          <ProjectsCard
            title="Real Estate App"
            des="The real estate market is highly digitized.
            Homebuyers no longer go from one agent to another to find a suitable property."
            img={proImg6}
            gitHub={
              <a href="http://google.com" target="_blank">
                <FaGithub />
              </a>
            }
            view={
              <a href="http://google.com" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          <ProjectsCard
            title="Shop App"
            des="Buy the Best and Most Beautiful Types of Coffee
            in The World ... Enjoy and Taste it Well."
            img={proImg7}
            gitHub={
              <a href="http://google.com" target="_blank">
                <FaGithub />
              </a>
            }
            view={
              <a href="http://google.com" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          <ProjectsCard
            title="Travel and Tour App"
            des="Find flight deals, book vacation homes, reserve camping sites,
            and know where to pull off the road with the top travel apps."
            img={proImg8}
            gitHub={
              <a href="http://google.com" target="_blank">
                <FaGithub />
              </a>
            }
            view={
              <a href="http://google.com" target="_blank">
                <FaGlobe />
              </a>
            }
          />
        </Slider>
      </div>
    </section>
  );
}
