import "./Navbar.css";
import { useState } from "react";
import logo from "../../assets/me-logo.jpg";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants/Data.js";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} className="logo-img" />
        <h1 className="logo-heading">ZIAD</h1>
      </div>
      <div>
        <ul className="navbar-ul">
          {navLinksdata.map(({ id, title, link }) => (
            <li key={id} className="navbar-li">
              <Link
                activeClass="active"
                to={link}
                spy={true}
                offset={-60}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span onClick={() => setShowMenu(!showMenu)} className="span-show-menu">
          <FiMenu />
        </span>
        {showMenu && (
          <div className="show-menu-div scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <div className="flex items-center gap-2">
                  <img src={logo} className="logo-img" />
                  <h1 className="logo-heading text-[20px]">ZIAD</h1>
                </div>
                <p className="text-sm mt-2 text-gray-400">
                  I’am a Front End Developer, I learned programming languages, I
                  hope to reach my goal .. thanks to God.
                </p>
              </div>
              <ul className="flex flex-col gap-4 cursor-pointer">
                {navLinksdata.map(({ id, title, link }) => (
                  <li key={id} className="hover:text-[#16a085]">
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={link}
                      spy={true}
                      offset={-60}
                      duration={500}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <span
                onClick={() => setShowMenu(false)}
                className="span-close-menu"
              >
                <MdClose />
              </span>
              <div className="banner-icons-sections">
                <h2 className="mt-[20px] uppercase">find me in</h2>
                <div className="banner-icons mt-3">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
