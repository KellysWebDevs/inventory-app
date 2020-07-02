import React from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import BarcodeReader from "./BarcodeReader";
import "../sass/index.scss";

import CategoryCard from "../components/CategoryCard";
import CategoryFilter from "../components/CategoryFilter";
import Search from "../components/Search";
import SearchTable from "../components/SearchTable";
import LoadingSplash from "../components/LoadingSplash";

import { logoutUser } from "../redux/actions/authActions";
import { getItems, setSearchQuery } from "../redux/actions/inventoryActions";

class App extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const {
      categories,
      itemsLoading,
      searchQuery,
      categoryFilter,
    } = this.props;

    return itemsLoading ? (
      <LoadingSplash />
    ) : (
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
            <div className="row">
              {categories.map((category) => (
                <CategoryCard key={category.name} category={category} />
              ))}
            </div>
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
  itemsLoading: inventory.itemsLoading,
  searchQuery: inventory.searchQuery,
  categoryFilter: inventory.categoryFilter,
});

export default connect(mapStateToProps, {
  logoutUser,
  getItems,
  setSearchQuery,
})(App);
