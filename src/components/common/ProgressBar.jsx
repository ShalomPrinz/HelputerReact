import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function AppProgressBar({ progress, undesigned }) {
  const variant = progress === 100 ? "success" : undefined;

  if (undesigned) return <ProgressBar now={progress} variant={variant} />;

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
      variant={variant}
    />
  );
}

export default AppProgressBar;
