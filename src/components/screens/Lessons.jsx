import React, { useState } from "react";

import lessonsLists, { fieldToSearch } from "../../services/lessonsService";
import { search } from "../../utils/array";
import Dropdown from "../common/Dropdown";
import Kits from "../Kits";
import Kit from "../LessonsKit";

let key = -1;
const renderLesson = (subject, tuple, query, className) => {
  let [items, description] = tuple;
  items = search(fieldToSearch, items, query);
  if (items.length === 0) return null;

  return (
    <Kit
      hotkeys
      key={++key}
      {...{
        className,
        description,
        items,
        query,
        subject,
      }}
    />
  );
};

const keys = Object.keys(lessonsLists);
function Lessons() {
  const [tab, setTab] = useState("בית");

  const currentLists = lessonsLists[tab];

  const dropdown = (
    <Dropdown
      className="ml-3 my-3 dropdown-menu-left"
      headline={tab}
      onSelect={(key) => setTab(keys[key])}
      options={keys}
    />
  );

  return (
    <Kits
      DropdownFilter={dropdown}
      lists={currentLists}
      renderKit={renderLesson}
    />
  );
}

export default Lessons;
