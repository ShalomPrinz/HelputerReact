import React from "react";

import ListGroup from "./common/ListGroup";

const lessons = {
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

function Lessons(props) {
  return (
    <div>
      {Object.entries(lessons).map(([subject, list]) => (
        <>
          <h1>{subject}</h1>
          <ListGroup items={list} />
        </>
      ))}
    </div>
  );
}

export default Lessons;
