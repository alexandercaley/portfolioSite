import React from "react";

import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";

import briefcaseGlyph from "../../assets/glyphs/briefcaseGlyph.png";

class WorkExpCard extends React.Component {
  render() {
    return (
      <Card
        className="contextCard"
        id="infoCard"
        bg="dark"
        text="white"
        style={{ borderRadius: "20px" }}
      >
        <Card.Body>
          <Card.Title
            className="cardTitle"
            style={{ textAlign: "left", fontWeight: "bold", fontSize: "25pt" }}
          >
            <Image
              src={briefcaseGlyph}
              rounded
              style={{
                maxHeight: "45px",
                paddingRight: "15px",
              }}
            />
            Work Experience
          </Card.Title>
        </Card.Body>
        <ListGroup
          className="list-group-flush"
          style={{ borderRadius: "20px" }}
        >
          <ListGroupItem variant="info">
            <label className="itemTitle">Genius</label>
            <label className="itemDetails">Apple Part-Time</label>
            <label className="itemDate">2017-Current</label>
            <label className="itemInformation">
              • Earned recognition for consistency in delivering the highest
              number of completed customer appointments, while registering
              excellent customer satisfaction ratings.
            </label>
            <label className="itemInformation">
              • Played an essential role in enhancing the skill set of other
              technicians and specialists by training them on the proper
              application of the latest tools and methods for troubleshooting
              various hardware and software issues.
            </label>
            <label className="itemInformation">
              • Developed a comprehensive technical know-how for addressing
              complex problems.
            </label>
          </ListGroupItem>
          <ListGroupItem variant="info">
            <label className="itemTitle">Freelance Software Engineer</label>
            <label className="itemDetails">Self-employed</label>
            <label className="itemDate">2017-Current</label>
            <label className="itemInformation">
              • Developed and unit tested web, mobile, and native applications
              in various languages and frameworks including Java, Typescript,
              Javascript, Node.js, React, C, Swift in combination with several
              other technologies
            </label>
            <label className="itemInformation">
              • A list of relevant projects along with GitHub repo's and
              README's can be found in the Projects section of my LinkedIn page
              ranging from personal projects to projects with groups up to 7
              people
            </label>
          </ListGroupItem>
          <ListGroupItem variant="info">
            <label className="itemTitle">
              Billing/Network Admin/Advertising
            </label>
            <label className="itemDetails">
              Encino Health & Wellness Part-time
            </label>
            <label className="itemDate">2013-2016</label>
            <label className="itemInformation">
              • Managed marketing and advertisement and produced ads.
            </label>
            <label className="itemInformation">
              • Interacted with insurance companies to handle billing/submitted
              billing requests
            </label>
            <label className="itemInformation">
              • Setup local network and all machines on network, including mass
              network storage and security
            </label>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default WorkExpCard;
