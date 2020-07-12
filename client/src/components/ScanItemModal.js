import React from "react";
import M from "materialize-css";
import BarcodeScanner from "./BarcodeScanner";

class ScanItemModal extends React.Component {
  onScanned = (barcode) => {
    M.toast({ html: "Item scanned!", classes: "blue" });
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
                    <input name="add_sub_rad" type="radio" defaultChecked />
                    <span>Add Item</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="add_sub_rad" type="radio" />
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

export default ScanItemModal;
