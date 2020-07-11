import React from "react";
import { InlineIcon } from "@iconify/react";
import barcodeScan from "@iconify/icons-mdi/barcode-scan";
import closeCircleOutline from "@iconify/icons-mdi/close-circle-outline";

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
                      <InlineIcon
                        className="center-align"
                        icon={barcodeScan}
                        width="1.5em"
                        height="1.5em"
                      />
                    </td>
                    <td className="center-align">
                      <InlineIcon
                        className="red-text"
                        icon={closeCircleOutline}
                        width="1.5em"
                        height="1.5em"
                      />{" "}
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
