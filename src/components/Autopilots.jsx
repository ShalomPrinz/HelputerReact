import React from "react";

import { autopilotUrl, ultimatePilotUrl } from "../constants";
import pilots, { ultimate } from "../services/pilotsService";
import Kits from "./Kits";
import LessonsKit from "./LessonsKit";

let key = -1;

const renderUltimate = (query, className) => (
  <LessonsKit
    className={className}
    description={ultimate.description}
    exactUrl
    onItemSelect={() => {}}
    onKitSelectUrl={ultimatePilotUrl}
    subject={ultimate.title}
  />
);

const renderPilot = (subject, tuple, query, className) => {
  let [items, description] = convertTuple(tuple);
  if (items.length === 0) return null;

  return (
    <LessonsKit
      hotkeys
      key={++key}
      {...{
        className,
        description,
        items,
        onKitSelectUrl: autopilotUrl,
        query,
        subject,
      }}
    />
  );
};

const convertTuple = (tuple) => {
  let [items, description] = typeof tuple[1] === "string" ? tuple : [tuple];
  return [items, description];
};

function Autopilots() {
  return (
    <Kits
      lists={pilots}
      renderFirstKit={renderUltimate}
      renderKit={renderPilot}
    />
  );
}

export default Autopilots;
