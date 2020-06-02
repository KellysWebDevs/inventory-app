import React, { Component } from "react";

class Search extends Component {
  setSearchQuery = (e) => {
    this.props.setSearchQuery(e.target.value);
  };

  render() {
    return (
      <form
        className="input-field"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <i
          className="iconify prefix"
          data-icon="bi:search"
          data-inline="false"
        ></i>
        <input
          id="search"
          type="text"
          className="validate"
          value={this.props.searchQuery}
          onChange={this.setSearchQuery}
        />
        <label htmlFor="search">Search</label>
      </form>
    );
  }
}

export default Search;
