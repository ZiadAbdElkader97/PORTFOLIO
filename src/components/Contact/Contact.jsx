import "./Contact.css";
import Title from "../Layouts/Title";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";


export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <Title title="Contact" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="contact-section">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
}
