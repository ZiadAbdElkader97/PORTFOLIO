/* eslint-disable react/prop-types */
import "./Projects.css";

export default function ProjectsCard({ title, des, img, gitHub, view }) {
  return (
    <div className="pro-card">
      <div className="pro-img">
        <img src={img} alt="Project Card" className="pro-card-img" />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="pro-details">
          <h3 className="pro-heading">{title}</h3>
          <div className="flex gap-2">
            <span className="pro-icon">{gitHub}</span>
            <span className="pro-icon">{view}</span>
          </div>
        </div>
        <div>
          <p className="pro-paragraph tracking-wide">{des}</p>
        </div>
      </div>
    </div>
  );
}
