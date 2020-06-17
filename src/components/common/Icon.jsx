import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export const icons = {
  faLightbulb,
};

function Icon({ color, icon }) {
  return <FontAwesomeIcon {...{ color, icon }} />;
}

export default Icon;
