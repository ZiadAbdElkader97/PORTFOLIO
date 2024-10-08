/* eslint-disable react/prop-types */
import "./Resume.css";

export default function ResumeCard({ title, subTitle, result, des }) {
  return (
    <div className="resume-card">
      <div className="resume-box">
        <span className="resume-box-dots"></span>
        <div className="box-details">
          <h2 className="box-title">{title}</h2>
          <h5 className="box-subTitle">{subTitle}</h5>
        </div>
        <span className="box-result">{result}</span>
      </div>
      <div>
        <p className="box-paragraph">{des}</p>
      </div>
    </div>
  );
}
