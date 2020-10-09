import React from "react";

import PageNotFound from "./PageNotFound";

import { useParams } from "react-router";
import HashMap from "hashmap";
import { motion } from "framer-motion";
import { Container } from "reactstrap";
import { Card, Image } from "react-bootstrap";

import githubGlyph from "../assets/glyphs/githubGlyph.png";
import tankImage from "../assets/projectImages/tankImage.png";
import redditImage from "../assets/projectImages/redditImage.png";
import shellImage from "../assets/projectImages/shellImage.png";
import clippersImage from "../assets/projectImages/clippersImage.png";
import greenworldImage from "../assets/projectImages/greenworldImage.png";
import surgedateImage from "../assets/projectImages/surgedateImage.png";
import websiteImage from "../assets/logo/logo_black.png";

function ProjectPage(props) {
  let projectData = new HashMap();
  projectData.multi(
    "tankGame",
    {
      name: "Tank Game",
      year: "2018",
      description: "Java-based split-screen multiplayer tank game",
      image: tankImage,
      source: "https://github.com/alexandercaley/tankgame",
      download:
        "https://drive.google.com/file/d/1q45EkVuP6U6B3gBEb5oF5EOn01K99Rvs/view?usp=sharing",
    },
    "clippersApp",
    {
      name: "Clippers",
      year: "2019",
      description:
        "•Swift application for finding local barbers\n•Client side frontend app\n•Firebase for backend and tables",
      image: clippersImage,
      source: "https://github.com/alexandercaley/clippers_for_ios",
    },
    "linuxShell",
    {
      name: "Linux Shell",
      year: "2019",
      description: "Linux shell with most functionality all written in C",
      image: shellImage,
      source: "https://github.com/alexandercaley/linuxshell",
    },
    "greenWorld",
    {
      name: "GreenWorld",
      year: "2019",
      description:
        "•Environmental social media site to create posts and attach them to a location\n•Involved with a team of 7 people\n•Lead the backend team\n•Created API’s for frontend to access data from AWS server\n•Constructed with Node and React",
      image: greenworldImage,
      source: "https://github.com/alexandercaley/greenworld",
    },
    "redditLite",
    {
      name: "Reddit Lite",
      year: "2019",
      description:
        "•Lite version of Reddit for desktop and mobile devices\n•Node Backend\n•React Frontend\n•Lite version of reddit\n•Implemented all features with micro services\n•Used Redis for caching\n•Used Kafka for conveyer\n•5 Person Project",
      image: redditImage,
      source: "https://github.com/sfsu-csc667-fall19/final-project-redditlite",
    },
    "surgeDate",
    {
      name: "SurgeDate Server",
      year: "2020 (in progress)",
      description:
        "•Dating application that matches users based on their shared information\n•Node Servers for all backend tasks and microservices\n•Redis\n•JWT token\n•API Validation\n•Test driven development",
      image: surgedateImage,
    },
    "website",
    {
      name: "Portfolio Website",
      year: "2020",
      description: "Description here",
      image: websiteImage,
      source: "https://github.com/alexandercaley/portfolioSite",
    }
  );
  let { id } = useParams();
  if (!projectData.has(id)) {
    return <PageNotFound />;
  }

  let Source = () => {
    if (!projectData.get(id).source) {
      return <label>Source Code: Unavailable</label>;
    }
    return (
      <Card.Link href={projectData.get(id).source} target="_blank">
        Source Code:
        <Image
          src={githubGlyph}
          rounded
          style={{ maxHeight: "50px", paddingLeft: "15px" }}
        />
      </Card.Link>
    );
  };

  let Download = () => {
    if (!projectData.get(id).download) {
      return null;
    }
    return (
      <Card.Link href={projectData.get(id).download} target="_blank">
        Download Software
      </Card.Link>
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
              display: "inline-block",
              width: "100%",
              height: "100%",
            }}
            bg="dark"
            text="white"
          >
            <Card.Img
              style={{ borderRadius: "20px" }}
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
                <label
                  className="itemDetails"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {projectData.get(id).description}
                </label>
                <label className="itemDetails">
                  <Source />
                </label>
                <label className="itemDetails">
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
