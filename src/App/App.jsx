import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavTopBar } from "../components";
import { HomePage, UserDashboardPage, ErrorPage } from "../pages";
// import styled from "styled-components";

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

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height: 100vh;
// `;

export default App;
