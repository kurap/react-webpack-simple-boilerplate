import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as styles from "./style"; // eslint-disable-line no-unused-vars

class Top extends Component {
  render() {
    return (
      <div>
        <h1>Top</h1>
        <li>
          <Link className={styles.hover} to="/">
            TOP
          </Link>
        </li>
        <li>
          <Link className={styles.hover} to="/about">
            ABOUT
          </Link>
        </li>
      </div>
    );
  }
}

export default Top;
