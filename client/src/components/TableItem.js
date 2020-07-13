import React from "react";
import M from "materialize-css";
import EditBarcodesModal from "./EditBarcodesModal";
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
    item_barcodes: this.props.item.barcodes || [],
  };

  setBarcodeState = (barcode) => {
    if (!this.state.item_barcodes.includes(barcode)) {
      const barcodeArray = [...this.state.item_barcodes];
      barcodeArray.push(barcode);
      this.setState({ item_barcodes: barcodeArray });

      M.toast({ html: "Added barcode!", classes: "green" });
    } else {
      M.toast({ html: "That barcode already exists!", classes: "red" });
    }
  };

  removeBarcode = (barcode) => {
    const index = this.state.item_barcodes.findIndex(
      (stateBarcode) => stateBarcode === barcode
    );
    const stateBarcodes = [...this.state.item_barcodes];
    stateBarcodes.splice(index, 1);
    this.setState({ item_barcodes: stateBarcodes });
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
    this.props.editItem(
      {
        id: this.props.item._id,
        ...this.state,
      },
      this.props.item.category
    );
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
        <td className="barcode-cell center-align">
          <a href={`#${item._id}-modal`} className="modal-trigger btn-flat">
            <InlineIcon icon={barcodeScan} width="1.5em" height="1.5em" />
          </a>

          <EditBarcodesModal
            item={item}
            item_barcodes={this.state.item_barcodes}
            setBarcodeState={this.setBarcodeState}
            handleBlur={this.handleBlur}
            removeBarcode={this.removeBarcode}
          />
        </td>
        <td className="remove-cell center-align">
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
