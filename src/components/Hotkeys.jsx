import React, { useState } from "react";
import { Link } from "react-router-dom";

import hotkeys, { fieldToSearch } from "../services/hotkeysService";
import Table from "./common/Table";
import Search from "./common/Search";
import { search } from "../utils/array";
import { learnHotkeysUrl } from "../constants";

const Hotkeys = () => {
  const [query, setQuery] = useState("");

  const columns = [
    {
      path: "name",
      label: "שם פקודה",
      content: (hotkey) => (
        <Link to={learnHotkeysUrl + "/" + hotkey.name}>{hotkey.name}</Link>
      ),
    },
    { path: "combination", label: "מקשי צירוף" },
    { path: "key", label: "מקש" },
  ];

  const data = search(fieldToSearch, hotkeys, query);

  return (
    <>
      <div className="mx-auto w-50">
        <Search value={query} onChange={(q) => setQuery(q)} />
      </div>
      <Table columns={columns} data={data} scrollable />
      {data.length === 0 && (
        <p className="text-center mt-1">
          No hotkeys found matching your query.
        </p>
      )}
    </>
  );
};

export default Hotkeys;
