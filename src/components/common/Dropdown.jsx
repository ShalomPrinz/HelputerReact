import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";

function AppDropdown({ className, headline, onSelect, options }) {
  if (!headline || !options) return null;

  let key = -1;
  options = options.map((o) => ({ name: o.name || o, key: ++key }));

  return (
    <Dropdown className={className} onSelect={onSelect}>
      <Dropdown.Toggle>{headline}</Dropdown.Toggle>

      <Dropdown.Menu>
        {options &&
          options.map((option) => (
            <Dropdown.Item key={option.key} eventKey={option.key}>
              {option.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

AppDropdown.propTypes = {
  headline: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default AppDropdown;
