import React, { Component } from "react";
import { Link } from "react-router-dom";

class Top extends Component {
  render() {
    return (
      <div>
        <h1>Top</h1>
        <li>
          <Link to="/">TOP</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </div>
    );
  }
}

export default Top;
