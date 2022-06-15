import React from "react";
import ResumePart from "../layout/ResumePart";

const Resume = () => {
  const resumeParts = [
    {
      title: "Summary",
      items: [
        {
          date: "",
          text: "Hardworking, responsible, student  who is able to learn quickly and able to solve problems, seeking work in the software engineering field.",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          date: "2018 - 2022 | Dysart High School",
          text: "I graduated with a high school diploma. In school, I participated in many AP classes such as AP Calculus AB and BC, AP Physics, and AP English",
        },
        {
          date: "2020 - 2022 | West-MEC Coding",
          text: "I participated in the Coding program at West-MEC's Central Campus where I learned many skills in both web design and professionalism.",
        },
      ],
    },
    {
      title: "Certifications",
      items: [
        {
          date: "2020 | CareerSafe",
          text: "OSHA Certification",
        },
        {
          date: "2022 | CIW",
          text: "JavaScript Specialist",
        },
      ],
    },
  ];

  return (
    <>
      <div className="resume-container">
        <div className="section-title">Resume</div>
        <div className="resume-parts">
          {resumeParts.map((part, i) => {
            const { title, items } = part;

            return (
              <>
                <ResumePart title={title} items={items} key={i}/>
                {i !== resumeParts.length - 1 && <div className="resume-divider" key={`d${i}`}/>}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Resume;
