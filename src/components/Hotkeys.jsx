import React from "react";
import hotkeys from "../services/hotkeysService";

const Hotkeys = () => {
  return hotkeys.map(({ name, combination, key }) => (
    <div>
      name - {name}, combination - {combination}, key - {key}
    </div>
  ));
};

export default Hotkeys;
