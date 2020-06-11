import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon, size = "5x" }) {
  return <FontAwesomeIcon {...{ icon, size }} />;
}

export default Icon;
