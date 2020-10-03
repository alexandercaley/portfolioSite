import React from "react";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

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
          <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
            Work Experience
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup
          className="list-group-flush"
          style={{ textAlign: "left", borderRadius: "20px" }}
        >
          <ListGroupItem variant="info">Resumé</ListGroupItem>
          <ListGroupItem variant="info">email</ListGroupItem>
          <ListGroupItem variant="info">Social Media</ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default WorkExpCard;
