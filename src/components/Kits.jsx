import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

import ListGroup from "./common/ListGroup";
import Search from "./common/Search";
import useWindowSize from "../hooks/useWindowSize";
import http from "../services/httpService";
import { remoteUrl } from "../constants";

const paint = (params) => http.get(remoteUrl, { params });

const default_onItemSelect = ({ name, type, regex = name }) =>
  paint({ name: encodeURIComponent(regex), type });

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

          return (
            <div className={getClassName(size[0])} key={subject}>
              {onKitSelectUrl ? (
                <Link
                  className="navbar-brand text-dark text-decoration-none"
                  to={onKitSelectUrl}
                >
                  <h4>{subject}</h4>
                </Link>
              ) : (
                <h4>{subject}</h4>
              )}
              <ListGroup
                description={description}
                items={filteredList}
                onItemSelect={onItemSelect}
                onKitSelectUrl={onKitSelectUrl}
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
