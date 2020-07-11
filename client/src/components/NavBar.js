import React from "react";
import ReactToPrint from "react-to-print";
import AddItemModal from "./AddItemModal";

import M from "materialize-css";

class NavBar extends React.Component {
  state = {
    effectValue: 0,
  };

  navEffect = (e) => {
    this.setState({ effectValue: e.x / 2.5 });
  };

  componentDidMount() {
    M.Sidenav.init(this.Sidenav, {});

    document.addEventListener("mousemove", this.navEffect);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.navEffect);
  }

  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <ul className="left hide-on-small-only">
                <li className="ml-1">
                  <a href="#add-item-modal" className="modal-trigger">
                    <i
                      className="iconify mr-1"
                      data-icon="bi:plus"
                      data-inline="false"
                      style={{ width: "20px", height: "20px" }}
                    ></i>
                    ADD ITEM
                  </a>
                </li>

                <li>
                  <a href="#!">
                    <i
                      className="iconify mr-1"
                      data-icon="mdi:barcode-scan"
                      data-inline="false"
                      style={{ width: "20px", height: "20px" }}
                    ></i>
                    SCAN
                  </a>
                </li>

                <li>
                  <ReactToPrint
                    trigger={() => (
                      <a href="#!">
                        <i
                          className="iconify mr-1"
                          data-icon="topcoat:print"
                          data-inline="false"
                          style={{ width: "20px", height: "20px" }}
                        ></i>
                        PRINT
                      </a>
                    )}
                  />
                </li>
              </ul>

              <ul id="nav-mobile" className="right hide-on-small-only">
                <li>
                  <a href="#!" onClick={this.props.logoutUser}>
                    LOG OUT
                    <i
                      className="iconify ml-1"
                      data-icon="ls:logout"
                      data-inline="false"
                      style={{ width: "20px", height: "20px" }}
                    ></i>
                  </a>
                </li>
              </ul>

              <ul className="right hide-on-med-and-up">
                <li>
                  <a
                    href="#sidenav"
                    className="sidenav-trigger"
                    data-target="mobile-sidenav"
                  >
                    <i className="material-icons middle">menu</i>
                  </a>
                </li>
              </ul>
            </div>

            <ul>
              <li className="black-text">
                <i
                  className="material-icons ml-1"
                  style={{
                    fontSize: "34px",
                    transform: `rotate(${this.state.effectValue}deg)`,
                  }}
                >
                  settings
                </i>
              </li>
              <li className="green-text">
                <i
                  className="material-icons"
                  style={{
                    fontSize: "34px",
                    transform: `rotate(-${
                      this.state.effectValue + 180 / 6
                    }deg)`,
                    marginLeft: "-12px",
                    marginTop: "13px",
                  }}
                >
                  settings
                </i>
              </li>
              <li className="orange-text">
                <i
                  className="material-icons"
                  style={{
                    fontSize: "34px",
                    transform: `rotate(${this.state.effectValue}deg)`,
                    marginLeft: "-21px",
                    marginTop: "35px",
                  }}
                >
                  settings
                </i>
              </li>
              <li className="blue-text">
                <i
                  className="material-icons"
                  style={{
                    fontSize: "34px",
                    transform: `rotate(${this.state.effectValue}deg)`,
                    marginLeft: "-25px",
                  }}
                >
                  settings
                </i>
              </li>
              <li className="pink-text">
                <i
                  className="material-icons"
                  style={{
                    fontSize: "34px",
                    transform: `rotate(-${
                      this.state.effectValue + 180 / 6
                    }deg)`,
                    marginLeft: "-20px",
                    marginTop: "23px",
                  }}
                >
                  settings
                </i>
              </li>
              <li className="red-text">
                <i
                  className="material-icons"
                  style={{
                    fontSize: "34px",
                    transform: `rotate(${this.state.effectValue}deg)`,
                    marginLeft: "-8px",
                    marginTop: "23px",
                  }}
                >
                  settings
                </i>
              </li>
            </ul>
          </nav>
        </div>

        <ul
          id="mobile-sidenav"
          className="sidenav"
          ref={(Sidenav) => {
            this.Sidenav = Sidenav;
          }}
        >
          <li>
            <a href="#add-item-modal" className="modal-trigger">
              <i
                className="iconify mr-1"
                data-icon="bi:plus"
                data-inline="false"
                style={{ width: "20px", height: "20px" }}
              ></i>
              ADD ITEM
            </a>
          </li>

          <li>
            <a href="#!">
              <i
                className="iconify mr-1"
                data-icon="mdi:barcode-scan"
                data-inline="false"
                style={{ width: "20px", height: "20px" }}
              ></i>
              SCAN
            </a>
          </li>

          <li>
            <ReactToPrint
              trigger={() => (
                <a href="#!">
                  <i
                    className="iconify mr-1"
                    data-icon="topcoat:print"
                    data-inline="false"
                    style={{ width: "20px", height: "20px" }}
                  ></i>
                  PRINT
                </a>
              )}
            />
          </li>

          <li>
            <a href="#!" onClick={this.props.logoutUser}>
              LOG OUT
              <i
                className="iconify ml-1"
                data-icon="ls:logout"
                data-inline="false"
                style={{ width: "20px", height: "20px" }}
              ></i>
            </a>
          </li>
        </ul>

        <AddItemModal />
      </>
    );
  }
}

export default NavBar;
