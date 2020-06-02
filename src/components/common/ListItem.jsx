import React from "react";
import Popover from "./Popover";

function ListItem({ className, handleSelect, item, key }) {
  return (
    <li
      key={key}
      className={`list-group-item clickable ${className}`}
      onClick={handleSelect}
    >
      <Popover item={item} />
    </li>
  );
}

export default ListItem;
