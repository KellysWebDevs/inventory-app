import React from "react";
import M from "materialize-css";
import BarcodeScanner from "./BarcodeScanner";

class EditBarcodesModal extends React.Component {
  working = false;

  onScanned = (barcode) => {
    if (this.working) {
      this.props.setBarcodeState(barcode);
    }
  };

  modalOpen = () => {
    this.working = true;
    this.Scanner.startQuagga();
  };

  modalClose = () => {
    this.Scanner.stopQuagga();
    this.props.handleBlur();
    this.working = false;
  };

  componentDidMount() {
    this.modalInstance = M.Modal.init(this.Modal, {
      onOpenStart: this.modalOpen,
      onCloseEnd: this.modalClose,
    });
  }

  componentWillUnmount() {
    this.modalInstance.destroy();
  }

  render() {
    const { item } = this.props;

    return (
      <div
        id={`${item._id}-modal`}
        className="modal"
        ref={(Modal) => {
          this.Modal = Modal;
        }}
      >
        <div className="modal-content">
          <h4 className="grey-text text-darken-2">Add/Remove Barcodes</h4>
          <h5>Item: {item.name}</h5>

          <div className="row">
            <div className="col s12">
              <strong>Barcodes: </strong>{" "}
              {this.props.item_barcodes.map((barcode) => (
                <div key={barcode} className="chip mt-1">
                  {barcode}{" "}
                  <i
                    className="material-icons"
                    style={{ cursor: "pointer", verticalAlign: "-0.4em" }}
                    onClick={() => this.props.removeBarcode(barcode)}
                  >
                    close
                  </i>
                </div>
              ))}
              <BarcodeScanner
                onScanned={this.onScanned}
                ref={(Scanner) => {
                  this.Scanner = Scanner;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditBarcodesModal;
