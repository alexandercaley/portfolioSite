import React from "react";
import { useEffect } from "react";

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

import ReactGA from "react-ga";
import { createBrowserHistory } from 'history';

import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

import logo from "./assets/logo/logo_trans.png";

const history = createBrowserHistory();

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-145691579-2");

    history.listen(location => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
  }, [])

  return (
    <div className="App">
      <Router history={history}>
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
        {/* Router Setup */}
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
      </Router>
    </div>
  );
}

export default App;
