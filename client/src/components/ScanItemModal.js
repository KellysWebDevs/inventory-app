import React from "react";
import M from "materialize-css";
import BarcodeScanner from "./BarcodeScanner";

import { connect } from "react-redux";
import { editItem } from "../redux/actions/inventoryActions";

class ScanItemModal extends React.Component {
  state = {
    selectedRadio: "add_item",
  };

  onScanned = (barcode) => {
    let item;
    this.props.categories.forEach((category, i) => {
      item = category.items.find(
        (foundItem) =>
          foundItem.barcodes && foundItem.barcodes.includes(barcode)
      );
    });

    if (item) {
      if (this.state.selectedRadio === "add_item") {
        M.toast({ html: "Added item!", classes: "green" });
      } else if (this.state.selectedRadio === "sub_item") {
        M.toast({ html: "Subtracted item!", classes: "green" });
      }
    } else {
      M.toast({ html: "That item does not exist!", classes: "red" });
    }
  };

  handleRadioChange = (e) => {
    this.setState({ selectedRadio: e.target.value });
  };

  componentDidMount() {
    M.Modal.init(this.Modal, {
      onOpenStart: this.Scanner.startQuagga,
      onCloseEnd: this.Scanner.stopQuagga,
    });
  }

  render() {
    return (
      <div
        id="scan-item-modal"
        className="modal modal-fixed-footer"
        ref={(Modal) => {
          this.Modal = Modal;
        }}
      >
        <div className="modal-content">
          <h4 className="grey-text text-darken-2">Scan Items</h4>
          <p></p>
          <div className="row">
            <div className="col s12">
              <form onSubmit={(e) => e.preventDefault()}>
                <p>
                  <label>
                    <input
                      name="add_sub_rad"
                      type="radio"
                      value="add_item"
                      checked={this.state.selectedRadio === "add_item"}
                      onChange={this.handleRadioChange}
                    />
                    <span>Add Item</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="add_sub_rad"
                      type="radio"
                      value="sub_item"
                      checked={this.state.selectedRadio === "sub_item"}
                      onChange={this.handleRadioChange}
                    />
                    <span>Subtract Item</span>
                  </label>
                </p>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <BarcodeScanner
                onScanned={this.onScanned}
                ref={(Scanner) => {
                  this.Scanner = Scanner;
                }}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-flat modal-close">Close</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ inventory }) => ({
  categories: inventory.categories,
});

export default connect(mapStateToProps, { editItem })(ScanItemModal);
