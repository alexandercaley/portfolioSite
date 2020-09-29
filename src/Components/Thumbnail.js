import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";

class Thumbnail extends React.Component {
  render() {
    return (
      <div style={{ paddingBottom: 15 }}>
        <div className="project-thumbnail">
          <Link to={this.props.link}>
            <motion.div whileHover={{ scale: 1.03 }}>
              <div className="project-thumbnail">
                <Image
                  src={this.props.image}
                  alt="Project Image"
                  className="projectImage"
                />
                <div className="overlay">
                  <div id="project-title" className="itemText">
                    {this.props.title}
                  </div>
                  <div id="project-category" className="itemText">
                    {this.props.category}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
