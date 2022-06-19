import React from "react";

const ResumePart = ({ title, items }) => {
  return (
    <>
      <div className="resume-title">{title}</div>
      <div className="resume-items">
        {items.map((item, i) => (
          <div className="resume-item" key={i}>
            {item.date !== "" && <div className="date">{item.date}</div>}
            <div className="text">{item.text}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResumePart;
