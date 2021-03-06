import React from "react";
import { connect } from "react-redux";
import "../sass/index.scss";

import CategoryCard from "../components/CategoryCard";
import CategoryFilter from "../components/CategoryFilter";
import CategoryFilterTable from "../components/CategoryFilterTable";
import Search from "../components/Search";
import SearchTable from "../components/SearchTable";
import LoadingSplash from "../components/LoadingSplash";

import { logoutUser } from "../redux/actions/authActions";
import {
  getItems,
  setSearchQuery,
  setCategoryFilter,
} from "../redux/actions/inventoryActions";

class App extends React.Component {
  componentDidMount() {
    if (!this.props.categories.length) {
      this.props.getItems();
    }
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
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2 className="title center hide-on-med-and-down">
              Inventory Manager
            </h2>
            <h3 className="title center hide-on-large-only hide-on-small-only">
              Inventory Manager
            </h3>
            <h4 className="title center hide-on-med-and-up">
              Inventory Manager
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="filter col s12 m6">
            <CategoryFilter
              categories={categories}
              categoryFilter={categoryFilter}
              setCategoryFilter={this.props.setCategoryFilter}
            />
          </div>
          <div className="search col s12 m6">
            <Search
              setSearchQuery={this.props.setSearchQuery}
              searchQuery={searchQuery}
            />
          </div>
        </div>

        {!searchQuery ? (
          !categoryFilter ? (
            <div className="row">
              {categories.map((category) => (
                <div key={category.name} className="col s12 m6">
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          ) : (
            <CategoryFilterTable
              categories={categories}
              categoryFilter={categoryFilter}
            />
          )
        ) : (
          <SearchTable categories={categories} searchQuery={searchQuery} />
        )}
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
  setCategoryFilter,
})(App);
