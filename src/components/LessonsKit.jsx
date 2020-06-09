import React from "react";

import ConditionalLink from "./common/ConditionalLink";
import ListGroup from "./common/ListGroup";
import ProgressBar from "./common/ProgressBar";
import pilots from "../services/pilotsService";

export const filterList = (list, query) =>
  query === ""
    ? list
    : list.filter((lesson) => lesson.name.indexOf(query) !== -1);

function LessonsKit({
  className,
  list,
  onItemSelect,
  onKitSelectUrl,
  query,
  subject,
}) {
  const [items, description] = typeof list[1] === "string" ? list : [list];

  const filteredList = filterList(items, query);

  if (filteredList.length === 0) return null;

  const kitUrl = onKitSelectUrl ? onKitSelectUrl + "/" + subject : false;

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
