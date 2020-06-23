import React from "react";

import pilots from "../services/pilotsService";
import httpService from "../services/httpService";
import ConditionalLink from "./common/ConditionalLink";
import ListGroup from "./common/ListGroup";
import ProgressBar from "./common/ProgressBar";
import LessonHotkey from "./LessonHotkey";

function LessonsKit({
  hotkeys,
  className,
  description,
  exactUrl,
  items = [],
  onItemSelect = (item) => httpService.paint(item),
  onKitSelectUrl,
  query,
  subject,
}) {
  if (items.length === 0 && !description) return null;

  const kitUrl = onKitSelectUrl
    ? exactUrl
      ? onKitSelectUrl
      : onKitSelectUrl + "/" + subject
    : false;

  const pilot = pilots[subject];

  return (
    <div className={className} key={subject}>
      <ConditionalLink headline text={subject} to={kitUrl} />
      {pilot && <ProgressBar progress={Math.round(pilot[2])} undesigned />}
      <ListGroup
        description={description}
        itemChild={hotkeys && <LessonHotkey />}
        items={items}
        marginTop={pilot ? 0 : undefined}
        onItemSelect={onItemSelect}
        onKitSelectUrl={kitUrl}
        searching={query !== ""}
      />
    </div>
  );
}

export default LessonsKit;
