import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";

export default function Thumbnail(props) {
  return (
    <div className="project-thumbnail">
      <Link to={props.link}>
        <motion.div whileHover={{ scale: 1.03 }}>
          <div className="project-thumbnail">
            <Image
              src={props.image}
              alt={`${props.title} Image`}
              className="projectImage"
            />
          </div>
          <div style={{ padding: "0.5rem" }}>
            <div id="project-title" className="itemText">
              {props.title}
            </div>
            <div id="project-category" className="itemText">
              {props.category}
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
