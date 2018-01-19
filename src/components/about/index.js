import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as styles from "./style"; // eslint-disable-line no-unused-vars

class About extends Component {
  render() {
    return (
      <div>
        About
        <li>
          <Link className={styles.hover} to="/">
            HOME
          </Link>
        </li>
      </div>
    );
  }
}

export default About;
