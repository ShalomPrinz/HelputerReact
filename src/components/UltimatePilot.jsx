import React, { useState, useEffect } from "react";

import { ultimate } from "../services/pilotsService";
import http from "../services/httpService";
import ListItem from "./common/ListItem";
import Button from "./common/Button";
import { getOptions } from "./UltimatePilotContainer";
import LessonHotkey from "./LessonHotkey";

function UltimatePilot({ lessons, nextLessonChosen, removeChoices }) {
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState(getOptions(index));

  useEffect(() => setOptions(getOptions(index)), [index]);

  const size = lessons.length;
  const lastIndex = size - 1;
  const handleNext = () => {
    if (index < lastIndex) setIndex(index + 1);
  };

  const firstIndex = 0;
  const handlePrevious = () => {
    if (index > firstIndex) setIndex(index - 1);
  };

  const handleOptionSelect = (l) => {
    nextLessonChosen(l);
    setIndex(size);
    http.paint(l);
  };

  const handleRevert = (index) => {
    removeChoices(lastIndex - index);
    setIndex(index);
  };

  const currentLesson = lessons[index];
  const isLastIndex = index === lastIndex;

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
      >
        <LessonHotkey item={currentLesson} />
      </ListItem>
      <ul className="my-4 list-group list-group-horizontal justify-content-center">
        {isLastIndex &&
          options.map((l) => (
            <ListItem
              className="bg-light border border-secondary mx-2 rounded"
              handleSelect={() => handleOptionSelect(l)}
              item={l}
              key={l.name}
            />
          ))}
        {!isLastIndex && (
          <Button
            color="warning"
            disabled={isLastIndex}
            onClick={() => handleRevert(index)}
          >
            Revert
          </Button>
        )}
      </ul>

      <div className="row justify-content-center">
        <LessonNavigator
          disabled={isLastIndex}
          lesson={lessons[index + 1]}
          onClick={handleNext}
          text="Next"
        />
        <LessonNavigator
          disabled={index === firstIndex}
          lesson={lessons[index - 1]}
          onClick={handlePrevious}
          text="Previous"
        />
      </div>
    </div>
  );
}

const LessonNavigator = ({ disabled, lesson, onClick, text }) => {
  const onLessonClick = () => {
    onClick();
    http.paint(lesson);
  };

  return (
    <div className="col-6 list-group">
      <Button autocol={false} disabled={disabled} onClick={onClick}>
        {text}
      </Button>
      {!disabled && (
        <div
          className="btn btn-info mx-auto rounded w-75"
          onClick={onLessonClick}
        >
          {lesson.name}
        </div>
      )}
    </div>
  );
};

export default UltimatePilot;
