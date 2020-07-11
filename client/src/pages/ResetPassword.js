import React from "react";
import PropTypes from "prop-types";
import AutoTitle from "../components/AutoTitle";
import { connect } from "react-redux";
import classnames from "classnames";
import { resetUserPassword } from "../redux/actions/authActions";
import { InlineIcon } from "@iconify/react";
import lockReset from "@iconify/icons-mdi/lock-reset";

class ResetPassword extends React.Component {
  state = {
    password: "",
    password2: "",
    errors: {},
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { password, password2 } = this.state;

    const data = {
      password,
      password2,
      token: this.props.match.params.token,
    };

    this.props.resetUserPassword(data, this.props.history);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors.token === "invalid") {
        this.props.history.push("/oops");
      }
      this.setState({ errors: this.props.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <AutoTitle>Reset Password</AutoTitle>
          </div>
        </div>

        <form noValidate onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={this.handleChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect,
                })}
              />
              <label htmlFor="password">Password</label>
              <span
                className="helper-text"
                data-error={errors.password || errors.passwordincorrect}
              ></span>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={this.handleChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames("", {
                  invalid: errors.password2,
                })}
              />
              <label htmlFor="password2">Confirm Password</label>
              <span
                className="helper-text"
                data-error={errors.password2}
              ></span>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <button type="submit" className="btn">
                <InlineIcon
                  className="mr-1"
                  icon={lockReset}
                  width="24px"
                  height="24px"
                />
                Reset
              </button>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col s12">
            <blockquote>
              Remembered your password? <a href="/login">Back to login</a>
              <br />
              Don't have an account? <a href="/register">Register</a>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  resetUserPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { resetUserPassword })(ResetPassword);
