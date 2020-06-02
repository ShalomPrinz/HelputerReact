import React from "react";
import Popover from "./Popover";

function ListItem({ autolist, className = "", handleSelect, item, key }) {
  const li = (
    <li
      key={key}
      className={`list-group-item clickable ${className}`}
      onClick={handleSelect}
    >
      <Popover item={item} />
    </li>
  );

  return autolist ? <ul className="list-group">{li}</ul> : li;
}

export default ListItem;
