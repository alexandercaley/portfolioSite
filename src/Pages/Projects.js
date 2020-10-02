import React from "react";
import Thumbnail from "../Components/Thumbnail";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

import tankImage from "../assets/projectImages/tankImage.png";
import redditImage from "../assets/projectImages/redditImage.png";
import shellImage from "../assets/projectImages/shellImage.png";
import clippersImage from "../assets/projectImages/clippersImage.png";

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
        <Container fluid="xl">
          <Row>
            <Col>
              <Thumbnail
                link="/project/tankGame"
                image={tankImage}
                title="Tank Game"
                category="Java Application"
              />
            </Col>
            <Col>
              <Thumbnail
                link="/project/linuxShell"
                image={shellImage}
                title="Linux Shell"
                category="C Program"
              />
            </Col>
            <Col>
              <Thumbnail
                link="/project/clippersApp"
                image={clippersImage}
                title="Clippers"
                category="iOS Swift App"
              />
            </Col>
            <Col>
              <Thumbnail
                link="/project/redditLite"
                image={redditImage}
                title="Reddit Lite"
                category="Full Stack Web App"
              />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}

export default Projects;
