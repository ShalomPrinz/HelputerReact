import React from "react";

function Pilot(props) {
  const row = "row h1 justify-content-center";

  return (
    <div className="col">
      <div className={row}>Progress bar</div>
      <div className={row}>Now running</div>
      <div className={row}>All lessons in this pilot</div>
      <div className={row}>Next --- Previous</div>
    </div>
  );
}

export default Pilot;
