import React from "react";
import ReactToPrint from "react-to-print";
import M from "materialize-css";
import { InlineIcon } from "@iconify/react";
import barcodeScan from "@iconify/icons-mdi/barcode-scan";
import logoutIcon from "@iconify/icons-mdi/logout";
import plusIcon from "@iconify/icons-mdi/plus";
import printerIcon from "@iconify/icons-mdi/printer";
import menuIcon from "@iconify/icons-mdi/menu";

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
                  <ReactToPrint
                    trigger={() => (
                      <a href="#!">
                        <InlineIcon
                          className="mr-1"
                          icon={printerIcon}
                          width="24px"
                          height="24px"
                        />
                        PRINT
                      </a>
                    )}
                  />
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
            <ReactToPrint
              trigger={() => (
                <a href="#!">
                  <InlineIcon
                    className="mr-2"
                    icon={printerIcon}
                    width="24px"
                    height="24px"
                  />{" "}
                  PRINT
                </a>
              )}
            />
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
      </>
    );
  }
}

export default NavBar;
