import React from "react";
import PropTypes from "prop-types";
import AutoTitle from "../components/AutoTitle";
import { connect } from "react-redux";
import classnames from "classnames";
import { registerUser } from "../redux/actions/authActions";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
  };

  nameOk = false;
  emailOk = false;
  passOk = false;
  confirmPassOk = false;

  hovering = false;
  focusing = false;

  validateType = (option) => {
    switch (option) {
      case "name":
        this.typeTimeout = setTimeout(() => {
          this.nameOk = true;
        }, 3000);
        break;
      case "email":
        this.typeTimeout = setTimeout(() => {
          this.emailOk = true;
        }, 4000);
        break;
      case "password":
        this.typeTimeout = setTimeout(() => {
          this.passOk = true;
        }, 3000);
        break;
      case "password2":
        this.typeTimeout = setTimeout(() => {
          this.confirmPassOk = true;
        }, 3000);
        break;
      default:
        clearTimeout(this.typeTimeout);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, password2 } = this.state;

    if (
      (this.nameOk &&
        this.emailOk &&
        this.passOk &&
        this.confirmPassOk &&
        this.hovering &&
        this.focusing) ||
      !name ||
      !email ||
      !password ||
      !password2
    ) {
      const newUser = {
        name,
        email,
        password,
        password2,
      };

      this.props.registerUser(newUser, this.props.history);
    } else {
      this.props.history.push("/botform");
    }
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
            <AutoTitle>Register</AutoTitle>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <form noValidate onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.handleChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    name="name"
                    type="text"
                    className={classnames("", {
                      invalid: errors.name,
                    })}
                    onFocus={() => this.validateType("name")}
                    onBlur={() => this.validateType()}
                  />
                  <label htmlFor="name">Name</label>
                  <span className="helper-text" data-error={errors.name}></span>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.handleChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    name="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email,
                    })}
                    onFocus={() => this.validateType("email")}
                    onBlur={() => this.validateType()}
                  />
                  <label htmlFor="email">Email</label>
                  <span
                    className="helper-text"
                    data-error={errors.email}
                  ></span>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                  <input
                    onChange={this.handleChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    name="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password,
                    })}
                    onFocus={() => this.validateType("password")}
                    onBlur={() => this.validateType()}
                  />
                  <label htmlFor="password">Password</label>
                  <span
                    className="helper-text"
                    data-error={errors.password}
                  ></span>
                </div>
                <div className="input-field col s6">
                  <input
                    onChange={this.handleChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    name="password2"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password2,
                    })}
                    onFocus={() => this.validateType("password2")}
                    onBlur={() => this.validateType()}
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
                  <button
                    type="submit"
                    className="btn waves-effect waves-light"
                    onMouseEnter={() => (this.hovering = true)}
                    onMouseLeave={() => (this.hovering = false)}
                    onFocus={() => (this.focusing = true)}
                    onBlur={() => (this.focusing = false)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(Register);
