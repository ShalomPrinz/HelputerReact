import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function AppPopover({ text, title, description = text }) {
  const overlay = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{title}</Popover.Title>
      <Popover.Content>{description}</Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger={["click", "hover"]}
      placement="bottom"
      overlay={overlay}
    >
      <div className="text-center">{text}</div>
    </OverlayTrigger>
  );
}

export default AppPopover;
