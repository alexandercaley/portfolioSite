import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ContactPage from "./Pages/ContactPage";
import ProjectPage from "./Pages/ProjectPage";
import PageNotFound from "./Pages/PageNotFound";

import useGoogleAnalytics from "./GoogleAnalytics/useGoogleAnalytics";

import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

import logo from "./assets/logo/logo_trans.png";

function Routes() {
  useGoogleAnalytics();

  return(
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={ContactPage} />
      <Route path="/project/:id" component={ProjectPage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand style={{ alignContent: "center" }}>
            <img src={logo} className="logo" alt="" />
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
        <Routes />
      </Router>
    </div>
  );
}

export default App;
