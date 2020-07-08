import React from "react";
import PropTypes from "prop-types";
import AutoTitle from "../components/AutoTitle";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../redux/actions/authActions";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData, this.props.history);
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
            <AutoTitle>Login</AutoTitle>
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
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
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
                <div className="col s12">
                  <button
                    type="submit"
                    className="btn waves-effect waves-light"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <blockquote>
              Forgot your password?
              <a
                href="/forgotpassword"
                className="btn btn-flat red-text text-lighten-1"
              >
                <i className="material-icons">replay</i>
              </a>
              <br />
              Don't have an account?
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
