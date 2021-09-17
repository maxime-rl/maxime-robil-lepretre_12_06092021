import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavTopBar } from "../components";
import { HomePage, UserDashboardPage } from "../pages";

function App() {
  return (
    <Router>
      <NavTopBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/user/:userId">
          <UserDashboardPage />
        </Route>
        <Route path="*">
          <h1>Error</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
