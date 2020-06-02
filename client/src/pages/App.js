import React from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import BarcodeReader from "./BarcodeReader";
import "../sass/index.scss";

import CategoryCards from "../components/CategoryCards";
import CategoryFilter from "../components/CategoryFilter";
import Search from "../components/Search";
import SearchTable from "../components/SearchTable";

import { logoutUser } from "../redux/actions/authActions";
import { getItems, setSearchQuery } from "../redux/actions/inventoryActions";

class App extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { categories, searchQuery } = this.props;

    return (
      <div className="App">
        <div className="container">
          <h1 className="center-align">Inventory Manager</h1>

          <div className="row">
            <div className="col s12 m6">
              <CategoryFilter categories={categories} />
            </div>
            <div className="col s12 m6">
              <Search
                setSearchQuery={this.props.setSearchQuery}
                searchQuery={searchQuery}
              />
            </div>
          </div>

          {!searchQuery ? (
            <CategoryCards categories={categories} />
          ) : (
            <SearchTable categories={categories} searchQuery={searchQuery} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ inventory }) => ({
  categories: inventory.categories,
  searchQuery: inventory.searchQuery,
});

export default connect(mapStateToProps, {
  logoutUser,
  getItems,
  setSearchQuery,
})(App);
