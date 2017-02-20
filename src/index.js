import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
// import Home from "./pages/home/Home.js";
import Layout from "./layout/Layout.js";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import BuildEditable from './pages/Build-Editable-View/BuildEditable.js';
import BuildEditableStore from './pages/Build-Editable-View/BuildEditableStore.js';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout} >
      <IndexRoute component={BuildEditable} store={BuildEditableStore} />
    </Route>
  </Router>
, document.getElementById('root'))
