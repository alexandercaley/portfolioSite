import React from "react";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import image from "../assets/IMG_1092.jpeg";

import resumeGlyph from "../assets/glyphs/resumeGlyph.png";
import mailGlyph from "../assets/glyphs/mailGlyph.png";
import githubGlyph from "../assets/glyphs/githubGlyph.png";
import linkedInGlyph from "../assets/glyphs/linkedInGlyph.png";

function Home(props) {
  return (
    <div>
      <h1 className="title">Home</h1>
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
              <div style={{ paddingBottom: "1rem", alignContent: "center" }}>
                <Card
                  className="contextCard"
                  style={{ borderRadius: "20px" }}
                  bg="dark"
                  text="white"
                >
                  <Card.Img
                    style={{ borderRadius: "20px" }}
                    variant="top"
                    src={image}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: "left", fontWeight: "bold" }}
                    >
                      Alexander Caley
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup
                    className="list-group-flush"
                    style={{ textAlign: "left", borderRadius: "25px" }}
                  >
                    <ListGroupItem variant="info">
                      <Card.Link
                        href="https://drive.google.com/file/d/130eGmBNs_dbvJmdKwGUBNdKtczMwgM3e/view?usp=sharing"
                        target="_blank"
                      >
                        <Image
                          src={resumeGlyph}
                          rounded
                          style={{ maxHeight: "20px", paddingRight: "15px" }}
                        />
                        Resumé
                      </Card.Link>
                    </ListGroupItem>
                    <ListGroupItem variant="info">
                      <Card.Link href="mailto:alexandercaley@gmail.com">
                        <Image
                          src={mailGlyph}
                          rounded
                          style={{ maxHeight: "20px", paddingRight: "15px" }}
                        />
                        alexandercaley@gmail.com
                      </Card.Link>
                    </ListGroupItem>
                    <ListGroupItem variant="info">
                      <Card.Link
                        href="https://github.com/alexandercaley"
                        target="_blank"
                      >
                        <Image
                          src={githubGlyph}
                          rounded
                          style={{ maxHeight: "20px", paddingRight: "15px" }}
                        />
                        Github
                      </Card.Link>
                    </ListGroupItem>
                    <ListGroupItem variant="info">
                      <Card.Link
                        href="https://www.linkedin.com/in/alexandercaley/"
                        target="_blank"
                      >
                        <Image
                          src={linkedInGlyph}
                          rounded
                          style={{ maxHeight: "20px", paddingRight: "15px" }}
                        />
                        LinkedIn
                      </Card.Link>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </div>
            </Col>
            <Col md={6}>
              <div style={{ paddingBottom: "1rem" }}>
                <Card
                  className="contextCard"
                  bg="dark"
                  text="white"
                  style={{ borderRadius: "20px" }}
                >
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: "left", fontWeight: "bold" }}
                    >
                      Alexander Caley
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup
                    className="list-group-flush"
                    style={{ textAlign: "left", borderRadius: "25px" }}
                  >
                    <ListGroupItem variant="info">Resumé</ListGroupItem>
                    <ListGroupItem variant="info">email</ListGroupItem>
                    <ListGroupItem variant="info">Social Media</ListGroupItem>
                  </ListGroup>
                </Card>
              </div>
              <div style={{ paddingBottom: "1rem" }}>
                <Card
                  className="contextCard"
                  bg="dark"
                  text="white"
                  style={{ borderRadius: "20px" }}
                >
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: "left", fontWeight: "bold" }}
                    >
                      Alexander Caley
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup
                    className="list-group-flush"
                    style={{ textAlign: "left", borderRadius: "25px" }}
                  >
                    <ListGroupItem variant="info">Resumé</ListGroupItem>
                    <ListGroupItem variant="info">email</ListGroupItem>
                    <ListGroupItem variant="info">Social Media</ListGroupItem>
                  </ListGroup>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}

export default Home;
