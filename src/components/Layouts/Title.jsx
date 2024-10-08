/* eslint-disable react/prop-types */
import "./Layouts.css";

export default function Title({ title, des }) {
  return (
    <div className="layout-title">
      <h4 className="layout-head">{title}</h4>
      <h1 className="layout-address">{des}</h1>
    </div>
  );
}
