import React from "react";
import Thumbnail from "./Thumbnail";

import logo from "./assets/7644.jpg";
import { Row, Col } from "reactstrap";

function Projects(props) {
  return (
    <div>
      <h1 className="title">Projects</h1>
      <Row>
        <Col>
          <Thumbnail
            link="/test"
            image={logo}
            title="TEST"
            category="Test App"
          />
        </Col>
        <Col>
          <Thumbnail
            link="/test"
            image={logo}
            title="TEST"
            category="Test App"
          />
        </Col>
        <Col>
          <Thumbnail
            link="/test"
            image={logo}
            title="TEST"
            category="Test App"
          />
        </Col>
        <Col>
          <Thumbnail
            link="/test"
            image={logo}
            title="TEST"
            category="Test App"
          />
        </Col>
        <Col>
          <Thumbnail
            link="/test"
            image={logo}
            title="TEST"
            category="Test App"
          />
        </Col>
        <Col>
          <Thumbnail
            link="/test"
            image={logo}
            title="TEST"
            category="Test App"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
