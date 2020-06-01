import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Lessons from "./components/Lessons";
import { headUrl, lessonsUrl, notFoundUrl } from "./constants";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="content">
          <Switch>
            <Route path={lessonsUrl} component={Lessons} />
            <Redirect from={headUrl} exact to={lessonsUrl} />
            <Redirect to={notFoundUrl} />
          </Switch>
        </div>
      </main>
    </>
  );
}

export default App;
