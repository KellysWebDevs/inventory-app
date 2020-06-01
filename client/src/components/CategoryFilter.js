import React, { Component } from "react";

class CategoryFilter extends Component {
  colors = [
    "red",
    "deep-purple",
    "blue",
    "teal",
    "lime",
    "orange",
    "blue-grey",
  ];
  getColor = () => {};

  render() {
    const { categories } = this.props;

    return (
      <>
        <h6>Filter by category:</h6>
        {categories.map((category) => (
          <div key={category.name} className="chip red lighten-4">
            {category.name}
          </div>
        ))}
      </>
    );
  }
}

export default CategoryFilter;
