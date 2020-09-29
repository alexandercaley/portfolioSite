import React from "react";
import Thumbnail from "../Components/Thumbnail";
import { motion } from "framer-motion";

import phone from "../assets/7644.png";
import amsterdam from "../assets/amsterdam.jpg";
import { Container, Row, Col } from "reactstrap";

function Projects() {
  return (
    <div>
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
        <Container fluid="md">
          <Row>
            <Col>
              <Thumbnail
                link="/project/hello"
                image={amsterdam}
                title="TEST"
                category="Test App"
              />
            </Col>
            <Col>
              <Thumbnail
                link="/project/bye"
                image={phone}
                title="TEST"
                category="Test App"
              />
            </Col>
            <Col>
              <Thumbnail
                link="/test"
                image={phone}
                title="TEST"
                category="Test App"
              />
            </Col>
            <Col>
              <Thumbnail
                link="/test"
                image={phone}
                title="TEST"
                category="Test App"
              />
            </Col>
            <Col>
              <Thumbnail
                link="/test"
                image={phone}
                title="TEST"
                category="Test App"
              />
            </Col>
            <Col>
              <Thumbnail
                link="/test"
                image={phone}
                title="TEST"
                category="Test App"
              />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}

export default Projects;
