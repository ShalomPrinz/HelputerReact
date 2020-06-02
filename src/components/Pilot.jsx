import React, { useState } from "react";

import pilotsService from "../services/pilotsService";
import ProgressBar from "./common/ProgressBar";
import ListItem from "./common/ListItem";
import Button from "./common/Button";

function Pilot(props) {
  const [progress, setProgress] = useState(0);
  let [index, setIndex] = useState(0);

  const { subject } = props.match.params;
  const [lessons, description] = pilotsService[subject];

  const firstIndex = 0;
  const lastIndex = lessons.length - 1;

  const increaseIndex = () => setIndex(index + 1);
  const decreaseIndex = () => setIndex(index - 1);

  const handleNext = () => {
    if (index < lastIndex) increaseIndex();
  };

  const handlePrevious = () => {
    if (index > 0) decreaseIndex();
  };

  const currentLesson = lessons[index];

  return (
    <div className="col">
      <div className="row mt-4 h1 justify-content-center">{subject}</div>
      <div className="row justify-content-center text-center">
        {description}
      </div>
      <ProgressBar progress={progress} />
      <ListItem
        autolist
        className="mx-auto my-5"
        item={currentLesson}
        key={currentLesson.id}
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
          <ListItem item={l} key={l.id} />
        ))}
      </ul>
    </div>
  );
}

export default Pilot;
