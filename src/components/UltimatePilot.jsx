import React, { useState } from "react";

import { ultimate } from "../services/pilotsService";
import http from "../services/httpService";
import { randomLessons } from "../services/lessonsService";
import ListItem from "./common/ListItem";
import Button from "./common/Button";

let all = randomLessons();

function UltimatePilot(props) {
  const [index, setIndex] = useState(0);
  const [lessons, setLessons] = useState([all[index]]);

  const firstIndex = 0;

  const increaseIndex = () => setIndex(index + 1);
  const decreaseIndex = () => setIndex(index - 1);

  const nextLessonChosen = (l) => {
    all = all.filter((item) => item !== l);
    setLessons([...lessons, l]);
    increaseIndex();
  };

  const removeChoices = (count = 1) => {
    if (count === 0) return;

    const previousLessons = [...lessons];
    for (var poppedCount = 0; poppedCount < count; poppedCount++)
      all.push(previousLessons.pop());
    setLessons(previousLessons);
  };

  const handlePrevious = () => {
    if (index > 0) {
      removeChoices();
      decreaseIndex();
    }
  };

  const handleSelect = (lesson) => {
    const index = lessons.findIndex((l) => l.name === lesson.name);
    removeChoices(lessons.length - 1 - index);
    setIndex(index);
  };

  const currentLesson = lessons[index];
  const nextLessons = [];
  for (let i = 0; i < 3 && index + i < all.length; i++)
    nextLessons[i] = all[index + i];
  const selectedName = currentLesson.name;

  return (
    <div className="col">
      <div className="row mt-4 h1 justify-content-center">{ultimate.title}</div>
      <div className="row justify-content-center text-center">
        {ultimate.description}
      </div>
      <ListItem
        autolist
        className="mx-auto my-5"
        handleSelect={() => http.paint(currentLesson)}
        item={currentLesson}
      />
      <ul className="mt-3 list-group list-group-horizontal justify-content-center">
        {nextLessons.map((l) => (
          <ListItem
            handleSelect={() => nextLessonChosen(l)}
            item={l}
            key={l.name}
          />
        ))}
      </ul>
      <ul className="my-3 list-group list-group-horizontal justify-content-center">
        {lessons.map((l) => (
          <ListItem
            handleSelect={() => handleSelect(l)}
            item={l}
            key={l.name}
            selected={l.name === selectedName}
          />
        ))}
      </ul>
      <div className="row justify-content-center">
        <Button disabled={index === firstIndex} onClick={handlePrevious}>
          Previous
        </Button>
      </div>
    </div>
  );
}

export default UltimatePilot;
