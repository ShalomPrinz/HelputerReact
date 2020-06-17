import React, { useState } from "react";

function ListItem({
  autolist,
  children,
  className = "",
  handleDoubleSelect,
  handleSelect,
  item,
  itemRef,
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
      className={`list-group-item clickable d-flex ${current} ${active} ${className}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      ref={itemRef}
    >
      <div className="mx-auto text-center">{item.name}</div>
      {children}
    </li>
  );

  return autolist ? <ul className="list-group">{li}</ul> : li;
}

export default ListItem;
