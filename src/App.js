import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Lessons from "./components/Lessons";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="content">
          <Switch>
            <Route path="/lessons" component={Lessons} />
            <Redirect from="/" exact to="/lessons" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
      <Lessons />
    </>
  );
}

export default App;
