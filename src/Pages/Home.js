import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import PersonCard from "../Components/Cards/PersonCard";
import EducationCard from "../Components/Cards/EducationCard";
import WorkExpCard from "../Components/Cards/WorkExpCard";

function Home(props) {
  return (
    <div>
      <h1 className="title">Alexander Caley</h1>
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
          <Row>
            <Col md={6}>
              <div style={{ paddingBottom: "1rem" }}>
                <PersonCard />
              </div>
            </Col>
            <Col md={6}>
              <div style={{ paddingBottom: "1rem" }}>
                <EducationCard />
              </div>
              <div style={{ paddingBottom: "1rem" }}>
                <WorkExpCard />
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}

export default Home;
