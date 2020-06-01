import React, { useState } from "react";

import ListGroup from "./common/ListGroup";
import Search from "./common/Search";
import useWindowSize from "../hooks/useWindowSize";

const getClassName = (width, prefix = "col") =>
  prefix + "-" + (width > 800 ? "2" : width > 500 ? "5" : "8");

const filterList = (list, query) =>
  query === ""
    ? list
    : list.filter((lesson) => lesson.name.indexOf(query) !== -1);

function Kits({ lists, onItemSelect }) {
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
          const filteredList = filterList(list, query);

          if (filteredList.length === 0) return null;
          found = true;

          return (
            <div className={getClassName(size[0])} key={subject}>
              <h4>{subject}</h4>
              <ListGroup
                items={filteredList}
                onItemSelect={onItemSelect}
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
