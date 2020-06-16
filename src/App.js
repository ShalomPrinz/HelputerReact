import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Lessons from "./components/Lessons";
import NotFound from "./components/NotFound";
import Hotkeys from "./components/Hotkeys";
import Autopilots from "./components/Autopilots";
import Pilot from "./components/Pilot";
import UltimatePilotContainer from "./components/UltimatePilotContainer";
import LearnHotkeys from "./components/LearnHotkeys";

import {
  headUrl,
  lessonsUrl,
  notFoundUrl,
  hotkeysUrl,
  autopilotsUrl,
  autopilotUrl,
  ultimatePilotUrl,
  learnHotkeysUrl,
} from "./constants";

function App() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <main className="container">
        <div className="content">
          <Switch>
            <Route path={lessonsUrl} component={Lessons} />
            <Route path={learnHotkeysUrl + "/:name"} component={LearnHotkeys} />
            <Route path={learnHotkeysUrl} component={LearnHotkeys} />
            <Route path={hotkeysUrl} component={Hotkeys} />
            <Route path={autopilotUrl + "/:subject"} component={Pilot} />
            <Route path={autopilotsUrl} component={Autopilots} />
            <Route path={ultimatePilotUrl} component={UltimatePilotContainer} />
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
