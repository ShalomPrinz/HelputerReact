import React, { useState } from "react";
import { toast } from "react-toastify";

import pilotsService, { finished } from "../../services/pilotsService";
import http from "../../services/httpService";
import LessonHotkey from "../LessonHotkey";
import ProgressBar from "../common/ProgressBar";
import ListItem from "../common/ListItem";
import Button from "../common/Button";

function Pilot(props) {
  const { subject } = props.match.params;
  const [lessons, description, progress] = pilotsService[subject];

  const [index, setIndex] = useState(0);
  const [localProgress, setProgress] = useState(progress);

  const increaseProgress = (lesson) => {
    if (!lesson.finished) {
      const newProgress = finished(subject, lesson);
      setProgress(newProgress);
      if (Math.round(newProgress) === 100) toast.success("Finished pilot!");
    }
  };

  const lastIndex = lessons.length - 1;
  const handleNext = () => {
    if (index < lastIndex) setIndex(index + 1);
    increaseProgress(currentLesson);
  };

  const firstIndex = 0;
  const handlePrevious = () => {
    if (index > firstIndex) setIndex(index - 1);
  };

  const handleSelect = (lesson) => {
    const index = lessons.findIndex((l) => l.name === lesson.name);
    setIndex(index);
  };

  const currentLesson = lessons[index];
  const selectedName = currentLesson.name;
  const isLastIndex = index === lastIndex;

  return (
    <div className="col">
      <div className="row mt-4 h1 justify-content-center">{subject}</div>
      <div className="row justify-content-center text-center">
        {description}
      </div>
      <ProgressBar progress={Math.round(localProgress)} />
      <ListItem
        autolist
        className="mx-auto my-5"
        handleSelect={() => http.paint(currentLesson)}
        item={currentLesson}
      >
        <LessonHotkey item={currentLesson} />
      </ListItem>
      <div className="row justify-content-center">
        <Button
          disabled={isLastIndex && currentLesson.finished}
          onClick={handleNext}
        >
          {!isLastIndex ? "Next" : "Finish"}
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
