import React from "react";

import ConditionalLink from "./common/ConditionalLink";
import ListGroup from "./common/ListGroup";
import ProgressBar from "./common/ProgressBar";
import pilots from "../services/pilotsService";
import { search } from "../utils/array";

const fieldToSearch = "name";

function LessonsKit({
  className,
  exactUrl,
  list,
  onItemSelect,
  onKitSelectUrl,
  query,
  subject,
}) {
  const [items, description] = typeof list[1] === "string" ? list : [list];

  const filteredList = search(fieldToSearch, items, query);

  if (filteredList.length === 0 && items.length !== 0) return null;

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
        items={filteredList}
        marginTop={pilot ? 0 : undefined}
        onItemSelect={onItemSelect}
        onKitSelectUrl={kitUrl}
        searching={query !== ""}
      />
    </div>
  );
}

export default LessonsKit;
