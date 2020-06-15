import React, { useState } from "react";
import { toast } from "react-toastify";

import KeyBoard from "./common/Keyboard";
import ListGroup from "./common/ListGroup";
import hotkeys, { explanation } from "../services/hotkeysService";

function LearnHotkeys() {
  const [hotkey, setHotkey] = useState(hotkeys[0]);
  const { combination, id, key, name } = hotkey;
  const target = combination + key;
  const onListenComplete = () => {
    toast.success("Success!", {
      position: "top-center",
    });
  };

  return (
    <div className="row">
      <div className="col-3">
        <ListGroup
          items={hotkeys}
          onItemSelect={(hotkey) => setHotkey(hotkey)}
          selectedItemValue={id}
        />
      </div>
      <div className="col text-center">
        <h1 className="mt-3">{name}</h1>
        <h4 className="my-3">{target}</h4>
        <div className="my-3 d-rtl">{explanation}</div>
        <KeyBoard listen={target} onListenComplete={() => onListenComplete()} />
      </div>
    </div>
  );
}

export default LearnHotkeys;
