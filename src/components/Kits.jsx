import React, { useState } from "react";
import PropTypes from "prop-types";

import Search from "./common/Search";
import useWindowSize, { getGridSize } from "../hooks/useWindowSize";

const convertTuple = (tuple) =>
  typeof tuple[1] === "string" ? tuple : [tuple];

function Kits({ DropdownFilter, lists, renderFirstKit = () => {}, renderKit }) {
  const [query, setQuery] = useState("");

  const size = useWindowSize();
  const kitWidth = getGridSize(size[0]);

  const FirstKit = renderFirstKit(query, kitWidth);

  let found = false;
  const rendered = Object.entries(lists).map(([subject, tuple]) => {
    tuple = convertTuple(tuple);
    const kit = renderKit(subject, tuple, query, kitWidth);
    found = !found ? kit != null : found;
    return kit;
  });

  found = !found ? FirstKit != null : found;

  return (
    <>
      <div className="d-flex mx-auto w-50">
        <Search value={query} onChange={(q) => setQuery(q)} />
        {DropdownFilter}
      </div>
      <div className="row justify-content-center">
        {FirstKit}
        {rendered}
        {!found && <p>No lessons found matching your query.</p>}
      </div>
    </>
  );
}

Kits.propTypes = {
  lists: PropTypes.object.isRequired,
  renderKit: PropTypes.func.isRequired,
};

export default Kits;
