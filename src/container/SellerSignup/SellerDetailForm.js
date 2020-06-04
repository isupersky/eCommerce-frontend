import React, { Component } from 'react';
import {Link} from "react-router-dom"
//GENERAL
import { TextField, Grid } from "@material-ui/core";
import { Button } from '@material-ui/core';

class SellerDetailForm extends Component {

  state = { 
    user: {
      confirmPassword: this.props.data.user.confirmPassword,
      email: this.props.data.user.email,
      firstName: this.props.data.user.firstName,
      lastName: this.props.data.user.lastName,
      middleName: this.props.data.user.middleName,
      password: this.props.data.user.password,
         },
      errors: {},
 }


     buttonOnClickHandler =()=>{
         console.log(this.state);
         
     }
 
    onChangeHandler =(e)=>{
      const { errors } = this.state;
      if (
        e.target.name === "confirmPassword" &&
        e.target.value !== this.state.user.password
      ) {
        e.target.setCustomValidity("Passwords are not matching");
      } else {
        e.target.setCustomValidity("");
      }
      if (e.target.name === "password") {
        const confirm = e.target.form.querySelector(
          "input[name='confirmPassword']"
        );
        // WHEN WE CHANGE PASSWORD, WE WANT TO VALIDATE CONFIRM PASSWORD AS WELL
      if (e.target.value === this.state.user.confirmPassword) {
        delete errors[confirm.name];
        confirm.setCustomValidity("");
      } else {
        confirm.setCustomValidity("Passwords are not matching");
        errors[confirm.name] = confirm.validationMessage;
      }
      }
      if (e.target.validity.valid) {
        //OTHER ELEMENTS
        delete this.state.errors[e.target.name];
      } else {
        errors[e.target.name] = e.target.validationMessage;
      }
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      this.setState({
        ...this.state,
        user: { ...this.state.user, [e.target.name]: value },
        errors: { ...this.state.errors }
      });
    }
    render() { 
        const { user, errors } = this.state;
        return ( 

      <div style={{ width: "80%", margin: " 20px auto" }}>

      <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          placeholder="Type your email here"
          name="email"
          label="Email"
          value={user.email}
          onChange={this.onChangeHandler}
          type="email"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["email"]}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder="Type your firstname here"
          name="firstName"
          label="FirstName"
          value={user.firstName}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20,
          }}
          error={!!errors["FirstName"]}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder="Type your middlename here"
          name="middleName"
          label="MiddleName"
          value={user.middleName}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            minLength: 3,
            maxLength: 20,
          }}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder="Type your lastname here"
          name="lastName"
          label="LastName"
          value={user.lastName}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20,
          }}
          error={!!errors["LastName"]}
          fullWidth
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your password here"
          name="password"
          label="Password"
          onChange={this.onChangeHandler}
          type="password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          error={!!errors["password"]}
          inputProps={{
            minLength: 6,
            maxLength: 20,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Re-type your password here"
          label="Password"
          name="confirmPassword"
          onChange={this.onChangeHandler}
          type="password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["confirmPassword"]}
          inputProps={{
            minLength: 6,
            maxLength: 20,
          }}
          required
          fullWidth
        />
      </Grid>
    </Grid>
    <Button onClick={()=>{console.log(this.state); return this.props.nextButtonClickHandler(this.state.user)}} 
    style={{"marginTop":"20px"}} variant="contained" color="primary">
      Next</Button>


    <Link style={{marginTop:"20px", display:"block"}} to="/signup" exact="true">
    Register as a Customer
              </Link>
    </div>

    
         );
    }
}
 
export default SellerDetailForm;

