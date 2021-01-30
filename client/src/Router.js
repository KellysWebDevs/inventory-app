import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "./redux/actions/authActions";

import PrivateRoute from "./components/PrivateRoute";
import NotPrivateRoute from "./components/NotPrivateRoute";

import App from "./pages/App";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Oops from "./pages/Oops";
import BotForm from "./pages/BotForm";
import Error404 from "./pages/Error404";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class Router extends React.Component {
  protectedComponent = (needsAuth, fallback) =>
    this.props.auth.isAuthenticated ? needsAuth : fallback;

  render() {
    return (
      <BrowserRouter>
        {this.props.auth.isAuthenticated && !this.props.itemsLoading ? (
          <NavBar logoutUser={this.props.logoutUser} />
        ) : null}

        <main>
          <Switch>
            <PrivateRoute exact path="/" component={App} />
            <NotPrivateRoute exact path="/landing" component={Landing} />
            <NotPrivateRoute exact path="/register" component={Register} />
            <NotPrivateRoute exact path="/login" component={Login} />
            <Route exact path="/oops" component={Oops} />
            <Route exact path="/botform" component={BotForm} />
            <Route component={Error404} />
          </Switch>
        </main>

        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  itemsLoading: state.inventory.itemsLoading,
});

export default connect(mapStateToProps, { logoutUser })(Router);
