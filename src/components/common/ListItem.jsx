import React from "react";
import Popover from "./Popover";

function ListItem({
  className = "list-group-item clickable",
  handleSelect,
  item,
  key,
}) {
  return (
    <li key={key} className={className} onClick={handleSelect}>
      <Popover item={item} />
    </li>
  );
}

export default ListItem;
