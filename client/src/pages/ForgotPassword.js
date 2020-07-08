import React from "react";
import PropTypes from "prop-types";
import AutoTitle from "../components/AutoTitle";
import { connect } from "react-redux";
import classnames from "classnames";
import { sendForgotEmail } from "../redux/actions/authActions";

class ForgotPassword extends React.Component {
  state = {
    email: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
    };

    this.props.sendForgotEmail(userData, this.props.history);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <AutoTitle>Forgot Password</AutoTitle>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email || errors.emailnotfound,
                    })}
                  />
                  <label htmlFor="email">Email</label>
                  <span
                    className="helper-text"
                    data-error={errors.email || errors.emailnotfound}
                  ></span>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <button type="submit" className="btn btn-small">
                    Send Email <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <blockquote>
              Suddenly remember your password?
              <a href="/login" className="btn btn-flat red-text text-lighten-1">
                <i className="material-icons">file_download</i>
              </a>
              <br />
              Want to make a new account?
              <a
                href="/register"
                className="btn btn-flat red-text text-lighten-1"
              >
                <i className="material-icons">account_box</i>
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  sendForgotEmail: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { sendForgotEmail })(ForgotPassword);
