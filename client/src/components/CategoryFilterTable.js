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
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Bar Code</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item) => (
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
