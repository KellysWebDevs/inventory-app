import React from "react";

class CategoryFilter extends React.Component {
  render() {
    const { categories } = this.props;

    return (
      <>
        <h6>Filter by category:</h6>
        {categories.map((category) => (
          <div
            key={category.name}
            className={`chip ${category.color} lighten-3 ${category.color}-text text-darken-4`}
          >
            {category.name}
          </div>
        ))}
      </>
    );
  }
}

export default CategoryFilter;
