import React from "react";

import TableItem from "./TableItem";

class SearchTable extends React.Component {
  render() {
    const { categories, searchQuery } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 className="center">Search Results</h3>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className="pl-1">Item</th>
              <th className="center-align">Amount</th>
              <th className="center-align">Bar Code</th>
              <th className="center-align">Remove</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) =>
              category.items.map((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                  <TableItem key={item.name} item={item} />
                ) : null
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchTable;
