import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import PersonCard from "../Components/Cards/PersonCard";
import EducationCard from "../Components/Cards/EducationCard";
import WorkExpCard from "../Components/Cards/WorkExpCard";

export default function Home() {
  const [numCols, setNumCols] = useState();

  let handleGridChange = () => {
    if (window.innerWidth > 700) {
      setNumCols(2);
    } else {
      setNumCols(1);
    }
  };

  useEffect(() => {
    handleGridChange();
  }, []);

  window.addEventListener("resize", handleGridChange);

  return (
    <div>
      <h1 className="title">Alexander Caley</h1>

      <Container fluid>
        <Row xs={1} sm={numCols}>
          <Col>
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
              <div style={{ paddingBottom: "1rem" }}>
                <PersonCard numCols={numCols} />
              </div>
            </motion.div>
          </Col>
          <Col>
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
              <div style={{ paddingBottom: "1rem" }}>
                <WorkExpCard />
              </div>
            </motion.div>
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
              <div style={{ paddingBottom: "1rem" }}>
                <EducationCard />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
