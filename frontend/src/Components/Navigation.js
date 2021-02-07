import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo/logo_trans.png";

export default function Navigation() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Nav className="mr-auto">
        <LinkContainer exact to="/">
          <Nav.Link style={{ alignContent: "center" }}>
            <img src={logo} className="logo" alt="" />
          </Nav.Link>
        </LinkContainer>
        <LinkContainer exact to="/">
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
  );
}
