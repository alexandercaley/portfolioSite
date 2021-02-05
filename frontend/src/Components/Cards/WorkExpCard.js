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
        style={{
          borderRadius: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Card.Body>
          <Card.Title
            className="cardTitle"
            style={{ textAlign: "left", fontWeight: "bold", fontSize: "20pt" }}
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
          style={{ borderRadius: "20px", marginTop: "-1rem" }}
        >
          <ListGroupItem variant="info">
            <div className="itemTitle">Apple</div>
            <div className="personItemDetails">
              News iOS/macOS Engineer and Screener
            </div>
            <div className="itemDate">Jan 2021-Current</div>
            <div className="itemInformation">• Swift/Objective-C</div>
            <div className="itemInformation">
              • Triage incoming bug reports for News.
            </div>
            <div className="itemInformation">
              • Work closely with QA to reproduce issues and identify when they
              started occurring.
            </div>
            <div className="itemInformation">
              • Prioritize and assign issues for fixing
            </div>
            <div className="itemInformation">
              • Use tools to deep dive and isolate bugs and propose fixes for
              team review.
            </div>
            <div className="personItemDetails">Genius</div>
            <div className="itemDate">Oct 2017-Dec 2020</div>
            <div className="itemInformation">
              • Earned recognition for consistency in delivering the highest
              number of completed customer appointments, while registering
              excellent customer satisfaction ratings.
            </div>
            <div className="itemInformation">
              • Played an essential role in enhancing the skill set of other
              technicians and specialists by training them on the proper
              application of the latest tools and methods for troubleshooting
              various hardware and software issues.
            </div>
            <div className="itemInformation">
              • Developed a comprehensive technical know-how for addressing
              complex problems.
            </div>
          </ListGroupItem>
          <ListGroupItem variant="info">
            <div className="itemTitle">Freelance Software Engineer</div>
            <div className="itemDate">Feb 2018-Nov 2020</div>
            <div className="itemInformation">
              • Developed and unit tested web, mobile, and native applications
              in various languages and frameworks including Java, Typescript,
              Javascript, Node.js, React, C, Swift in combination with several
              other technologies
            </div>
            <div className="itemInformation">
              • A list of relevant projects along with GitHub repo's and
              README's can be found in the Projects section of my Portfolio
              ranging from personal projects to projects with groups up to 7
              people
            </div>
          </ListGroupItem>
          <ListGroupItem variant="info">
            <div className="itemTitle">Encino Health & Wellness</div>
            <div className="personItemDetails">
              Billing/Network Admin/Advertising
            </div>
            <div className="itemDate">Jun 2013-Aug 2016</div>
            <div className="itemInformation">
              • Managed marketing and advertisement and produced ads.
            </div>
            <div className="itemInformation">
              • Interacted with insurance companies to handle billing/submitted
              billing requests
            </div>
            <div className="itemInformation">
              • Setup local network and all machines on network, including mass
              network storage and security
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default WorkExpCard;
