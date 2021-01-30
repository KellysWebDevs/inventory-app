import React from "react";

import TableItem from "./TableItem";

class CategoryFilterTable extends React.Component {
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
                  <th className="remove-header center-align">Actions</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item) => (
                  <TableItem
                    key={item.name}
                    item={item}
                    itemsLength={category.items.length}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryFilterTable;
