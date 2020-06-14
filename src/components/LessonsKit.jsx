import React from "react";

import ConditionalLink from "./common/ConditionalLink";
import ListGroup from "./common/ListGroup";
import ProgressBar from "./common/ProgressBar";
import pilots from "../services/pilotsService";

function LessonsKit({
  className,
  description,
  exactUrl,
  items = [],
  onItemSelect,
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
