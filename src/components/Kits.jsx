import React, { useState } from "react";

import LessonsKit from "./LessonsKit";
import Search from "./common/Search";
import useWindowSize, { getGridSize } from "../hooks/useWindowSize";
import http from "../services/httpService";
import { search } from "../utils/array";

const default_onItemSelect = (item) => http.paint(item);

function Kits({
  fieldToSearch,
  FirstKit,
  hotkeys,
  lists,
  onItemSelect = default_onItemSelect,
  onKitSelectUrl,
}) {
  const [query, setQuery] = useState("");
  const size = useWindowSize();
  let found = false;

  const convertTuple = (tuple) => {
    let [items, description] = typeof tuple[1] === "string" ? tuple : [tuple];
    items = search(fieldToSearch, items, query);
    return [items, description];
  };

  let key = -1;
  return (
    <>
      <div className="mx-auto w-50">
        <Search value={query} onChange={(q) => setQuery(q)} />
      </div>
      <div className="row justify-content-center">
        {FirstKit && FirstKit}
        {Object.entries(lists).map(([subject, tuple]) => {
          let [items, description] = convertTuple(tuple);
          found = !found ? items.length !== 0 : found;

          return (
            <LessonsKit
              className={getGridSize(size[0])}
              hotkeys={hotkeys}
              key={++key}
              {...{
                description,
                items,
                onItemSelect,
                onKitSelectUrl,
                query,
                subject,
              }}
            />
          );
        })}
        {!found && <p>No lessons found matching your query.</p>}
      </div>
    </>
  );
}

export default Kits;
