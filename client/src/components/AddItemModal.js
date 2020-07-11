import React from "react";
import M from "materialize-css";

import { connect } from "react-redux";
import { addItem } from "../redux/actions/inventoryActions";
import capitalize from "../helpers/capitalize";

class AddItemModal extends React.Component {
  state = {
    item_name: "",
    item_amount: 0,
    item_category: "",
    item_barcode: "",
  };

  resetState = () => {
    this.setState({
      item_name: "",
      item_amount: 0,
      item_category: "",
      item_barcode: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addItem({ ...this.state });

    this.modalInstance.close();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: capitalize(e.target.value) });
  };

  componentDidMount() {
    this.modalInstance = M.Modal.init(this.Modal, {
      inDuration: 500,
      outDuration: 500,
      onOpenStart: M.updateTextFields,
      onCloseEnd: this.resetState,
    });
  }

  render() {
    return (
      <div id="add-item-modal-wrapper">
        <div
          id="add-item-modal"
          className="modal modal-fixed-footer"
          ref={(Modal) => {
            this.Modal = Modal;
          }}
        >
          <div className="modal-content">
            <h4 className="grey-text text-darken-2">Add New Item</h4>

            <form onSubmit={this.handleSubmit} autoComplete="off">
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
                <div className="input-field col s12">
                  <input
                    name="item_barcode"
                    type="text"
                    value={this.state.item_barcode}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="item_barcode">Barcode</label>
                  <span htmlFor="item_barcode" className="helper-text">
                    optional
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <button
                    type="submit"
                    className="btn white grey-text text-darken-3 waves-effect waves-green"
                  >
                    <i className="material-icons right">add</i>
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="modal-footer grey lighten-3">
            <button className="modal-close btn-flat">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(undefined, { addItem })(AddItemModal);
