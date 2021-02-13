import React, { useEffect, useState } from "react";
import Thumbnail from "../Components/Thumbnail";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

import projectData from "../Data/projectData";

export default function Projects() {
  const [numRows, setNumRows] = useState();

  let handleGridChange = () => {
    if (window.innerWidth > 2700) {
      setNumRows(5);
    } else if (window.innerWidth > 1700) {
      setNumRows(4);
    } else if (window.innerWidth > 1000) {
      setNumRows(3);
    } else if (window.innerWidth > 700) {
      setNumRows(2);
    } else if (window.innerWidth < 625) {
      setNumRows(1);
    }
  };

  useEffect(() => {
    handleGridChange();
  }, []);

  window.addEventListener("resize", handleGridChange);

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
      <Row xs={1} sm={numRows}>
        {projectsArray.map((item, index) => {
          return (
            <Col
              key={index}
              style={{
                paddingBottom: "1rem",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
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
