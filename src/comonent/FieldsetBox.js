import React from "react";
import "../assets/css/FieldsetBox.css";

const FieldsetBox = ({ legendText = "Title", children, legendImage }) => {
  return (
    <div className="fieldset-container">
      <div className="fieldset-box">
        <div className="legend-container">
          {legendImage ? (
            <img src={legendImage} alt="Legend" className="legend-image" />
          ) : (
            <span className="legend-text">{legendText}</span>
          )}
        </div>
        <div className="fieldset-content">{children}</div>
      </div>
    </div>
  );
};

export default FieldsetBox;
