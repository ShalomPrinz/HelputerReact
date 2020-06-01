import React, { Component } from "react";
import PropTypes from "prop-types";
import Popover from "./Popover";

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
      searching,
    } = this.props;

    return (
      <ul className="list-group">
        {description && <div className="text-center mb-2">{description}</div>}
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            className={this.getClassName(item[valueProperty], searching)}
            onClick={() =>
              this.handleItemSelect(item, item[valueProperty], onItemSelect)
            }
          >
            <Popover item={item} />
          </li>
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
