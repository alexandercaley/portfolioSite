import React from "react";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";

import selfPortrait from "../../assets/selfPortrait.jpeg";

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
        <Card.Img
          style={{ borderRadius: "20px" }}
          variant="top"
          src={selfPortrait}
        />
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
          <Card.Text style={{ textAlign: "left" }}>
            Hi there! My name is Alexander, I moved to San Francisco from
            Glendale, CA about 3 years ago looking to change things up. Recently
            I've graduated with a degree in Computer Science and I'm looking to
            establish a career in software development. Much of my work
            experience and academic experience over the past years has enabled
            me to hone my skills in contributing to the creating of innovative
            solutions whether that be in an academic environemnt or in a work
            environemnt. Through working at Apple I've become very comfortable
            making the best of every sitation and always keeping a solutions
            based outlook on things, while my time in school has allowed me to
            meet some great people who I can work alongside in software
            development and really strengthen both my problem solving and
            communication skills. Aside from work I spend a lot of my time
            'onewheeling' through San Francisco and like to spend time at the
            nearby beach or Golden Gate Park and I really like to travel when I
            get the chance.
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
