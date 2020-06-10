import React, { useState } from "react";

import { randomLessons } from "../services/lessonsService";
import UltimatePilot from "./UltimatePilot";

let all = randomLessons();

function UltimatePilotContainer(props) {
  const [lessons, setLessons] = useState([all[0]]);

  const nextLessonChosen = (l) => {
    all = all.filter((item) => item !== l);
    setLessons([...lessons, l]);
  };

  const removeChoices = (count = 1) => {
    if (count === 0) return;

    const previousLessons = [...lessons];
    for (var poppedCount = 0; poppedCount < count; poppedCount++)
      all.push(previousLessons.pop());
    setLessons(previousLessons);
  };

  return <UltimatePilot {...{ lessons, nextLessonChosen, removeChoices }} />;
}

export const getOptions = (index) => {
  const options = [];
  for (let i = 1; i < 4 && index + i < all.length; i++)
    options[i] = all[index + i];
  return options;
};

export default UltimatePilotContainer;
