import React from "react";

import PageNotFound from "./PageNotFound";

import projectData from "../Data/projectData.json";

import { useParams } from "react-router";

import { motion } from "framer-motion";
import { Container } from "reactstrap";
import { Card, Image, Button } from "react-bootstrap";

export default function ProjectPage() {
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
              •{item}
            </Card.Text>
          );
        })}
        <br />
      </div>
    );
  };

  let Source = () => {
    return !projectData[id].source ? null : (
      <Button href={projectData[id].source} target="_blank" variant="info">
        <Image
          src={"/assets/glyphs/githubGlyph.png"}
          style={{ maxHeight: "30px", paddingRight: "5px" }}
        />
        Source Code
      </Button>
    );
  };

  let Download = () => {
    return !projectData[id].download ? null : (
      <Button href={projectData[id].download} target="_blank" variant="info">
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
            <Card.Img
              style={{ borderRadius: "30px", padding: "1rem" }}
              variant="top"
              src={projectData[id].image}
              alt={`${projectData[id].name} Image`}
            />
            <Card.Body>
              <Card.Title
                className="cardTitle"
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontSize: "25pt",
                }}
              >
                {projectData[id].name}
              </Card.Title>
              <Card.Text className="itemDate">{projectData[id].year}</Card.Text>
              <Description />
              <Card.Text className="projectItemDetails">
                <Source />
              </Card.Text>
              <Card.Text className="projectItemDetails">
                <Download />
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </motion.div>
    </div>
  );
}
