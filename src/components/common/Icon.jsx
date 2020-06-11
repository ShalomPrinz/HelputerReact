import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const icons = {
  faChevronLeft,
  faChevronRight,
};

function Icon({ className = "", icon, size = "5x" }) {
  return <FontAwesomeIcon {...{ className, icon, size }} />;
}

export default Icon;
