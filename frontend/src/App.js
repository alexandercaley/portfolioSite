import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ContactPage from "./Pages/ContactPage";
import ProjectPage from "./Pages/ProjectPage";
import PageNotFound from "./Pages/PageNotFound";

import useGoogleAnalytics from "./Components/GoogleAnalytics/useGoogleAnalytics";

import "./App.css";

function Routes() {
  useGoogleAnalytics();

  return (
    <Switch>
      <Redirect exact from="/home" to="/" />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={ContactPage} />
      <Route path="/project/:id" component={ProjectPage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
    </div>
  );
}
