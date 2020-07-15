import React from "react";
import M from "materialize-css";
import { InlineIcon } from "@iconify/react";
import menuIcon from "@iconify/icons-mdi/menu";

class Landing extends React.Component {
  state = {
    tapTargetPulse: "pulse",
  };

  openTapTarget = () => {
    this.tapTargetInstance.open();
    this.setState({ tapTargetPulse: "" });
  };

  componentDidMount() {
    this.tapTargetInstance = M.TapTarget.init(this.TapTarget, {});

    M.Materialbox.init(this.Materialbox);
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
            <img
              src="/inventory-manager.png"
              alt="Inventory Manager"
              className="materialboxed responsive-img mx-auto"
              width="650"
              ref={(Materialbox) => (this.Materialbox = Materialbox)}
              data-caption="Inventory Manager Preview"
            />
          </div>

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
            className={`btn btn-floating btn-large pink lighten-1 ${this.state.tapTargetPulse}`}
            onClick={this.openTapTarget}
          >
            <InlineIcon icon={menuIcon} width="24px" height="24px" />
          </button>
        </div>
        <div
          className="tap-target blue lighten-1"
          data-target="menu"
          ref={(TapTarget) => {
            this.TapTarget = TapTarget;
          }}
        >
          <div className="tap-target-content">
            <h5>Get Ready for Organization</h5>
            <p>
              This demo app is meant for organizing anything from food, to
              hardware, to whatever else you might think of! All you have to do
              is sign up to experience it.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
