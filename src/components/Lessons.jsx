import React from "react";

import lessonsLists from "../services/lessonsService";
import Kits from "./Kits";

function Lessons() {
  return <Kits lists={lessonsLists} />;
}

export default Lessons;
