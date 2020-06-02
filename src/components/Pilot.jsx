import React, { useState } from "react";

import pilotsService from "../services/pilotsService";
import ProgressBar from "./common/ProgressBar";
import ListItem from "./common/ListItem";

function Pilot(props) {
  const [progress, setProgress] = useState(0);
  const { subject } = props.match.params;
  const [lessons, description] = pilotsService[subject];

  const firstLesson = lessons[0];

  return (
    <div className="col">
      <div className="row h1 justify-content-center">{subject}</div>
      <div className="row justify-content-center text-center">
        {description}
      </div>
      <ProgressBar progress={progress} />
      <ListItem
        autolist
        className="my-5"
        item={firstLesson}
        key={firstLesson.id}
      />
      <div className="row h1 justify-content-center ">Next --- Previous</div>
      <ul className="mt-3 list-group list-group-horizontal justify-content-center">
        {lessons.map((l) => (
          <ListItem item={l} key={l.id} />
        ))}
      </ul>
    </div>
  );
}

export default Pilot;
