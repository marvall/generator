import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./sass/reset.scss";

// import HomePage from "./components/pages/homePage/HomePage";
import AppBar from "./components/AppBar";

import routes from "./routes";

const HomePage = lazy(() => import("./components/pages/homePage/HomePage"));

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Что-то грузится...</p>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
        </Switch>
      </Suspense>

      {/* <HomePage /> */}
    </>
  );
}

export default App;
