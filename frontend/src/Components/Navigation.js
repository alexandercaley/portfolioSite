import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Image } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Nav className="mr-auto">
        <LinkContainer exact to="/">
          <Nav.Link style={{ alignContent: "center" }}>
            <Image
              src={"/assets/logo/logo_trans.png"}
              className="logo"
              alt="logo"
            />
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
