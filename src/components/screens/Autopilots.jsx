import React from "react";

import { autopilotUrl, ultimatePilotUrl } from "../../constants";
import pilots, { ultimate } from "../../services/pilotsService";
import Kits from "../Kits";
import LessonsKit from "../LessonsKit";

let key = -1;

const renderUltimate = (query, className) => {
  const { title, description } = ultimate;
  if (!isMatch(title, description, query)) return null;

  return (
    <LessonsKit
      className={className}
      description={description}
      exactUrl
      onItemSelect={() => {}}
      onKitSelectUrl={ultimatePilotUrl}
      subject={title}
    />
  );
};

const renderPilot = (subject, tuple, query, className) => {
  const [items, description] = tuple;
  if (!isMatch(subject, description, query)) return null;

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

const isMatch = (subject, description, query) => {
  query = query.toLowerCase();
  subject = subject.toLowerCase();
  description = description.toLowerCase();
  return description.includes(query) || subject.includes(query);
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
