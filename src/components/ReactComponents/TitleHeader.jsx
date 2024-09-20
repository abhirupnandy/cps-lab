import React from "react";
import "./Styles/titleheader.css";
function TitleCard(props) {
  const { title, backgroundImage } = props;
  return (
    <div className="title-wrapper">
      <div
        className="title-header"
        style={{ "--background-image": `url(${backgroundImage})` }}
      >
        <div className="text-wrapper">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
export default TitleCard;
