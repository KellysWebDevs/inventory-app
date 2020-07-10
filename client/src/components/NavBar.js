import React from "react";
import ReactToPrint from "react-to-print";
import M from "materialize-css";

class NavBar extends React.Component {
  componentDidMount() {
    M.Sidenav.init(this.Sidenav, {});
  }

  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <ul className="left hide-on-small-only">
                <li className="ml-1">
                  <a href="#!">
                    <i className="material-icons left">add</i>
                    ADD ITEM
                  </a>
                </li>

                <li>
                  <a href="#!">
                    <i className="material-icons">barcode-scan</i>
                    SCAN
                  </a>
                </li>

                <li>
                  <ReactToPrint
                    trigger={() => (
                      <a href="#!">
                        <i className="material-icons left">print</i>
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
            <a href="#!">
              <i className="material-icons left">add</i>
              ADD ITEM
            </a>
          </li>

          <li>
            <a href="#!">
              <i className="material-icons">barcode-scan</i>
              SCAN
            </a>
          </li>

          <li>
            <ReactToPrint
              trigger={() => (
                <a href="#!">
                  <i className="material-icons left">print</i>
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
      </>
    );
  }
}

export default NavBar;
