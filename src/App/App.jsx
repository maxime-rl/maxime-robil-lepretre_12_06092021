import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavTopBar } from "../components";
import { HomePage, UserDashboardPage, ErrorPage } from "../pages";

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
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
