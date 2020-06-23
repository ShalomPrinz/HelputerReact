import React from "react";

import lessonsLists, { fieldToSearch } from "../services/lessonsService";
import { search } from "../utils/array";
import Kits from "./Kits";
import Kit from "./LessonsKit";

let key = -1;
const renderLesson = (subject, tuple, query, className) => {
  let [items, description] = convertTuple(tuple, query);
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

const convertTuple = (tuple, query) => {
  let [items, description] = typeof tuple[1] === "string" ? tuple : [tuple];
  items = search(fieldToSearch, items, query);
  return [items, description];
};

function Lessons() {
  return <Kits lists={lessonsLists} renderKit={renderLesson} />;
}

export default Lessons;
