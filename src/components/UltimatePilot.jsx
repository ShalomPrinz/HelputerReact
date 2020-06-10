import React, { useState } from "react";

import { ultimate } from "../services/pilotsService";
import http from "../services/httpService";
import ListItem from "./common/ListItem";
import Button from "./common/Button";

function UltimatePilot({ all, lessons, nextLessonChosen, removeChoices }) {
  const [index, setIndex] = useState(0);
  const size = lessons.length;

  const firstIndex = 0;
  const lastIndex = size - 1;
  const isLastItem = index === lastIndex;

  const increaseIndex = () => setIndex(index + 1);
  const decreaseIndex = () => setIndex(index - 1);

  const handleNext = () => {
    if (!isLastItem) increaseIndex();
  };

  const handlePrevious = () => {
    if (index > 0) decreaseIndex();
  };

  const handleChoiceRevert = (lesson) => {
    const index = lessons.findIndex((l) => l.name === lesson.name);
    revertChoice(index);
  };

  const revertChoice = (index) => {
    removeChoices(lastIndex - index);
    setIndex(index);
  };

  const visitChosenLesson = (lesson) => {
    const index = lessons.findIndex((l) => l.name === lesson.name);
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
        {isLastItem &&
          nextLessons.map((l) => (
            <ListItem
              handleSelect={() => {
                nextLessonChosen(l);
                setIndex(size);
              }}
              item={l}
              key={l.name}
            />
          ))}
      </ul>
      {!isLastItem && (
        <div className="row justify-content-center">
          <Button
            color="warning"
            disabled={isLastItem}
            onClick={() => revertChoice(index)}
          >
            Revert
          </Button>
        </div>
      )}
      <ul className="my-3 list-group list-group-horizontal justify-content-center">
        {lessons.map((l) => (
          <ListItem
            handleDoubleSelect={() => handleChoiceRevert(l)}
            handleSelect={() => visitChosenLesson(l)}
            item={l}
            key={l.name}
            selected={l.name === selectedName}
          />
        ))}
      </ul>
      <div className="row justify-content-center">
        <Button disabled={isLastItem} onClick={handleNext}>
          Next
        </Button>
        <Button disabled={index === firstIndex} onClick={handlePrevious}>
          Previous
        </Button>
      </div>
    </div>
  );
}

export default UltimatePilot;
