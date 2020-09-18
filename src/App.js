import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand>
            <img src={logo} width="25" height="25" alt="" />
          </Navbar.Brand>
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
    </div>
  );
}

export default App;
