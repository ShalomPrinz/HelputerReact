import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function AppProgressBar({ progress }) {
  if (progress === 0)
    return (
      <ProgressBar
        animated
        className="w-50 mx-auto my-3"
        variant="danger"
        label={"No progress yet."}
        now={100}
        style={{ height: 40 }}
      />
    );

  return (
    <ProgressBar
      animated
      className="w-50 mx-auto my-3"
      label={`${progress}%`}
      now={progress}
      style={{ height: 40 }}
    />
  );
}

export default AppProgressBar;
