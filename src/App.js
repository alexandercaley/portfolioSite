import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/Home">Brand</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      {/* Router Setup */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
