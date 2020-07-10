import React from "react";

class categoryFilterTable extends React.Component {
  render() {
    const { categories, categoryFilter } = this.props;
    const category = categories.find(
      (category) => category.name === categoryFilter
    );

    return (
      <div className={`${category.color} lighten-${category.lighten}`}>
        <div className="row">
          <div className="col s12">
            <h3 className="center">{categoryFilter}</h3>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
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
                {category.items.map((item) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default categoryFilterTable;
