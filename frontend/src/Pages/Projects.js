import React, { useEffect, useState } from "react";
import Thumbnail from "../Components/Thumbnail";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

import projectData from "../Data/projectData.json";

export default function Projects() {
  const [numCols, setNumCols] = useState();

  let handleGridChange = () => {
    if (window.innerWidth > 2700) {
      setNumCols(5);
    } else if (window.innerWidth > 1700) {
      setNumCols(5);
    } else if (window.innerWidth > 1300) {
      setNumCols(4);
    } else if (window.innerWidth > 600) {
      setNumCols(3);
    } else if (window.innerWidth < 600) {
      setNumCols(2);
    }
  };

  useEffect(() => {
    handleGridChange();
  }, []);

  window.addEventListener("resize", handleGridChange);

  let DrawThumbnails = () => {
    let projectsArray = [];
    for (let value in projectData) {
      projectsArray.push(
        <Thumbnail
          link={`/project/${value}`}
          image={projectData[value].thumbnail}
          title={projectData[value].name}
          category={projectData[value].category}
        />
      );
    }
    return (
      <Row xs={numCols} sm={numCols}>
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
