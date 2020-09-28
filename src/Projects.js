import React from "react";
import Thumbnail from "./Thumbnail";

import phone from "./assets/7644.png";
import amsterdam from "./assets/amsterdam.jpg";
import { Container, Row, Col } from "reactstrap";

function Projects() {
  return (
    <div>
      <h1 className="title">Projects</h1>
      <Container fluid="md">
        <Row>
          <Col>
            <Thumbnail
              link="/project/hello"
              image={amsterdam}
              title="TEST"
              category="Test App"
            />
          </Col>
          <Col>
            <Thumbnail
              link="/project/bye"
              image={phone}
              title="TEST"
              category="Test App"
            />
          </Col>
          <Col>
            <Thumbnail
              link="/test"
              image={phone}
              title="TEST"
              category="Test App"
            />
          </Col>
          <Col>
            <Thumbnail
              link="/test"
              image={phone}
              title="TEST"
              category="Test App"
            />
          </Col>
          <Col>
            <Thumbnail
              link="/test"
              image={phone}
              title="TEST"
              category="Test App"
            />
          </Col>
          <Col>
            <Thumbnail
              link="/test"
              image={phone}
              title="TEST"
              category="Test App"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
