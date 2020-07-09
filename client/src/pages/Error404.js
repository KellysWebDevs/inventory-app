import React from "react";

class Error404 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2>This page does not exist.</h2>
            <h4>You must reorganize yourself.</h4>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <ul>
              <li>Take some notes</li>
              <li>Make a draft</li>
              <li>Find the RIGHT web page</li>
              <li>Get outdoors</li>
              <li style={{ color: "rgba(0,0,0,0.5)" }}>
                Spend some time with family & friends
              </li>
              <li style={{ color: "rgba(0,0,0,0.25)" }}>Read a book</li>
              <li style={{ color: "rgba(0,0,0,0.1)" }}>Say a prayer</li>
              <li style={{ color: "rgba(0,0,0,0.0)" }}>
                Easter egg, eh toast ʕʘ̅͜ʘ̅ʔ
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <a href="/" className="btn btn-floating">
              <i className="material-icons">home</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Error404;
