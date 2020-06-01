import React from "react";

import { autopilotUrl } from "../constants";
import pilots from "../services/pilotsService";
import Kits from "./Kits";

function Lessons() {
  return <Kits lists={pilots} onKitSelectUrl={autopilotUrl} />;
}

export default Lessons;
