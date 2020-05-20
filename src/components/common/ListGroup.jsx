import React, { Component } from "react";
import PropTypes from "prop-types";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

class ListGroup extends Component {
  state = { selectedItemValue: "-1" };

  handleItemSelect = (selectedItemValue, onItemSelect) => {
    this.setState({ selectedItemValue });
    onItemSelect(selectedItemValue);
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
      searching,
    } = this.props;

    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            className={this.getClassName(item[valueProperty], searching)}
            onClick={() =>
              this.handleItemSelect(item[valueProperty], onItemSelect)
            }
          >
            <OverlayTrigger
              trigger="hover"
              placement="bottom"
              overlay={popover}
            >
              <Button variant="">{item[textProperty]}</Button>
            </OverlayTrigger>
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
