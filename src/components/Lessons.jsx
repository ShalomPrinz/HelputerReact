import React from "react";

import lessonsLists, { fieldToSearch } from "../services/lessonsService";
import Kits from "./Kits";

function Lessons() {
  return <Kits fieldToSearch={fieldToSearch} lists={lessonsLists} />;
}

export default Lessons;
