import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import CustomerSignup from "./container/CustomerSignup/CustomerSignup";
import Navbar from "./component/NavBar/NavBar";
import SellerSignup from "./container/SellerSignup/SellerSignup";
import Home from "./container/Home/Home";
import Login from "./container/Login/Login";
import ProfileHome from "./container/CustomerProfile/ProfileHome";
import SellerProfileHome from "./container/SellerProfile/ProfileHome"
import SellerDashBoard from "./container/SellerDashboard/Dashboard"
import ForgotPassword from "./container/ForgotPassword/ForgotPassword";
import ProductDetail from "./ProductDetail/ProductDetail";
import Cart from "./container/cart/Cart"
import Logout from "./container/Logout/Logout"
import ResetPassword from "./container/ForgotPassword/ResetPassword"
import * as constants from "./Constants/constant"
import { connect } from "react-redux";

const App = (props) => {

  const createUserAccess=(props)=>{
    console.log(props);
    
    if(!props.isAuthenticated){
      return (
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
          <Route path="/Reset-Password/:token" component={ResetPassword} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      );
    }
    else if (props.isAuthenticated && props.role===constants.ROLE_CUSTOMER){
      return(
        <Switch>
          <Route path="/ProductDetail/:productId" exact component={ProductDetail}/>
          <Route path="/profile" component={ProfileHome} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Logout" component={Logout} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      )
    }
    else if (props.isAuthenticated && props.role===constants.ROLE_SELLER){
      return(
      <Switch>
          <Route path="/ProductDetail/:productId" exact component={ProductDetail}/>
          <Route path="/profile" component={SellerProfileHome} />
          <Route path="/DashBoard" component={SellerDashBoard} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Logout" component={Logout} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
        )
    }
    else if (props.isAuthenticated && props.role===constants.ROLE_ADMIN){
      return(
      <Switch>
          <Route path="/ProductDetail/:productId" exact component={ProductDetail}/>
          <Route path="/profile" component={ProfileHome} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Logout" component={Logout} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
        )
    }
    else{
      return (
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
          <Route path="/Reset-Password/:token" component={ResetPassword} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      );
    }

  }

  return (
    <div className="App">
      {/* <Testapi /> */}
      <Navbar {...props}></Navbar>
      {/* <SellerSignup></SellerSignup> */}
      {/* <CustomerSignup></CustomerSignup> */}

      {createUserAccess(props)}

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    role:state.login.role
  };
};

export default connect(mapStateToProps)(App);
