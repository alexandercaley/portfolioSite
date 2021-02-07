import React from "react";
import Thumbnail from "../Components/Thumbnail";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

import projectData from "../Data/projectData";

export default function Projects() {
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
      <Row xs={1} sm={2} md={2} lg={3} xl={4}>
        {projectsArray.map((item, index) => {
          return (
            <Col key={index}>
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
                {item}
              </motion.div>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <div>
      <h1 className="title">Projects</h1>

      <Container fluid>
        <DrawThumbnails />
      </Container>
    </div>
  );
}
