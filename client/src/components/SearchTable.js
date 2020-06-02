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
              <th>Item</th>
              <th>Amount</th>
              <th>Bar Code</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) =>
              category.items.map((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>
                      <i
                        className="iconify"
                        data-icon="mdi:barcode-scan"
                        data-inline="false"
                        style={{ width: "24px", height: "24px" }}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="iconify red-text"
                        data-icon="el:remove-circle"
                        data-inline="false"
                        style={{ width: "24px", height: "24px" }}
                      ></i>
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
