import React, { useState } from "react";
import ProgressBar from "./common/ProgressBar";

const row = "row h1 justify-content-center";

function Pilot(props) {
  const [progress, setProgress] = useState(0);
  const { subject } = props.match.params;

  return (
    <div className="col">
      <div className={row}>{subject}</div>
      <ProgressBar progress={progress} />
      <div className={row}>Now running</div>
      <div className={row}>All lessons in this pilot</div>
      <div className={row}>Next --- Previous</div>
    </div>
  );
}

export default Pilot;
