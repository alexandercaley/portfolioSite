import React, { useState } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Image,
  Collapse,
} from "react-bootstrap";

import analytics from "../GoogleAnalytics/analytics";

export default function PersonCard() {
  const [showText, setshowText] = useState(false);

  let QuickAbout = () => {
    return (
      <Card.Text style={{ marginBottom: "0px" }}>
        Hi there! My name is Alexander. Three years ago I moved from Glendale,
        CA. to San Francisco to attend school. I recently graduated with a
        degree in Computer Science and I'm looking to pursue a career in
        software development.
      </Card.Text>
    );
  };

  let FullAbout = () => {
    return (
      <Card.Text>
        Much of my experience over the past several years has enabled me to hone
        my development skills in creating innovative solutions in both my
        academic and work environments.
        <br />
        As a result of working at Apple, I have gained various skills including
        making the best of every customer interaction and always maintaining a
        solution based outlook on things. My academic experience has paved the
        way for me to strengthen my problem solving and communication skills and
        also to meet knowledgeable people, several of whom I work with in
        software development.
        <br />
        Aside from work, I spend a lot of my free time 'onewheeling' through San
        Francisco, often going to the beach or Golden Gate Park. Additionally, I
        love to travel and explore the world when I have the opportunity.
      </Card.Text>
    );
  };

  let ReadMoreButton = () => {
    return (
      !showText && (
        <Card.Link
          variant="info"
          style={{
            color: "#00aa9c",
            fontFamily: "Roboto",
            fontSize: "16px",
            marginTop: "-1rem",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setshowText(!showText);
            analytics.sendEvent({
              category: "About",
              action: "Read more",
              value: 1,
            });
          }}
        >
          Read more
          <div style={{ fontSize: "10px", display: "inline" }}> ▼</div>
        </Card.Link>
      )
    );
  };

  return (
    <Card
      className="contextCard"
      style={{
        borderRadius: "20px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      bg="dark"
      text="white"
    >
      <Card.Img
        style={{ borderRadius: "30px", padding: "1rem" }}
        variant="top"
        src={"/assets/selfPortrait.jpeg"}
        alt="Self Portrait"
      />
      <Card.Body>
        <Card.Title
          className="cardTitle"
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "20pt",
          }}
        >
          About Me
        </Card.Title>
        <div
          style={{
            textAlign: "left",
            fontSize: "14pt",
          }}
        >
          <QuickAbout />
          <Collapse in={showText}>
            <div>
              <FullAbout />
            </div>
          </Collapse>
        </div>
      </Card.Body>
      <ReadMoreButton />
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
              src={"/assets/glyphs/resumeGlyph.png"}
              rounded
              style={{ maxHeight: "20px", paddingRight: "15px" }}
            />
            Résumé
          </Card.Link>
        </ListGroupItem>
        <ListGroupItem variant="info">
          <Card.Link href="mailto:alexandercaley@gmail.com">
            <Image
              src={"/assets/glyphs/mailGlyph.png"}
              rounded
              style={{ maxHeight: "20px", paddingRight: "15px" }}
            />
            alexandercaley@gmail.com
          </Card.Link>
        </ListGroupItem>
        <ListGroupItem variant="info">
          <Card.Link href="https://github.com/alexandercaley" target="_blank">
            <Image
              src={"/assets/glyphs/githubGlyph.png"}
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
              src={"/assets/glyphs/linkedInGlyph.png"}
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
