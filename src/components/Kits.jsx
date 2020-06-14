import React, { useState } from "react";

import LessonsKit from "./LessonsKit";
import Search from "./common/Search";
import useWindowSize, { getGridSize } from "../hooks/useWindowSize";
import http from "../services/httpService";
import { search } from "../utils/array";

const default_onItemSelect = (item) => http.paint(item);

function Kits({
  fieldToSearch = "name",
  FirstKit,
  lists,
  onItemSelect = default_onItemSelect,
  onKitSelectUrl,
}) {
  const [query, setQuery] = useState("");
  const size = useWindowSize();
  let found = false;

  return (
    <>
      <div className="mx-auto w-50">
        <Search value={query} onChange={(q) => setQuery(q)} />
      </div>
      <div className="row justify-content-center">
        {FirstKit && FirstKit}
        {Object.entries(lists).map(([subject, list]) => {
          found = !found
            ? search(fieldToSearch, list, query).length !== 0
            : found;
          return (
            <LessonsKit
              className={getGridSize(size[0])}
              {...{ list, onItemSelect, onKitSelectUrl, query, subject }}
            />
          );
        })}
        {!found && <p>No lessons found matching your query.</p>}
      </div>
    </>
  );
}

export default Kits;
