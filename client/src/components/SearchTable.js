import React from "react";

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
                  <tr key={item.name}>
                    <td className="pl-1">{item.name}</td>
                    <td className="center-align">{item.amount}</td>
                    <td className="center-align">
                      <i
                        className="iconify"
                        data-icon="mdi:barcode-scan"
                        data-inline="false"
                        style={{ width: "24px", height: "24px" }}
                      ></i>
                    </td>
                    <td className="center-align">
                      <i className="material-icons red-text">highlight_off</i>
                    </td>
                  </tr>
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
