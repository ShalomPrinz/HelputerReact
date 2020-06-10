import React, { useState } from "react";
import Popover from "./Popover";

function ListItem({
  autolist,
  className = "",
  handleDoubleSelect,
  handleSelect,
  item,
  selected,
}) {
  const [active, setActive] = useState(false);
  const current = selected && !active ? "bg-info text-white" : "";

  const changeActive = (isActive) => {
    const updatedActive = isActive ? false : "active";
    setActive(updatedActive);
    return updatedActive;
  };

  const activate = () => {
    const result = changeActive(active);
    setTimeout(() => changeActive(result), 1000);
  };

  const onClick = () => {
    if (typeof handleSelect !== "function") activate();
    else handleSelect();
  };

  const onDoubleClick = () => {
    if (typeof handleDoubleSelect !== "function") activate();
    else handleDoubleSelect();
  };

  const li = (
    <li
      className={`list-group-item clickable ${current} ${active} ${className}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <Popover item={item} />
    </li>
  );

  return autolist ? <ul className="list-group">{li}</ul> : li;
}

export default ListItem;
