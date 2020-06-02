import React, { useState } from "react";

import pilotsService from "../services/pilotsService";
import ProgressBar from "./common/ProgressBar";
import ListItem from "./common/ListItem";

function Pilot(props) {
  const [progress, setProgress] = useState(0);
  const { subject } = props.match.params;
  const [lessons, description] = pilotsService[subject];

  const firstLesson = lessons[0];
  console.log("lessons", lessons);
  return (
    <div className="col">
      <div className="row h1 justify-content-center">{subject}</div>
      <div className="row justify-content-center text-center">
        {description}
      </div>
      <ProgressBar progress={progress} />
      <ListItem autolist item={firstLesson} key={firstLesson.id} />
      <div className="row h1 justify-content-center ">Next --- Previous</div>
    </div>
  );
}

export default Pilot;
