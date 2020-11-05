import React from "react";

import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";

import capGlyph from "../../assets/glyphs/capGlyph.png";

class EducationCard extends React.Component {
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
              src={capGlyph}
              rounded
              style={{
                maxHeight: "40px",
                paddingRight: "15px",
              }}
            />
            Education
          </Card.Title>
        </Card.Body>
        <ListGroup
          className="list-group-flush"
          style={{ borderRadius: "20px" }}
        >
          <ListGroupItem variant="info">
            <label className="itemTitle">B.S., Computer Science</label>
            <label className="itemDetails">
              San Francisco State University
            </label>
            <label className="itemDate">2017-2020</label>
          </ListGroupItem>
          <ListGroupItem variant="info">
            <label className="itemTitle">
              Associates Degree, Computer Science
            </label>
            <label className="itemDetails">Pasadena City College</label>
            <label className="itemDate">2014-2017</label>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default EducationCard;
