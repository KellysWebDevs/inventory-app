import React, { Component } from "react";
import { InlineIcon } from "@iconify/react";
import barcodeScan from "@iconify/icons-mdi/barcode-scan";
import closeCircleOutline from "@iconify/icons-mdi/close-circle-outline";

class CategoryCard extends Component {
  render() {
    const { category } = this.props;

    return (
      <div className={`${category.color} lighten-${category.lighten}`}>
        <div className="row">
          <div className="col s12">
            <h3 className="center">{category.name}</h3>
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
                      <InlineIcon
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
                      />
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

export default CategoryCard;
