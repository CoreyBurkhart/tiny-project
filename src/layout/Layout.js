import React from "react";
import { Link } from "react-router";
require("./Layout.scss");

/* This is the site-wide layout. It includes the nav and footer
   and will have pages inserted in it */

export default class Layout extends React.Component {
  render() {
    return (
      <div id="layout-wrapper">
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link>
              <i className="material-icons">search</i>
              <sub>Search</sub>
            </Link>
          </li>
          <li>
            <Link>
              <i className="material-icons">local_grocery_store</i>
              <sub>Cart</sub>
            </Link>
          </li>
          <li>
            <Link>
              <i className="material-icons">mood</i>
              <sub>Saved</sub>
            </Link>
          </li>
          <li>
            <Link >
              <i className="material-icons active">person_outline</i>
              <sub className='active'>Me</sub>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
