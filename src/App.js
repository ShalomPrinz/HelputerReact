import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Lessons from "./components/Lessons";
import NotFound from "./components/NotFound";
import Hotkeys from "./components/Hotkeys";
import Autopilots from "./components/Autopilots";
import Pilot from "./components/Pilot";
import {
  headUrl,
  lessonsUrl,
  notFoundUrl,
  hotkeysUrl,
  autopilotsUrl,
  autopilotUrl,
} from "./constants";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="content">
          <Switch>
            <Route path={lessonsUrl} component={Lessons} />
            <Route path={hotkeysUrl} component={Hotkeys} />
            <Route path={autopilotUrl + "/:subject"} component={Pilot} />
            <Route path={autopilotsUrl} component={Autopilots} />
            <Route path={notFoundUrl} component={NotFound} />
            <Redirect from={headUrl} exact to={lessonsUrl} />
            <Redirect to={notFoundUrl} />
          </Switch>
        </div>
      </main>
    </>
  );
}

export default App;
