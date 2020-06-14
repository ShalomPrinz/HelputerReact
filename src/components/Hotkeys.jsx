import React from "react";

import hotkeys from "../services/hotkeysService";
import Table from "./common/Table";

const Hotkeys = () => {
  const columns = [
    { path: "name", label: "שם פקודה" },
    { path: "combination", label: "מקשי צירוף" },
    { path: "key", label: "מקש" },
  ];

  return <Table columns={columns} data={hotkeys} />;
};

export default Hotkeys;
