import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import "./App.css";

function Thumbnail(props) {
  return (
    <div className="project-thumbnail">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="" />
        </div>
        <div id="project-title" className="body-text">
          {props.title}
        </div>
        <div id="project-category" className="body-text">
          {props.category}
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
