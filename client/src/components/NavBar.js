import React from "react";
import AddItemModal from "./AddItemModal";

import M from "materialize-css";
import { InlineIcon } from "@iconify/react";
import barcodeScan from "@iconify/icons-mdi/barcode-scan";
import logoutIcon from "@iconify/icons-mdi/logout";
import plusIcon from "@iconify/icons-mdi/plus";
import printerIcon from "@iconify/icons-mdi/printer";
import menuIcon from "@iconify/icons-mdi/menu";

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
                    <InlineIcon
                      className="mr-1"
                      icon={plusIcon}
                      width="24px"
                      height="24px"
                    />
                    ADD ITEM
                  </a>
                </li>

                <li>
                  <a href="#!">
                    <InlineIcon
                      className="mr-1"
                      icon={barcodeScan}
                      width="24px"
                      height="24px"
                    />
                    SCAN
                  </a>
                </li>

                <li>
                  <button
                    className="btn-flat white-text mr-2"
                    onClick={() => {
                      window.print();
                    }}
                  >
                    <InlineIcon icon={printerIcon} width="24px" height="24px" />{" "}
                    PRINT
                  </button>
                </li>
              </ul>

              <ul id="nav-mobile" className="right hide-on-small-only">
                <li>
                  <a href="#!" onClick={this.props.logoutUser}>
                    <InlineIcon icon={logoutIcon} width="24px" height="24px" />
                    LOG OUT
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
                    <InlineIcon icon={menuIcon} width="24px" height="24px" />
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
              <InlineIcon
                className="mr-2"
                icon={plusIcon}
                width="24px"
                height="24px"
              />{" "}
              ADD ITEM
            </a>
          </li>

          <li>
            <a href="#!">
              <InlineIcon
                className="mr-2"
                icon={barcodeScan}
                width="24px"
                height="24px"
              />{" "}
              SCAN
            </a>
          </li>

          <li>
            <a href="#!" onClick={this.props.logoutUser}>
              <InlineIcon
                icon={logoutIcon}
                className="mr-2"
                width="24px"
                height="24px"
              />
              LOG OUT
            </a>
          </li>
        </ul>

        <AddItemModal />
      </>
    );
  }
}

export default NavBar;
