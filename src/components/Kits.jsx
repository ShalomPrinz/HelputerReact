import React, { useState } from "react";

import ListGroup from "./common/ListGroup";
import Search from "./common/Search";
import ConditionalLink from "./common/ConditionalLink";
import ProgressBar from "./common/ProgressBar";
import useWindowSize from "../hooks/useWindowSize";
import http from "../services/httpService";
import pilots from "../services/pilotsService";

const default_onItemSelect = (item) => http.paint(item);

const getClassName = (width, prefix = "col") =>
  prefix + "-" + (width > 800 ? "2" : width > 500 ? "5" : "8");

const filterList = (list, query) =>
  query === ""
    ? list
    : list.filter((lesson) => lesson.name.indexOf(query) !== -1);

function Kits({ lists, onItemSelect = default_onItemSelect, onKitSelectUrl }) {
  const [query, setQuery] = useState("");
  const size = useWindowSize();
  let found = false;

  return (
    <>
      <div className="mx-auto w-50">
        <Search value={query} onChange={(q) => setQuery(q)} />
      </div>
      <div className="row justify-content-center">
        {Object.entries(lists).map(([subject, list]) => {
          const [items, description] =
            typeof list[1] === "string" ? list : [list];

          const filteredList = filterList(items, query);

          if (filteredList.length === 0) return null;
          found = true;

          const kitUrl = onKitSelectUrl
            ? onKitSelectUrl + "/" + subject
            : false;

          const pilot = pilots[subject];

          return (
            <div className={getClassName(size[0])} key={subject}>
              <ConditionalLink headline text={subject} to={kitUrl} />
              {pilot && (
                <ProgressBar progress={Math.round(pilot[2])} undesigned />
              )}
              <ListGroup
                description={description}
                items={filteredList}
                onItemSelect={onItemSelect}
                onKitSelectUrl={kitUrl}
                searching={query !== ""}
              />
            </div>
          );
        })}
        {!found && <p>No lessons found matching your query.</p>}
      </div>
    </>
  );
}

export default Kits;
