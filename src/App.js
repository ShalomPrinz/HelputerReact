import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import NavBar from "./components/NavBar";

import Lessons from "./components/screens/Lessons";
import NotFound from "./components/screens/NotFound";
import Hotkeys from "./components/screens/Hotkeys";
import Autopilots from "./components/screens/Autopilots";
import Pilot from "./components/screens/Pilot";
import UltimatePilotContainer from "./components/screens/UltimatePilotContainer";
import LearnHotkeys from "./components/screens/LearnHotkeys";
import Guide from "./components/screens/Guide";

import {
  headUrl,
  lessonsUrl,
  notFoundUrl,
  hotkeysUrl,
  autopilotsUrl,
  autopilotUrl,
  ultimatePilotUrl,
  learnHotkeysUrl,
  guideUrl,
} from "./constants";

function App() {
  return (
    <>
      <NavBar />
      <ToastContainer
        autoClose={2500}
        limit={1}
        pauseOnFocusLoss={false}
        position="top-center"
      />
      <main className="container">
        <div className="content">
          <Switch>
            <Route path={guideUrl} component={Guide} />
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
