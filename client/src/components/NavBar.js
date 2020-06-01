import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="mr-2">
              <button className="waves-effect waves-light btn">
                <i
                  className="iconify mr-1"
                  data-icon="bi:plus"
                  data-inline="false"
                  style={{ width: "20px", height: "20px" }}
                ></i>
                ADD ITEM
              </button>
            </li>
            <li className="mr-2">
              <button className="waves-effect waves-light btn">
                <i
                  className="iconify mr-1"
                  data-icon="mdi:barcode-scan"
                  data-inline="false"
                  style={{ width: "20px", height: "20px" }}
                ></i>
                SCAN
              </button>
            </li>

            <li className="mr-2">
              <ReactToPrint
                trigger={() => (
                  <button className="waves-effect waves-light btn">
                    <i
                      className="iconify mr-1"
                      data-icon="topcoat:print"
                      data-inline="false"
                      style={{ width: "20px", height: "20px" }}
                    ></i>
                    PRINT
                  </button>
                )}
              />
            </li>

            <li className="mr-2">
              <button
                className="waves-effect waves-light btn"
                onClick={this.props.logoutUser}
              >
                LOG OUT
                <i
                  className="iconify ml-1"
                  data-icon="ls:logout"
                  data-inline="false"
                  style={{ width: "20px", height: "20px" }}
                ></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
