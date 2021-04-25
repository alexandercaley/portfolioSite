import React from "react";

import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import educationData from "../../Data/educationData.json";

export default function EducationCard() {
  let PresentEducationData = () => {
    return educationData.map((item, index) => {
      return (
        <ListGroupItem variant="info" key={index}>
          <div className="itemTitle">{item.degree}</div>
          <div className="personItemDetails">{item.institution}</div>
          <div className="itemDate">{item.year}</div>
        </ListGroupItem>
      );
    });
  };

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
            src={"/assets/glyphs/capGlyph.png"}
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
        <PresentEducationData />
      </ListGroup>
    </Card>
  );
}
