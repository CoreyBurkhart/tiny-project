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
  constructor() {
    super()
    this.state = {navCx: ''};
    this.expandMenu = this.expandMenu.bind(this)
  }
  expandMenu(e) {
    if(this.state.navCx === 'slideOutLeft' || this.state.navCx === '') {
      this.setState({navCx: 'slideInLeft'})
    } else {
      this.setState({navCx: 'slideOutLeft'})
    }
  }
  render() {
    return (
      <header id="main-header" className="row">
        <span onClick={this.expandMenu} className="fa fa-bars fa-2x col-*-2" aria-hidden="true"></span>
        <Link className="col-*-10" to="/">
          <h1 id="main-logo">Tiny Planner</h1>
        </Link>
      <nav id="sidebar-container" className={"animated row " + this.state.navCx} >
        <span onClick={this.expandMenu} className="fa fa-close fa-2x col-xs-2 col-xs-offset-10" aria-hidden="true"></span>
        <ul>
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </nav>
    </header>
    )
  }
}
