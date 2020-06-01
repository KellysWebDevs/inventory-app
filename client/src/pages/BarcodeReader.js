import React from "react";
import Quagga from "quagga";

class BarcodeReader extends React.Component {
  state = {
    started: false,
    result: "",
    itemAmountMsg: ""
  };

  addBarcode = () => {
    if (this.state.result) {
      if (
        this.props.item.barcodes &&
        this.props.item.barcodes.includes(this.state.result)
      ) {
        alert("That barcode already exists for that item!");
      } else {
        this.props.addBarcode(this.state.result);
      }
    } else {
      alert("Please show a valid barcode!");
    }
  };

  addItem = () => {
    if (this.state.result) {
      let index = [];
      this.props.items.forEach((item, i) => {
        if (item.barcodes && item.barcodes.includes(this.state.result)) {
          index.push(i);
        }
      });
      index = index[0];
      if (index || index === 0) {
        this.setState({ itemAmountMsg: "+1" });
        if (this.itemAmountMsgTimeout) {
          clearTimeout(this.itemAmountMsgTimeout);
        }
        this.itemAmountMsgTimeout = setTimeout(
          () => this.setState({ itemAmountMsg: "" }),
          1000
        );

        this.props.addItem(index);
      } else {
        alert("You have not assigned that barcode to an item yet!");
      }
    } else {
      alert("Please show a valid barcode!");
    }
  };

  removeItem = () => {
    if (this.state.result) {
      let index = [];
      this.props.items.forEach((item, i) => {
        if (item.barcodes && item.barcodes.includes(this.state.result)) {
          index.push(i);
        }
      });
      index = index[0];
      if (index || index === 0) {
        this.setState({ itemAmountMsg: "-1" });
        if (this.itemAmountMsgTimeout) {
          clearTimeout(this.itemAmountMsgTimeout);
        }
        this.itemAmountMsgTimeout = setTimeout(
          () => this.setState({ itemAmountMsg: "" }),
          1000
        );

        this.props.removeItem(index);
      } else {
        alert("You have not assigned that barcode to an item yet!");
      }
    } else {
      alert("Please show a valid barcode!");
    }
  };

  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          facingMode: "environment",
          target: document.querySelector("#scan-container")
        },
        decoder: {
          readers: ["upc_reader"]
        },
        frequency: 10
      },
      async err => {
        if (err) {
          console.error(err);
          return;
        }

        Quagga.start();
        this.setState({ started: true });
      }
    );

    Quagga.onDetected(data => {
      if (this.resetTimeout) {
        clearTimeout(this.resetTimeout);
      }
      this.setState({ result: data.codeResult.code, started: false });
      this.resetTimeout = setTimeout(() => this.setState({ result: "" }), 1000);
    });

    // this.resultCollector = Quagga.ResultCollector.create({
    //   capture: true, // keep track of the image producing this result
    //   capacity: 20, // maximum number of results to store
    //   blacklist: [
    //     // list containing codes which should not be recorded
    //   ],
    //   filter: function(codeResult) {
    //     // only store results which match this constraint
    //     // returns true/false
    //     // e.g.: return codeResult.format === "ean_13";
    //     return true;
    //   }
    // });
  }

  componentWillUnmount() {
    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }
    if (this.itemAmountMsgTimeout) {
      clearTimeout(this.itemAmountMsgTimeout);
    }
    if (this.state.started) {
      Quagga.stop();
    }
    Quagga.offDetected();
  }

  render() {
    let content = (
      <>
        <p>
          Sorry, but your in the wrong spot!{" "}
          <span role="img" aria-label="stop sign">
            🛑
          </span>
        </p>
        <p>Please continue to the exit in the upper right hand corner.</p>
        <p>
          Thank you for going along so nicely.{" "}
          <span role="img" aria-label="smiley face">
            😄
          </span>
        </p>
      </>
    );
    if (this.props.type === "edit_codes") {
      content = (
        <>
          <div id="scan-container">
            <p>{this.state.result}</p>
            <br />
          </div>
          <button className="add-barcode-btn" onClick={this.addBarcode}>
            Scan Item
          </button>
          {this.props.item && this.props.item.barcodes
            ? this.props.item.barcodes.map((barcode, i) => (
                <div key={barcode}>
                  <div className="barcode-value">
                    <p>{barcode}</p>
                    <button
                      className="deletebtn"
                      onClick={() => this.props.deleteBarcode(this.props.index)}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))
            : null}
        </>
      );
    } else if (this.props.type === "edit_item_count") {
      content = (
        <>
          <div id="scan-container">
            <p>{this.state.result}</p>
            <br />
          </div>
          <button className="add-barcode-btn" onClick={this.addItem}>
            Add Item
          </button>
          <button className="remove-barcode-btn" onClick={this.removeItem}>
            Remove Item
          </button>
          <h3>{this.state.itemAmountMsg}</h3>
        </>
      );
    }

    return (
      <div id="popup-back">
        <div id="popup-front">
          <span className="close-popup" onClick={this.props.unmount}>
            &times;
          </span>
          <div className="popup-content">{content}</div>
        </div>
      </div>
    );
  }
}

export default BarcodeReader;
