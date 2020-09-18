import React from "react";
import Thumbnail from "./Thumbnail";

import logo from "./assets/7644.jpg";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail link="/test" image={logo} title="TEST" category="Test App" />
    </div>
  );
}

export default Projects;
