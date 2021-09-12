import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavTopBar, NavActivities } from "../components";
import { HomePage } from "../pages";

function App() {
  return (
    <Router>
      <NavTopBar />
      <NavActivities />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/user/12">
          <h1>user 12</h1>
        </Route>
        <Route path="/user/18">
          <h1>user 18</h1>
        </Route>
        <Route path="*">
          <h1>Error</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
