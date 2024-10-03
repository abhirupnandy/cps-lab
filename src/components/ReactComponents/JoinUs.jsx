import React from "react";
import { useState } from "react";

import accordionData from "./assets/joinUsAccordianData";
import "./Styles/joinus.css";
// import img from "./assets/joinus.jpg";
import double_arrow_icon from "./assets/double-right-svgrepo-com.svg";
import right_arrow from "./assets/right-arrow-svgrepo-com.svg";
import AccordionItem from "./AccordionItem";
// import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons/faGoogleDrive";
import steps_list from "./assets/JoinUsSteps";

// const main_title = "Apply To CPS Lab";

const imp_points = [
  "Applications for internships are accepted throughout the year.",
  "The selection of interns is dynamic and based on the current research needs of the lab.",
  "We accept Undergraduate and Postgraduate students as well as Research Scholars for internships.",
  "No TA/DA shall be paid to the candidates.",
  "A minimum attendance of 100 days in the lab is mandatory.",
  "To apply for an internship in our lab, fill out the following form.",
];


const Joinsteps = (props) => {
  const { idx, title, desc } = props;
  return (
    <div className="join-steps-comp">
      <div className="step-idx">{idx}</div>
      <div className="steps-details">
        <h3 className="step-title">{title}</h3>
        <div className="step-description">{desc}</div>
      </div>
    </div>
  );
};

function JoinUs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="ju-outer-wrapper">
      {/* <TitleCard backgroundImage={img} title={main_title} /> */}
      <div className="join-wrapper">
        <div className="ju-first">
          <h3 className="ju-first-heading"> Apply for Research Internship</h3>
          <div className="ju-first-details">
            Applications are open for a 6-month internship for the 2024 batch of
            interns. We help our interns develop data-backed research aptitude
            toward new and exciting domains. Last date to apply is
            <b> January 25, 2024.</b>
          </div>
          <div className="ju-first-stipend">
            Selected candidates will receive a{" "}
            <b>monthly stipend of INR 10000.</b>
          </div>
        </div>
        <div className="ju-steps">
          <h3 className="selection-heading">The Selection Process</h3>
          <div className="steps-map">
            {steps_list.map((steps) => {
              return <Joinsteps {...steps} />;
            })}
          </div>
        </div>
        <div className="problem-domains">
          <h3>Problem Domains</h3>
          <div className="accordion">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>


        <div className="important-points">
          <h3>Important Points</h3>
          <div className="imp-pts-list">
            {imp_points.map((point, index) => {
              return (
                <div
                  className="list-wrapper"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src={hovered === index ? right_arrow : double_arrow_icon}
                    className="arrow-icon"
                  ></img>
                  <p className="point">{point}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-container">
          <button className="form-button">Fill Application Form</button>
        </div>
      </div>
    </div>
  );
}
export default JoinUs;

