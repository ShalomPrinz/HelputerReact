import React from "react";
import Popover from "./Popover";

function ListItem({ autolist, className = "", handleSelect, item, key }) {
  if (!autolist)
    return (
      <li
        key={key}
        className={`list-group-item clickable ${className}`}
        onClick={handleSelect}
      >
        <Popover item={item} />
      </li>
    );
  else
    return (
      <ul className="list-group">
        <li
          key={key}
          className={`list-group-item clickable ${className}`}
          onClick={handleSelect}
        >
          <Popover item={item} />
        </li>
      </ul>
    );
}

export default ListItem;
