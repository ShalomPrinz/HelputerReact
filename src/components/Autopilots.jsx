import React from "react";

import { autopilotUrl, ultimatePilotUrl } from "../constants";
import useWindowSize, { getGridSize } from "../hooks/useWindowSize";
import pilots, { ultimate } from "../services/pilotsService";
import Kits from "./Kits";
import LessonsKit from "./LessonsKit";

function Lessons() {
  const size = useWindowSize();

  const ultimatePilotKit = (
    <LessonsKit
      className={getGridSize(size[0])}
      description={ultimate.description}
      exactUrl
      onKitSelectUrl={ultimatePilotUrl}
      subject={ultimate.title}
    />
  );

  return (
    <Kits
      FirstKit={ultimatePilotKit}
      lists={pilots}
      onKitSelectUrl={autopilotUrl}
    />
  );
}

export default Lessons;
