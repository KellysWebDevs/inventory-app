import React from "react";
import { InlineIcon } from "@iconify/react";
import barcodeScan from "@iconify/icons-mdi/barcode-scan";
import closeCircleOutline from "@iconify/icons-mdi/close-circle-outline";
import { connect } from "react-redux";

import { deleteItem, editItem } from "../redux/actions/inventoryActions";
import capitalize from "../helpers/capitalize";

class TableItem extends React.Component {
  state = {
    item_name: this.props.item.name,
    item_amount: this.props.item.amount,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "item_name") {
      this.setState({ [name]: capitalize(value) });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.editItem({ ...this.state });
      e.target.blur();
    }

    if (e.key === "Escape") {
      this.setState({
        item_name: this.props.item.name,
        item_amount: this.props.item.amount,
      });
      e.target.blur();
    }
  };

  handleBlur = (e) => {
    this.props.editItem({ ...this.state });
  };

  handleDelete = (e) => {
    const { item } = this.props;

    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      this.props.deleteItem(this.props.item._id, this.props.itemsLength);
    }
  };

  render() {
    const { item } = this.props;

    return (
      <tr>
        <td className="pl-1">
          <input
            style={{ borderBottom: "none" }}
            name="item_name"
            type="text"
            value={this.state.item_name}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onBlur={this.handleBlur}
          />
        </td>
        <td className="center-align">{item.amount}</td>
        <td className="center-align">
          <InlineIcon icon={barcodeScan} width="1.5em" height="1.5em" />
        </td>
        <td className="center-align">
          <button className="btn-flat" onClick={this.handleDelete}>
            <InlineIcon
              className="red-text"
              icon={closeCircleOutline}
              width="1.5em"
              height="1.5em"
            />
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(undefined, { deleteItem, editItem })(TableItem);
