import React from "react";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";

import image from "../../assets/IMG_1092.jpeg";

import resumeGlyph from "../../assets/glyphs/resumeGlyph.png";
import mailGlyph from "../../assets/glyphs/mailGlyph.png";
import githubGlyph from "../../assets/glyphs/githubGlyph.png";
import linkedInGlyph from "../../assets/glyphs/linkedInGlyph.png";

class PersonCard extends React.Component {
  render() {
    return (
      <Card
        className="contextCard"
        style={{ borderRadius: "20px" }}
        bg="dark"
        text="white"
      >
        <Card.Img style={{ borderRadius: "20px" }} variant="top" src={image} />
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "25pt",
            }}
          >
            Alexander Caley
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
          <ListGroupItem variant="info">
            <Card.Link
              href="https://drive.google.com/file/d/130eGmBNs_dbvJmdKwGUBNdKtczMwgM3e/view?usp=sharing"
              target="_blank"
            >
              <Image
                src={resumeGlyph}
                rounded
                style={{ maxHeight: "20px", paddingRight: "15px" }}
              />
              Resumé
            </Card.Link>
          </ListGroupItem>
          <ListGroupItem variant="info">
            <Card.Link href="mailto:alexandercaley@gmail.com">
              <Image
                src={mailGlyph}
                rounded
                style={{ maxHeight: "20px", paddingRight: "15px" }}
              />
              alexandercaley@gmail.com
            </Card.Link>
          </ListGroupItem>
          <ListGroupItem variant="info">
            <Card.Link href="https://github.com/alexandercaley" target="_blank">
              <Image
                src={githubGlyph}
                rounded
                style={{ maxHeight: "20px", paddingRight: "15px" }}
              />
              Github
            </Card.Link>
          </ListGroupItem>
          <ListGroupItem variant="info">
            <Card.Link
              href="https://www.linkedin.com/in/alexandercaley/"
              target="_blank"
            >
              <Image
                src={linkedInGlyph}
                rounded
                style={{ maxHeight: "20px", paddingRight: "15px" }}
              />
              LinkedIn
            </Card.Link>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default PersonCard;
