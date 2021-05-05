import React, { useState, useEffect, createRef } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Image,
  Collapse,
} from "react-bootstrap";

import analytics from "../GoogleAnalytics/analytics";

export default function PersonCard(props) {
  const [showText, setShowText] = useState();
  const [quickAboutCount, setQuickAboutCount] = useState(83);
  let imageElement = createRef();

  useEffect(() => {
    props.numCols > 1 ? setShowText(true) : setShowText(false);
  }, [props.numCols]);

  useEffect(() => {
    if (!showText && imageElement.current.offsetHeight > 0) {
      setQuickAboutCount(
        (imageElement.current.offsetHeight * imageElement.current.offsetWidth) /
          190
      );
    }
  }, [imageElement, showText]);

  let about = `Hi there! My name is Alexander. In 2017 I moved from Glendale, CA to San Francisco. I recently graduated with a degree in Computer Science and I'm looking to pursue a career in software development. Much of my experience over the past several years has enabled me to hone my development skills in creating innovative solutions in both my academic and work environments.\n As a result of working at Apple, I have gained various skills including making the best of every customer interaction and always maintaining a solution based outlook on things. My academic experience has paved the way for me to strengthen my problem solving and communication skills and also to meet knowledgeable people, several of whom I work with in software development.\n Aside from work, I spend a lot of my free time 'onewheeling' through San Francisco, often going to the beach or Golden Gate Park. Additionally, I love to travel and explore the world when I have the opportunity.`;

  let QuickAbout = () => {
    return (
      <>
        {about
          .substring(0, quickAboutCount)
          .split("\n")
          .map((str) => (
            <>
              {str}
              <br />
            </>
          ))}
        {!showText ? <>...</> : <></>}
      </>
    );
  };

  let FullAbout = () => {
    return (
      <>
        {about
          .substring(quickAboutCount, about.length)
          .split("\n")
          .map((str) => (
            <>
              {str}
              <br />
            </>
          ))}
      </>
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
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowText(!showText);
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
      <Container fluid={true} style={{ padding: "0rem" }}>
        <Row xs={showText ? 1 : 2} md={showText ? 1 : 2}>
          <Col
            className={
              showText && props.numCols === 1 ? "col-person-transition" : ""
            }
          >
            <div
              style={{
                padding: "1rem",
                paddingRight: showText ? "1rem" : "0rem",
              }}
            >
              <Card.Img
                style={{ borderRadius: "20px" }}
                variant="top"
                src={"/assets/selfPortrait.jpeg"}
                alt="Self Portrait"
                ref={imageElement}
              />
            </div>
          </Col>
          <Col
            className={
              showText && props.numCols === 1 ? "col-person-transition" : ""
            }
          >
            <Card.Body>
              <Card.Title
                className="cardTitle"
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontSize: showText ? "20pt" : "14pt",
                }}
              >
                About
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "left",
                  fontSize: showText ? "14pt" : "10pt",
                }}
              >
                <QuickAbout />
                <Collapse
                  in={showText}
                  style={showText ? { display: "inline" } : {}}
                >
                  <div>
                    <FullAbout />
                  </div>
                </Collapse>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <ReadMoreButton />
      </Container>
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
