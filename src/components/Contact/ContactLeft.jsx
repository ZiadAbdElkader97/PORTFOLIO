import "./Contact.css";
import contactImg from "../../assets/contact.jpg";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactLeft() {
  return (
    <div className="contact-sec-one">
      <img src={contactImg} className="contact-img" />
      <div className="contact-details">
        <h2 className="contact-h2">Ziad Abd Elkader</h2>
        <h3 className="contact-h3">Front End Developer</h3>
        <p className="contact-p">
          I’am a Front End Developer, I learned programming languages, I hope to
          reach my goal .. thanks to God.
        </p>
        <h4 className="contact-h4">
          {" "}
          <FaPhoneSquareAlt className="contact-icons" />
          Phone: <span>01148915059</span>
        </h4>
        <h4 className="contact-h4">
          {" "}
          <IoIosMail className="contact-icons" />
          Email: <span>zizoahlawy97@gmail.com</span>
        </h4>
        <h4 className="contact-h4">
          {" "}
          <FaLocationDot className="contact-icons" />
          Location: <span>Cairo, Egypt</span>
        </h4>
        <div className="banner-icons-sections">
          <h2 className="icons-heading mt-[20px]">find me in</h2>
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
      </div>
    </div>
  );
}
