import React from "react";

import lessonsLists, { fieldToSearch } from "../services/lessonsService";
import { search } from "../utils/array";
import Kits from "./Kits";
import Kit from "./LessonsKit";

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

function Lessons() {
  return <Kits lists={lessonsLists} renderKit={renderLesson} />;
}

export default Lessons;
