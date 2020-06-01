import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function AppPopover({ item }) {
  const { name, description = name, type } = item;

  const overlay = (
    <Popover id="popover-basic">
      {/* <Popover.Title as="h3">{title}</Popover.Title> */}
      <Popover.Content>{description}</Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger={["click", "hover"]}
      placement="bottom"
      overlay={overlay}
    >
      <div className="text-center" data-name={name} data-type={type}>
        {description}
      </div>
    </OverlayTrigger>
  );
}

export default AppPopover;
