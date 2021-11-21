import React, { useState, useEffect, createRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, Collapse } from "react-bootstrap";

import Footer from "../ContactFooter";
import analytics from "../GoogleAnalytics/analytics";
import personData from "../../Data/personData.json";

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
          220
      );
    }
  }, [imageElement, showText]);

  let about = personData.about;
  let quickAboutArray = about.substring(0, quickAboutCount).split("\n");
  let QuickAbout = () => {
    return (
      <>
        {quickAboutArray.map((str, index) => {
          return (
            <div key={index} style={{ display: "inline" }}>
              {str}
              {index + 1 < quickAboutArray.length && <br />}
            </div>
          );
        })}
        {!showText && <>…</>}
      </>
    );
  };

  let FullAbout = () => {
    return (
      <>
        {about
          .substring(quickAboutCount, about.length)
          .split("\n")
          .map((str, index) => (
            <div key={index} style={{ display: "inline" }}>
              {str}
              <br />
            </div>
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
              showText && props.numCols === 1 ? "col-image-transition" : ""
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
              showText && props.numCols === 1 ? "col-image-transition" : ""
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
      <Footer showResume={true} isFloating={false} />
    </Card>
  );
}
