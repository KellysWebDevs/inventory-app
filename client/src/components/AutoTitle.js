import React from "react";

class AutoTitle extends React.Component {
  render() {
    return (
      <>
        <h3 className="center hide-on-med-and-down">{this.props.children}</h3>
        <h2 className="hide-on-large-only hide-on-small-only">
          {this.props.children}
        </h2>
        <h1 className="center hide-on-med-and-up">{this.props.children}</h1>
      </>
    );
  }
}

export default AutoTitle;
