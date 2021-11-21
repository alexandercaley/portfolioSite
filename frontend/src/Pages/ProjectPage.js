import React, { useEffect, useState } from "react";

import PageNotFound from "./PageNotFound";

import projectData from "../Data/projectData.json";

import { useParams } from "react-router";

import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import { Card, Image, Button } from "react-bootstrap";

export default function ProjectPage() {
  const [numCols, setNumCols] = useState();

  let handleGridChange = () => {
    if (window.innerWidth > window.innerHeight && window.innerHeight < 900) {
      setNumCols(2);
    } else {
      setNumCols(1);
    }
  };

  useEffect(() => {
    handleGridChange();
  }, []);

  window.addEventListener("resize", handleGridChange);

  let { id } = useParams();
  if (!projectData.hasOwnProperty(id)) {
    return <PageNotFound />;
  }

  let Description = () => {
    return (
      <div>
        {projectData[id].description.map((item, index) => {
          return (
            <Card.Text
              className="projectItemDetails"
              key={index}
              style={{ marginBottom: "0px" }}
            >
              • {item}
            </Card.Text>
          );
        })}
      </div>
    );
  };

  let Source = () => {
    return !projectData[id].source ? null : (
      <Button
        href={projectData[id].source}
        target="_blank"
        variant="info"
        style={{ width: "11rem" }}
      >
        <Image
          src={"/assets/glyphs/githubGlyph.png"}
          style={{
            maxHeight: "30px",
            paddingRight: "5px",
            marginLeft: "-.5rem",
          }}
        />
        <label
          style={{
            transform: "translatey(15%)",
          }}
        >
          Source Code
        </label>
      </Button>
    );
  };

  let Download = () => {
    return !projectData[id].download ? null : (
      <Button
        href={projectData[id].download}
        target="_blank"
        variant="info"
        style={{ width: "11rem" }}
      >
        Download Software
      </Button>
    );
  };

  return (
    <div>
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
        <Container fluid="md" style={{ padding: "25px" }}>
          <Card
            className="contextCard"
            style={{
              borderRadius: "20px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "auto",
              height: "auto",
            }}
            bg="dark"
            text="white"
          >
            <Container fluid={true} style={{ padding: "0rem" }}>
              <Row xs={numCols} md={numCols}>
                <Col
                  className="col-image-transition"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Card.Img
                    style={{
                      borderRadius: "30px",
                      padding: "1rem",
                    }}
                    variant="top"
                    src={projectData[id].image}
                    alt={`${projectData[id].name} Image`}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    {
                      <Card.Title
                        className="cardTitle"
                        style={{
                          textAlign: "left",
                          fontWeight: "bold",
                          fontSize: "25pt",
                          textDecoration: "underline",
                        }}
                      >
                        {projectData[id].name}
                      </Card.Title>
                    }
                    {
                      <Card.Text
                        className="itemDate"
                        style={{ textDecoration: "underline" }}
                      >
                        {projectData[id].year}
                      </Card.Text>
                    }
                    <Description />
                    <Card.Text />
                    <Card.Text className="projectItemDetails">
                      <Source />
                    </Card.Text>
                    <Card.Text className="projectItemDetails">
                      <Download />
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        </Container>
      </motion.div>
    </div>
  );
}
