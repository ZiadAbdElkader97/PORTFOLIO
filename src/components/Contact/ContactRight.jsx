import "./Contact.css";
import { useState } from "react";

export default function ContactRight() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ============== Email Validation Start ==============

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // ============== Email Validation End ==============

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone Number is required!");
    } else if (email === "") {
      setErrMsg("Please give your email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("please give your subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been Sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setEmail("");
      setSubject("");
      setPhoneNumber("");
      setMessage("");
    }
  };

  return (
    <div className="contact-sec-two">
      <form className="contact-form">
        {errMsg && <p className="contact-err-msg animate-bounce">{errMsg}</p>}
        {successMsg && (
          <p className="contact-success-msg animate-bounce">{successMsg}</p>
        )}
        <div className="w-full flex gap-10">
          <div className="contact-info w-1/2">
            <p className="contact-label">Your Name</p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="contact-input"
              type="text"
            />
          </div>
          <div className="contact-info w-1/2">
            <p className="contact-label">Phone Number</p>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className="contact-input"
              type="text"
            />
          </div>
        </div>
        <div className="contact-info">
          <p className="contact-label">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="contact-input"
            type="email"
          />
        </div>
        <div className="contact-info">
          <p className="contact-label">Subject</p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="contact-input"
            type="text"
          />
        </div>
        <div className="contact-info">
          <p className="contact-label">Message</p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="contact-textArea"
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <div className="w-full">
          <button
            onClick={handleSend}
            className="contact-submit-button"
            type="submit"
          >
            Send Message
          </button>
        </div>
        {errMsg && <p className="contact-err-msg animate-bounce">{errMsg}</p>}
        {successMsg && (
          <p className="contact-success-msg animate-bounce">{successMsg}</p>
        )}
      </form>
    </div>
  );
}
