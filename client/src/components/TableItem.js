import React from "react";
import { InlineIcon } from "@iconify/react";
import barcodeScan from "@iconify/icons-mdi/barcode-scan";
import closeCircleOutline from "@iconify/icons-mdi/close-circle-outline";

import { connect } from "react-redux";
import { deleteItem } from "../redux/actions/inventoryActions";

class TableItem extends React.Component {
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
        <td className="pl-1">{item.name}</td>
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

export default connect(undefined, { deleteItem })(TableItem);
