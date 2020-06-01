import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form className="input-field">
        <i
          className="iconify prefix"
          data-icon="bi:search"
          data-inline="false"
        ></i>
        <input id="search" type="text" className="validate" />
        <label htmlFor="search">Search</label>
      </form>
    );
  }
}

export default Search;
