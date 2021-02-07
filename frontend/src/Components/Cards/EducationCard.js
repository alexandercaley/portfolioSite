import React from "react";

import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";

import capGlyph from "../../assets/glyphs/capGlyph.png";

export default function EducationCard() {
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
        style={{ borderRadius: "20px", marginTop: "-1rem" }}
      >
        <ListGroupItem variant="info">
          <div className="itemTitle">B.S., Computer Science</div>
          <div className="personItemDetails">
            San Francisco State University
          </div>
          <div className="itemDate">2017-2020</div>
        </ListGroupItem>
        <ListGroupItem variant="info">
          <div className="itemTitle">Associates Degree, Computer Science</div>
          <div className="personItemDetails">Pasadena City College</div>
          <div className="itemDate">2014-2017</div>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}
