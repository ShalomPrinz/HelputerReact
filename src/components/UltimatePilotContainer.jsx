import React, { useState, useEffect } from "react";

import { randomLessons } from "../services/lessonsService";
import UltimatePilot from "./UltimatePilot";

let all = randomLessons();

function UltimatePilotContainer(props) {
  const [lessons, setLessons] = useState([all[0]]);

  useEffect(() => shuffle(lessons), [lessons]);

  const nextLessonChosen = (l) => {
    all = all.filter((item) => item !== l);
    setLessons([...lessons, l]);
  };

  const removeChoices = (count = 1) => {
    if (count === 0) return;

    const previousLessons = [...lessons];
    for (let poppedCount = 0; poppedCount < count; poppedCount++)
      previousLessons.pop();
    setLessons(previousLessons);
  };

  return <UltimatePilot {...{ lessons, nextLessonChosen, removeChoices }} />;
}

const shuffle = (ordered) => {
  const notOrdered = randomLessons().filter((l) => ordered.indexOf(l) === -1);
  all = [...ordered, ...notOrdered];
};

export const getOptions = (index) => {
  const options = [];
  for (let i = 1; i < 4 && index + i < all.length; i++)
    options[i] = all[index + i];
  return options;
};

export default UltimatePilotContainer;
