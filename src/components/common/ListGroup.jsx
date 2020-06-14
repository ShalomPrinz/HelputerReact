import React, { useState } from "react";
import PropTypes from "prop-types";
import ConditionalLink from "./ConditionalLink";
import ListItem from "./ListItem";

const ListGroup = ({
  description,
  items,
  marginBottom,
  marginTop,
  onItemSelect,
  onKitSelectUrl,
  searching,
  selectedItemValue: value,
  valueProperty,
}) => {
  const [selectedItemValue, setSelectedItemValue] = useState(value || "-1");

  const handleItemSelect = (selectedItem, onItemSelect) => {
    setSelectedItemValue(selectedItem[valueProperty]);
    onItemSelect(selectedItem);
  };

  const isActiveSelection = (value, searching) =>
    value === selectedItemValue && !searching;

  return (
    <ul className={`list-group mb-${marginBottom} mt-${marginTop}`}>
      <ConditionalLink
        className="mb-2 mt-1"
        text={description}
        to={onKitSelectUrl}
      />
      {items.map((item) => (
        <ListItem
          className={
            isActiveSelection(item[valueProperty], searching) ? "active" : ""
          }
          handleSelect={() => handleItemSelect(item, onItemSelect)}
          item={item}
          key={item[valueProperty]}
        />
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
  searching: false,
  marginBottom: 3,
  marginTop: 3,
};

ListGroup.propTypes = {
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string,
  searching: PropTypes.bool,
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default ListGroup;
