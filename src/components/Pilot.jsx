import React, { useState } from "react";

import pilotsService, { finished } from "../services/pilotsService";
import http from "../services/httpService";
import ProgressBar from "./common/ProgressBar";
import ListItem from "./common/ListItem";
import Button from "./common/Button";

function Pilot(props) {
  const [index, setIndex] = useState(0);

  const { subject } = props.match.params;
  const [lessons, description, progress] = pilotsService[subject];
  const size = lessons.length;

  const firstIndex = 0;
  const lastIndex = size - 1;

  const increaseIndex = () => setIndex(index + 1);
  const decreaseIndex = () => setIndex(index - 1);

  const increaseProgress = (lesson) => {
    if (!lesson.finished) finished(subject, lesson);
  };

  const handleNext = () => {
    if (index < lastIndex) increaseIndex();
    increaseProgress(currentLesson);
  };

  const handlePrevious = () => {
    if (index > 0) decreaseIndex();
  };

  const handleSelect = (lesson) => {
    const index = lessons.findIndex((l) => l.name === lesson.name);
    setIndex(index);
  };

  const currentLesson = lessons[index];
  const selectedName = currentLesson.name;

  return (
    <div className="col">
      <div className="row mt-4 h1 justify-content-center">{subject}</div>
      <div className="row justify-content-center text-center">
        {description}
      </div>
      <ProgressBar progress={Math.round(progress)} />
      <ListItem
        autolist
        className="mx-auto my-5"
        handleSelect={() => http.paint(currentLesson)}
        item={currentLesson}
      />
      <div className="row justify-content-center">
        <Button disabled={index === lastIndex} onClick={handleNext}>
          Next
        </Button>
        <Button disabled={index === firstIndex} onClick={handlePrevious}>
          Previous
        </Button>
      </div>
      <ul className="mt-3 list-group list-group-horizontal justify-content-center">
        {lessons.map((l) => (
          <ListItem
            handleSelect={() => handleSelect(l)}
            item={l}
            key={l.name}
            selected={l.name === selectedName}
          />
        ))}
      </ul>
    </div>
  );
}

export default Pilot;
