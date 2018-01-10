import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Top from "./top";
import About from "./about";
import * as styles from "../styles/app"; // eslint-disable-line no-unused-vars

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Top} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
