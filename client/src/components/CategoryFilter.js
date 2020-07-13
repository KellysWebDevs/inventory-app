import React from "react";

class CategoryFilter extends React.Component {
  setFilter = (category) => {
    const { categoryFilter, setCategoryFilter } = this.props;

    if (category === categoryFilter) {
      setCategoryFilter("");
    } else {
      setCategoryFilter(category);
    }
  };

  resetFilter = () => {
    const { setCategoryFilter } = this.props;

    setCategoryFilter("");
  };

  render() {
    const { categories, categoryFilter } = this.props;

    return (
      <>
        <h6>Filter by category:</h6>

        <div
          className={`chip hoverable unselectable
            ${categoryFilter === "" ? "black white-text" : "white black-text"}
          `}
          style={{ border: "1px solid #333" }}
          onClick={() => this.resetFilter()}
        >
          ALL
        </div>

        {categories.map((category) => (
          <div
            key={category.name}
            className={`chip hoverable unselectable ${
              categoryFilter === category.name
                ? "black white-text"
                : `${category.color} lighten-${category.lighten} ${category.color}-text text-darken-4`
            }`}
            onClick={() => this.setFilter(category.name)}
          >
            {category.name}
          </div>
        ))}
      </>
    );
  }
}

export default CategoryFilter;
