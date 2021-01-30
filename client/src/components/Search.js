import React, { Component } from "react";
import { InlineIcon } from "@iconify/react";
import magnifyIcon from "@iconify/icons-mdi/magnify";

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
        <InlineIcon
          className="prefix"
          icon={magnifyIcon}
          width="1.5em"
          height="1.5em"
        />
        <input
          id="search"
          type="text"
          className="validate"
          value={this.props.searchQuery}
          onChange={this.setSearchQuery}
        />
        <label className="active" htmlFor="search">
          Search
        </label>
      </form>
    );
  }
}

export default Search;
