import React, { Component } from "react";

import TableItem from "./TableItem";

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
                  <TableItem key={item.name} item={item} />
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
