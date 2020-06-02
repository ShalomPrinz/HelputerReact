import React, { useState } from "react";
import Popover from "./Popover";

function ListItem({ autolist, className = "", handleSelect = () => {}, item }) {
  const [active, setActive] = useState(false);

  const changeActive = (isActive) => {
    const updatedActive = isActive ? false : " active";
    setActive(updatedActive);
    return updatedActive;
  };

  const activate = () => {
    const result = changeActive(active);
    setTimeout(() => changeActive(result), 1000);
  };

  const onClick = () => {
    activate();
    handleSelect();
  };

  const li = (
    <li
      className={`list-group-item clickable ${active} ${className}`}
      onClick={onClick}
    >
      <Popover item={item} />
    </li>
  );

  return autolist ? <ul className="list-group">{li}</ul> : li;
}

export default ListItem;
