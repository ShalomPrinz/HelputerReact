import React from "react";

import pilots from "../services/pilotsService";
import Kits from "./Kits";

function Lessons() {
  return <Kits lists={pilots} />;
}

export default Lessons;
