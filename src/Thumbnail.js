import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";
import "./App.css";

function Thumbnail(props) {
  return (
    <div className="project-padding">
      <div className="project-thumbnail">
        <Link to={props.link}>
          {/* <div className="project-image">
          <Image
            src={props.image}
            loading="lazy"
            width="400"
            height="250"
            rounded
          />
        </div>
        <div id="project-title" className="body-text">
          {props.title}
        </div>
        <div id="project-category" className="body-text">
          {props.category}
        </div> */}
          {/* <motion.div whileHover={{ scale: 1.1 }}>
          <Card style={{ width: "500px" }}>
            <Card.Img variant="top" src={props.image} loading="lazy" />
            <Card.ImgOverlay>
              <Card.Title
                id="project-title"
                className="body-text"
                hidden="true"
              >
                {props.title}
              </Card.Title>
              <Card.Text
                id="project-category"
                className="body-text"
                hidden="true"
              >
                {props.category}
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </motion.div> */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="project-thumbnail">
              <Image
                src={props.image}
                width="400"
                height="250"
                rounded="true"
                alt="Project Image"
                className="projectImage"
              />
              <div className="overlay">
                <div id="project-title" className="text">
                  {props.title}
                </div>
                <div id="project-category" className="text">
                  {props.category}
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Thumbnail;
