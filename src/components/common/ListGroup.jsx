import React, { Component } from "react";
import PropTypes from "prop-types";
import Popover from "./Popover";
import { Link } from "react-router-dom";
import ConditionalLink from "./ConditionalLink";
import ListItem from "./ListItem";

class ListGroup extends Component {
  state = { selectedItemValue: "-1" };

  handleItemSelect = (selectedItem, selectedItemValue, onItemSelect) => {
    this.setState({ selectedItemValue });
    onItemSelect(selectedItem);
  };

  getClassName = (value, searching) =>
    value === this.state.selectedItemValue && !searching
      ? "list-group-item clickable active"
      : "list-group-item clickable";

  render() {
    const {
      textProperty,
      valueProperty,
      onItemSelect,
      items,
      description,
      onKitSelectUrl,
      searching,
    } = this.props;

    return (
      <ul className="list-group">
        <ConditionalLink
          className="mb-3"
          text={description}
          to={onKitSelectUrl}
        />
        {items.map((item) => (
          <ListItem
            className={this.getClassName(item[valueProperty], searching)}
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
