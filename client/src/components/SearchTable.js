import React from "react";
import TableItem from "./TableItem";

class SearchTable extends React.Component {
  render() {
    const { categories, searchQuery } = this.props;

    const items = [];
    categories.forEach((category) => {
      category.items.forEach((item) => {
        if (item.name.toLowerCase().includes(searchQuery.toLowerCase()))
          items.push(item);
      });
    });

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
            {items.length ? (
              items.map((item) => <TableItem key={item.name} item={item} />)
            ) : (
              <tr>
                <td colSpan="4">
                  <h6 className="center">No search results</h6>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchTable;
