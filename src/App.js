import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import JsonData from "./data/data.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

export class App extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Switch>
          <Route path="/home">
            <Home data={this.state.landingPageData.Home} />
          </Route>
          <Route path="/about">
            <About data={this.state.landingPageData.About} />
          </Route>
          <Route path="/services">
            <Services data={this.state.landingPageData.Services} />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/testimonials">
            <Testimonials data={this.state.landingPageData.Testimonials} />
          </Route>
          <Route path="/team">
            <Team data={this.state.landingPageData.Team} />
          </Route>
          <Route path="/contact">
            <Contact data={this.state.landingPageData.Contact} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
