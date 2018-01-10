import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        About
        <li>
          <Link to="/">HOME</Link>
        </li>
      </div>
    );
  }
}

export default About;
