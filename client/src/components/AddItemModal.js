import React from "react";
import M from "materialize-css";
import BarcodeScanner from "./BarcodeScanner";
import { InlineIcon } from "@iconify/react";
import barcodeScan from "@iconify/icons-mdi/barcode-scan";

import { connect } from "react-redux";
import { addItem } from "../redux/actions/inventoryActions";
import capitalize from "../helpers/capitalize";

class AddItemModal extends React.Component {
  state = {
    item_name: "",
    item_amount: 0,
    item_category: "",
    item_barcodes: [],
  };

  working = true;

  resetState = () => {
    this.setState({
      item_name: "",
      item_amount: 0,
      item_category: "",
      item_barcodes: [],
    });
  };

  onScanned = (barcode) => {
    if (this.working) {
      if (this.state.item_barcodes.includes(barcode)) {
        M.toast({
          html: `Barcode ${barcode} has already been scanned!`,
          classes: "red",
        });
      } else {
        M.toast({
          html: `Barcode ${barcode} has been successfuly scanned!`,
          classes: "green",
        });

        const newStateBarcodes = [...this.state.item_barcodes];
        newStateBarcodes.push(barcode);
        this.setState({
          item_barcodes: newStateBarcodes,
        });
      }
    }
  };

  collapsibleStart = () => {
    M.updateTextFields();

    this.Scanner.startQuagga();
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addItem({ ...this.state });

    this.modalInstance.close();
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "item_name" || name === "item_category") {
      this.setState({ [name]: capitalize(value) });
    } else {
      this.setState({ [name]: value });
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

  modalStart = () => {
    this.working = true;
    M.updateTextFields();
  };

  modalEnd = () => {
    this.resetState();
    this.working = false;
  };

  componentDidMount() {
    this.modalInstance = M.Modal.init(this.Modal, {
      inDuration: 500,
      outDuration: 500,
      onOpenStart: this.modalStart,
      onCloseStart: this.modalEnd,
      onCloseEnd: () => {
        this.collapsibleInstance.close();
      },
    });

    this.collapsibleInstance = M.Collapsible.init(this.Collapsible, {
      accordian: false,
      onOpenStart: this.collapsibleStart,
      onCloseEnd: this.Scanner.stopQuagga,
    });
  }

  render() {
    return (
      <div
        id="add-item-modal"
        className="modal modal-fixed-footer"
        ref={(Modal) => {
          this.Modal = Modal;
        }}
      >
        <div className="modal-content">
          <h4 className="grey-text text-darken-2">Add New Item</h4>

          <form id="add-form" onSubmit={this.handleSubmit} autoComplete="off">
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="item_name"
                  type="text"
                  value={this.state.item_name}
                  required
                  onChange={this.handleChange}
                />
                <label htmlFor="item_name">Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  name="item_amount"
                  type="number"
                  min="0"
                  value={this.state.item_amount}
                  required
                  onChange={this.handleChange}
                />
                <label htmlFor="item_amount">Amount</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  name="item_category"
                  type="text"
                  value={this.state.item_category}
                  required
                  onChange={this.handleChange}
                />
                <label htmlFor="item_category">Category</label>
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <ul
                  className="collapsible"
                  ref={(Collapsible) => (this.Collapsible = Collapsible)}
                >
                  <li>
                    <div className="collapsible-header">
                      <InlineIcon
                        className="mr-1"
                        icon={barcodeScan}
                        width="1.5em"
                        height="1.5em"
                      />
                      <strong>Activate Barcode Scanner</strong>
                      <span className="ml-1">(optional)</span>
                    </div>
                    <div className="collapsible-body center-align">
                      <BarcodeScanner
                        onScanned={this.onScanned}
                        ref={(Scanner) => {
                          this.Scanner = Scanner;
                        }}
                      />
                    </div>
                  </li>
                </ul>

                {this.state.item_barcodes.map((barcode) => (
                  <div key={barcode} className="chip">
                    {barcode}
                    <i
                      className="material-icons"
                      style={{ cursor: "pointer" }}
                      onClick={() => this.removeBarcode(barcode)}
                    >
                      close
                    </i>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>

        <div className="modal-footer grey lighten-3">
          <button
            type="submit"
            className="btn white grey-text text-darken-3 waves-effect waves-green"
            form="add-form"
          >
            <i className="material-icons right">add</i>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default connect(undefined, { addItem })(AddItemModal);
