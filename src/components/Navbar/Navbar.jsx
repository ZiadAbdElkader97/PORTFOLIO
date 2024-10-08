import "./Navbar.css";
import logo from "../../assets/me-logo.jpg";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants/Data.js";

export default function Navbar() {
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
      </div>
    </div>
  );
}
