import React from "react";
import M from "materialize-css";

class Landing extends React.Component {
  state = {
    tapTargetPulse: "pulse",
  };

  componentDidMount() {
    M.TapTarget.init(this.TapTarget, {
      onOpen: () => this.setState({ tapTargetPulse: "" }),
    });
  }

  render() {
    return (
      <div className="container center">
        <div className="row">
          <div className="col s12">
            <h1>Inventory Management</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h4 className="flow-text">
              To experience my Inventory App, you MUST be logged into an
              account.
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <a href="/login" className="btn">
              Log In
            </a>
          </div>
          <div className="col s6">
            <a href="/register" className="btn lighten-2">
              Register
            </a>
          </div>
        </div>

        <div className="fixed-action-btn direction-top">
          <button
            id="menu"
            className={`btn btn-floating btn-large waves-effect waves-light ${this.state.tapTargetPulse}`}
          >
            <i className="material-icons">menu</i>
          </button>
        </div>
        <div
          className="tap-target"
          data-target="menu"
          ref={(TapTarget) => {
            this.TapTarget = TapTarget;
          }}
        >
          <div className="tap-target-content">
            <h5>We do stuff</h5>
            <p>Testing with a lot of random text with fillers of randomness.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
