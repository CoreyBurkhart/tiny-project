import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/Home.js";
import Layout from "./layout/Layout.js";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
, document.getElementById('root'))
