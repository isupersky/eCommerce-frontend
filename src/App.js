import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import CustomerSignup from "./container/CustomerSignup/CustomerSignup";
import Navbar from "./component/NavBar/NavBar";
import SellerSignup from "./container/SellerSignup/SellerSignup";
import Home from "./container/Home/Home";
import Login from "./container/Login/Login";
import Profile from "./container/Profile/Profile";
import ForgotPassword from "./container/ForgotPassword/ForgotPassword";
import ProductDetail from "./ProductDetail/ProductDetail";
import Cart from "./container/cart/Cart"

import { connect } from "react-redux";

const App = (props) => {
  
  return (
    <div className="App">
      {/* <Testapi /> */}
      <Navbar {...props}></Navbar>
      {/* <SellerSignup></SellerSignup> */}
      {/* <CustomerSignup></CustomerSignup> */}

      {!props.isAuthenticated ? (
        <Switch>
          <Route
            path="/ProductDetail/:productId"
            exact
            component={ProductDetail}
          />
          <Route path="/signup" component={CustomerSignup} />
          <Route path="/Cart" component={Cart} />
          <Route path="/sellersignup" component={SellerSignup} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route
            path="/ProductDetail/:productId"
            exact
            component={ProductDetail}
          />
          <Route path="/profile" component={Profile} />
          <Route path="/Cart" component={Cart} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
