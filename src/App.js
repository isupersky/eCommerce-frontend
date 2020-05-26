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

// import Testapi from "./test/testapi";

function App() {
  return (
    <div className="App">
      {/* <Testapi /> */}
      <Navbar></Navbar>
      {/* <SellerSignup></SellerSignup> */}
      {/* <CustomerSignup></CustomerSignup> */}
      <Switch>
        <Route path="/signup" component={CustomerSignup} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/sellersignup" component={SellerSignup} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
