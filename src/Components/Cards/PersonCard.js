import React from "react";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";

import selfPortrait from "../../assets/selfPortrait.jpeg";

import resumeGlyph from "../../assets/glyphs/resumeGlyph.png";
import mailGlyph from "../../assets/glyphs/mailGlyph.png";
import githubGlyph from "../../assets/glyphs/githubGlyph.png";
import linkedInGlyph from "../../assets/glyphs/linkedInGlyph.png";

class PersonCard extends React.Component {
  render() {
    let bio =
      "Hi there! My name is Alexander. Three years ago I moved from Glendale, CA. to San Francisco to attend school. I recently graduated with a degree in Computer Science and I'm looking to pursue a career in software development. Much of my experience over the past several years has enabled me to hone my development skills in creating innovative solutions in both my academic and work environments.\nAs a result of working at Apple, I have gained various skills including making the best of every customer interaction and always maintaining a solution based outlook on things. My academic experience has paved the way for me to strengthen my problem solving and communication skills and also to meet knowledgeable people, several of whom I work with in software development.\nAside from work, I spend a lot of my free time 'onewheeling' through San Francisco, often going to the beach or Golden Gate Park. Additionally, I love to travel and explore the world when I have the opportunity.";

    return (
      <Card
        className="contextCard"
        style={{
          borderRadius: "20px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
        bg="dark"
        text="white"
      >
        <Card.Img
          style={{ borderRadius: "30px", padding: "1rem" }}
          variant="top"
          src={selfPortrait}
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
            Alexander Caley
          </Card.Title>
          <Card.Text
            style={{
              textAlign: "left",
              whiteSpace: "pre-line",
              fontSize: "14pt",
            }}
          >
            {bio}
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
