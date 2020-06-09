import React, { Component } from "react";
import PropTypes from "prop-types";
import ConditionalLink from "./ConditionalLink";
import ListItem from "./ListItem";

class ListGroup extends Component {
  state = { selectedItemValue: "-1" };

  handleItemSelect = (selectedItem, selectedItemValue, onItemSelect) => {
    this.setState({ selectedItemValue });
    onItemSelect(selectedItem);
  };

  isActiveSelection = (value, searching) =>
    value === this.state.selectedItemValue && !searching;

  render() {
    const {
      valueProperty,
      onItemSelect,
      items,
      description,
      marginBottom = 3,
      marginTop = 3,
      onKitSelectUrl,
      searching,
    } = this.props;

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
              this.isActiveSelection(item[valueProperty], searching)
                ? "active"
                : ""
            }
            handleSelect={() =>
              this.handleItemSelect(item, item[valueProperty], onItemSelect)
            }
            item={item}
            key={item[valueProperty]}
          />
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
  searching: false,
};

ListGroup.propTypes = {
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string,
  searching: PropTypes.bool,
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default ListGroup;
