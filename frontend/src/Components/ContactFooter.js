import React from "react";

import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";

import mailGlyph from "../assets/glyphs/mailGlyph.png";
import githubGlyph from "../assets/glyphs/githubGlyph.png";
import linkedInGlyph from "../assets/glyphs/linkedInGlyph.png";

export default function Footer() {
  return (
    <div className="contactFooter">
      <ListGroup
        className="list-group-flush"
        style={{
          textAlign: "left",
          borderRadius: "20px",
          maxWidth: "22rem",
        }}
      >
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
    </div>
  );
}
