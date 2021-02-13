import React, { useState, useEffect } from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/ContactFooter";

import { motion } from "framer-motion";

import { Container, Row, Col } from "reactstrap";

export default function ContactPage() {
  const [showFooter, setShowFooter] = useState();

  let handleScreenChange = () => {
    if (window.innerHeight < 555) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  };

  useEffect(() => {
    handleScreenChange();
  }, []);

  window.addEventListener("resize", handleScreenChange);

  let ConditionalFooter = () => {
    if (showFooter) {
      return <Footer />;
    }
    return null;
  };

  return (
    <div>
      <h1 className="title">Contact</h1>
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8}>
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
              <Contact />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div style={{ paddingBottom: "2rem" }} />
      <ConditionalFooter />
    </div>
  );
}
