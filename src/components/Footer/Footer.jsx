import "./Footer.css";
import logoImg from "../../assets/me-logo.jpg";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      {/* section One */}
      <div className="footer-section pt-6">
        <div className="flex items-center gap-[10px]">
          <img src={logoImg} className="fLogo-img" />
          <h2 className="fLogo-heading">Ziad</h2>
        </div>
        <div className="banner-icons-sections">
          <div className="banner-icons mt-[25px]">
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
      {/* section Two */}
      <div className="footer-section">
        <h3 className="footer-h3">Quick Link</h3>
        <ul className="footer-ul">
          <li className="footer-li">
            <a href="#" className="footer-link">
              About
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              Portfolio
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              Services
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              Blog
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* section Three */}
      <div className="footer-section">
        <h3 className="footer-h3">Resources</h3>
        <ul className="footer-ul">
          <li className="footer-li">
            <a href="#" className="footer-link">
              Authentication
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              System Status
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              Terms of Service
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              Pricing
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              Over Right
            </a>
          </li>
        </ul>
      </div>
      {/* section Four */}
      <div className="footer-section">
        <h3 className="footer-h3">Developers</h3>
        <ul className="footer-ul">
          <li className="footer-li">
            <a href="#" className="footer-link">
              Documentation
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              Authentication
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              API Reference
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              Support
            </a>
          </li>
          <li className="footer-li">
            <a href="#" className="footer-link">
              Open Source
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
