import React from "react";

import http from "../services/httpService";
import lessonsLists from "../services/lessonsService";
import Kits from "./Kits";

const paint = (params) => http.get("http://localhost:8000", { params });

const onItemSelect = ({ name, type, regex = name }) =>
  paint({ name: encodeURIComponent(regex), type });

function Lessons() {
  return <Kits lists={lessonsLists} onItemSelect={onItemSelect} />;
}

export default Lessons;
