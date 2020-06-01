import React from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import BarcodeReader from "./BarcodeReader";
import "../sass/index.scss";

import Card from "../components/Card";
import CategoryFilter from "../components/CategoryFilter";
import Search from "../components/Search";

import { logoutUser } from "../redux/actions/authActions";
import { getItems } from "../redux/actions/inventoryActions";

class App extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="App">
        <div className="container">
          <h1 className="center-align">Inventory Manager</h1>

          <div className="row">
            <div className="col s12 m6">
              <CategoryFilter categories={categories} />
            </div>
            <div className="col s12 m6">
              <Search />
            </div>
          </div>

          <Card categories={categories} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ inventory }) => ({
  categories: inventory.categories,
});

export default connect(mapStateToProps, {
  logoutUser,
  getItems,
})(App);
