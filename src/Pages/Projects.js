import React from "react";
import Thumbnail from "../Components/Thumbnail";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

import projectData from "../Components/projectData";

function Projects() {
  let DrawThumbnails = () => {
    var projectsArray = [];
    for (const [key, value] of projectData.entries()) {
      projectsArray.push(
        <Thumbnail
          link={`/project/${key}`}
          image={value.image}
          title={value.name}
          category={value.category}
        />
      );
    }
    return (
      <Row>
        {projectsArray.map((item, index) => {
          return <Col key={index}>{item}</Col>;
        })}
      </Row>
    );
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1 className="title">Projects</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <Container fluid={true}>
          <DrawThumbnails />
        </Container>
      </motion.div>
    </div>
  );
}

export default Projects;
