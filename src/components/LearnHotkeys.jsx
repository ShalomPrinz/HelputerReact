import React, { useState } from "react";

import KeyBoard from "./common/Keyboard";
import ListGroup from "./common/ListGroup";
import hotkeys, { explanation } from "../services/hotkeysService";

function LearnHotkeys(props) {
  const [hotkey, setHotkey] = useState(hotkeys[0]);

  return (
    <div className="row">
      <div className="col-3">
        <ListGroup
          items={hotkeys}
          onItemSelect={(hotkey) => setHotkey(hotkey)}
          selectedItemValue={hotkey.id}
        />
      </div>
      <div className="col text-center">
        <h1 className="mt-3">{hotkey.name}</h1>
        <h4 className="my-3">{hotkey.combination + hotkey.key}</h4>
        <div className="my-3 d-rtl">{explanation}</div>
        <KeyBoard
          listen={hotkey.combination + hotkey.key}
          onListenComplete={() => console.log("listen completed")}
        />
      </div>
    </div>
  );
}

export default LearnHotkeys;
