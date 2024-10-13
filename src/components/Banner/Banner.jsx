import "./Banner.css";
import profileImg from "../../assets/me-profile.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaReact,
  FaFigma,
  FaInstagram,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Banner() {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Front End Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section className="banner" id="home">
      <div className="banner-img lgl:w-1/2">
        <img
          src={profileImg}
          className="main-img lgl:w-[550px] lgl:h-[600px]"
          alt="banner-img"
        />
        <div className="bg-img"></div>
      </div>
      <div className="banner-details lgl:w-1/2">
        <div className="banner-info">
          <h4 className="banner-h4">Welcome To My World</h4>
          <h1 className="banner-h1">
            Hi, I’m <span className="banner-span">Ziad Abd Elkader</span>
          </h1>
          <h2 className="banner-h2">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#16a085"
            />
          </h2>
          <p className="banner-paragraph">
            I’am a Front End Developer .. I learned programming languages: HTML,
            CSS, JavaScript and React .. I want to work as a front end
            programmer .. I have the ability to communicate collectively with
            the team .. I hope to reach my goal .. thanks to God.
          </p>
        </div>
        <div className="banner-content xl:flex-row">
          <div className="banner-icons-sections">
            <h2 className="icons-heading">find me in</h2>
            <div className="banner-icons">
              <a
                href="https://www.facebook.com/ziad.abd.elkader97/"
                className="banner-icon"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/+201148915059"
                className="banner-icon"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://x.com/zizoahlawy97"
                className="banner-icon"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/zeyad.tariq.official/"
                className="banner-icon"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="banner-icons-sections">
            <h2 className="icons-heading">best skill on</h2>
            <div className="banner-icons">
              <span className="banner-icon">
                <FaReact />
              </span>
              <span className="banner-icon">
                <RiTailwindCssFill />
              </span>
              <span className="banner-icon">
                <FaFigma />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
