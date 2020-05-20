import React, { useState } from "react";

import ListGroup from "./common/ListGroup";
import Search from "./common/Search";
import useWindowSize from "../hooks/useWindowSize";

const lessonsLists = {
  TextDesign: [
    {
      id: 1,
      name: "גודל גופן",
      type: "ComboBox",
    },
    {
      id: 2,
      name: "הגדל גופן",
      type: "Button",
    },
    {
      id: 3,
      name: "כווץ גופן",
      type: "Button",
    },
    {
      id: 4,
      name: "גופן",
      type: "ComboBox",
    },
    {
      id: 5,
      name: "מודגש",
      type: "Button",
    },
    {
      id: 6,
      name: "נטוי",
      type: "Button",
    },
    {
      id: 7,
      name: "קו תחתון",
      type: "SplitButton",
    },
  ],
  PageBasics: [
    {
      id: 1,
      name: "ישר לימין",
      type: "Button",
    },
    {
      id: 2,
      name: "מרכז",
      type: "Button",
    },
    {
      id: 3,
      name: "ישר לשמאל",
      type: "Button",
    },
    {
      id: 4,
      name: "ישר לשני הצדדים",
      type: "Button",
    },
    {
      id: 5,
      name: "העתק",
      type: "Button",
    },
    {
      id: 6,
      name: "הדבק",
      type: "SplitButton",
    },
    {
      id: 7,
      name: "גזור",
      type: "Button",
    },
    {
      id: 8,
      name: "בטל הקלדה",
      regex: "אין אפשרות לבטל|בטל הקלדה",
      type: "SplitButton",
    },
  ],
  BasicDesign: [
    {
      id: 1,
      name: "צבע גופן",
      type: "SplitButton",
    },
    {
      id: 2,
      name: "צבע סימון טקסט",
      type: "SplitButton",
    },
    {
      id: 3,
      name: "מברשת עיצוב",
      type: "Button",
    },
    {
      id: 4,
      name: "הצללה",
      type: "SplitButton",
    },
    {
      id: 5,
      name: "אפקטי טקסט וטיפוגרפיה",
      type: "MenuItem",
    },
  ],
};

const getClassName = (width, prefix = "col") =>
  prefix + "-" + (width > 800 ? "2" : width > 500 ? "5" : "8");

const filterLessonsList = (list, query) =>
  query === ""
    ? list
    : list.filter((lesson) => lesson.name.indexOf(query) !== -1);

function Lessons() {
  const [query, setQuery] = useState("");
  const size = useWindowSize();
  let foundLessons = false;

  return (
    <>
      <div className="mx-auto w-50">
        <Search value={query} onChange={(q) => setQuery(q)} />
      </div>
      <div className="row justify-content-center">
        {Object.entries(lessonsLists).map(([subject, list]) => {
          const filtered = filterLessonsList(list, query);

          if (filtered.length === 0) return null;
          foundLessons = true;

          return (
            <div className={getClassName(size[0])} key={subject}>
              <h4>{subject}</h4>
              <ListGroup
                items={filtered}
                onItemSelect={(id) => {}}
                searching={query !== ""}
              />
            </div>
          );
        })}
        {!foundLessons && <p>No lessons found matching your query.</p>}
      </div>
    </>
  );
}

export default Lessons;
