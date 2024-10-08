/* eslint-disable react/prop-types */
import "./Features.css";

export default function FeaturesCard({ title, des, icon }) {
  return (
    <div className="feat-card">
      <div className="h-72 overflow-y-hidden">
        <div className="feat-card-details translate-y-14">
          <div>
            <span className="feat-card-icon">{icon}</span>
          </div>
          <div className="feat-card-info">
            <h2 className="feat-card-title">{title}</h2>
            <p className="feat-card-des">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
