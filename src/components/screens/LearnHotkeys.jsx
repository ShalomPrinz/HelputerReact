import React, { useState } from "react";
import { toast } from "react-toastify";

import KeyBoard, {
  isValidKeysString,
  notValidKeyMessage,
} from "../common/Keyboard";
import ListGroup from "../common/ListGroup";
import Search from "../common/Search";
import { search } from "../../utils/array";
import hotkeys, {
  explanation,
  fieldToSearch,
} from "../../services/hotkeysService";

function LearnHotkeys(props) {
  const selectedName = props.match.params.name;
  const selectedHotkey =
    selectedName && hotkeys.find((h) => h.name === selectedName);

  const [query, setQuery] = useState("");
  const [hotkey, setHotkey] = useState(selectedHotkey || hotkeys[0]);
  const [toasting, setToasting] = useState(false);

  const { combination, id, key, name } = hotkey;
  const target = combination + key;

  const onListenComplete = () => {
    if (!toasting) {
      toast.success("Success!", {
        onClose: () => setToasting(false),
      });
      setToasting(true);
    }
  };

  const filteredList = search(fieldToSearch, hotkeys, query);
  const found = filteredList.length !== 0;

  return (
    <div className="row">
      <div className="col-3 mt-4">
        <Search query={query} onChange={(q) => setQuery(q)} />
        <div className="border-bottom border-top scrollable">
          {found && (
            <ListGroup
              items={filteredList}
              onItemSelect={(hotkey) => setHotkey(hotkey)}
              selectedItemValue={id}
            />
          )}
          {!found && (
            <p className="mt-2 text-center">
              No hotkeys found matching your query.
            </p>
          )}
        </div>
      </div>
      <div className="col text-center">
        <h1 className="mt-3">{name}</h1>
        <h4 className="my-3">{target}</h4>
        {!isValidKeysString(target) && (
          <h6 className="d-rtl text-danger">{notValidKeyMessage}</h6>
        )}
        <div className="my-3 d-rtl">{explanation}</div>
        <KeyBoard listen={target} onListenComplete={() => onListenComplete()} />
      </div>
    </div>
  );
}

export default LearnHotkeys;
