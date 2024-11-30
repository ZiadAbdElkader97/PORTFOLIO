import "./Projects.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ProjectsCard from "./ProjectsCard";
import Title from "../Layouts/Title";
import { FaGithub, FaGlobe } from "react-icons/fa";
import proImg1 from "../../assets/ecommerce-app.jpg";
import proImg2 from "../../assets/food-app.jpg";
import proImg3 from "../../assets/todo-app.jpg";
// import proImg4 from "../../assets/educational-app.jpg";
// import proImg5 from "../../assets/prayer-app.jpg";
import proImg6 from "../../assets/calculator-app.jpg";
import proImg7 from "../../assets/movie-app.jpg";
// import proImg8 from "../../assets/Travel-and-Tour-App.jpg";

export default function Projects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
        <Carousel responsive={responsive}>
          {/* E-Commerce App */}
          <ProjectsCard
            title="e-commerce app - pixio shop"
            des="It was Designed by Me to Enable the Buying and Selling
            process to take place through it
            .. and enjoy The Easiest Payment Methods."
            img={proImg1}
            gitHub={
              <a
                href="https://github.com/ZiadAbdElkader97/CommerceApp"
                target="_blank"
              >
                <FaGithub />
              </a>
            }
            view={
              <a href="https://commerce-app-ten.vercel.app/" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          {/* Food App */}
          <ProjectsCard
            title="food app - food palace"
            des="Enjoy The Best Food in The World and Order through
            Our Application and We Will Receive it Immediately."
            img={proImg2}
            gitHub={
              <a
                href="https://github.com/ZiadAbdElkader97/FoodApp"
                target="_blank"
              >
                <FaGithub />
              </a>
            }
            view={
              <a href="https://food-app-nine-silk.vercel.app/" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          {/* Todo App */}
          <ProjectsCard
            title="todo app - record notes"
            des="Go through your Day Easily With the My Notes Website
            ... to Record The Most Important Notes and Tasks Easily."
            img={proImg3}
            gitHub={
              <a
                href="https://github.com/ZiadAbdElkader97/TodoApp"
                target="_blank"
              >
                <FaGithub />
              </a>
            }
            view={
              <a href="https://todo-app-plum-zeta.vercel.app/" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          {/* <ProjectsCard
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
          /> */}
          {/* <ProjectsCard
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
          /> */}
          {/* Calculator App */}
          <ProjectsCard
            title="calculator app"
            des="You are now able to calculate all your mathematical operations quickly and easily.
            A calculator is a device that performs arithmetic operations on numbers."
            img={proImg6}
            gitHub={
              <a href="https://github.com/ZiadAbdElkader97/CalculatorApp" target="_blank">
                <FaGithub />
              </a>
            }
            view={
              <a href="https://calculator-app-eight-brown.vercel.app/" target="_blank">
                <FaGlobe />
              </a>
            }
          />
          {/* Movie App */}
          <ProjectsCard
            title="Movie App - Netflix Clone"
            des="Need something to watch? We’re on it.
            Plex combines free movies & TV with the best free streaming services."
            img={proImg7}
            gitHub={
              <a
                href="https://github.com/ZiadAbdElkader97/MovieApp-Netflix"
                target="_blank"
              >
                <FaGithub />
              </a>
            }
            view={
              <a
                href="https://movie-app-pink-six-39.vercel.app/"
                target="_blank"
              >
                <FaGlobe />
              </a>
            }
          />
          {/* <ProjectsCard
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
          /> */}
        </Carousel>
      </div>
    </section>
  );
}
