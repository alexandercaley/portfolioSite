import React from "react";

import PageNotFound from "./PageNotFound";

import projectData from "../Data/projectData";

import { useParams } from "react-router";

import { motion } from "framer-motion";
import { Container } from "reactstrap";
import { Card, Image, Button } from "react-bootstrap";

import githubGlyph from "../assets/glyphs/githubGlyph.png";

function ProjectPage() {
  let { id } = useParams();
  if (!projectData.has(id)) {
    return <PageNotFound />;
  }

  let Description = () => {
    return (
      <div>
        {projectData.get(id).description.map((item) => {
          return <div className="projectItemDetails">•{item}</div>;
        })}
        <br />
      </div>
    );
  };

  let Source = () => {
    if (!projectData.get(id).source) {
      return null;
    }
    return (
      <Button href={projectData.get(id).source} target="_blank" variant="info">
        <Image
          src={githubGlyph}
          style={{ maxHeight: "30px", paddingRight: "5px" }}
        />
        Source Code
      </Button>
    );
  };

  let Download = () => {
    if (!projectData.get(id).download) {
      return null;
    }
    return (
      <Button
        href={projectData.get(id).download}
        target="_blank"
        variant="info"
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
            <Card.Img
              style={{ borderRadius: "30px", padding: "1rem" }}
              variant="top"
              src={projectData.get(id).image}
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
                {projectData.get(id).name}
              </Card.Title>
              <Card.Text>
                <label className="itemDate">{projectData.get(id).year}</label>
                <Description />
                <label className="projectItemDetails">
                  <Source />
                </label>
                <label className="projectItemDetails">
                  <Download />
                </label>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </motion.div>
    </div>
  );
}

export default ProjectPage;
