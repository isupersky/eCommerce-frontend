import React, { Component } from 'react';
import {Link} from "react-router-dom"
//GENERAL
import { TextField, Grid } from "@material-ui/core";
import { Button } from '@material-ui/core';

class SignupForm extends Component {
    state = { 
        user: {
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

      <form style={{ width: "80%", margin: " 20px auto" }}>

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
          name="firstname"
          label="FirstName"
          value={user.firstname}
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
          name="middlename"
          label="MiddleName"
          value={user.middlename}
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
          error={!!errors["MiddleName"]}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder="Type your lastname here"
          name="lastname"
          label="LastName"
          value={user.lastname}
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

      <Grid item xs={12}>
        <TextField
          placeholder="Type your Company's Name here"
          name="companyName"
          label="CompanyName"
          value={user.companyName}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 10,
            maxLength: 10,
          }}
          error={!!errors["Company Name"]}
          fullWidth
        />
      </Grid>
          
      <Grid item xs={12}>
        <TextField
          placeholder="Type your Company's Contact number here"
          name="companyContact"
          label="companyContact"
          value={user.companyContact}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 10,
            maxLength: 10,
          }}
          error={!!errors["Contact"]}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder="Type your Company's GST number here"
          name="gst"
          label="gst"
          value={user.gst}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 10,
            maxLength: 10,
          }}
          error={!!errors["gst"]}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder="Type your Company's Address here"
          name="companyAddress"
          label="companyAddress"
          value={user.companyAddress}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          error={!!errors["companyAddress"]}
          fullWidth
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your password here"
          name="password"
          label="Password"
          value={user.password}
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
          value={user.confirmPassword}
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
    <Button onClick={this.buttonOnClickHandler} style={{"marginTop":"20px"}} variant="contained" color="primary">Register</Button>


    <Link style={{marginTop:"20px", display:"block"}} to="/signup" exact="true">
    Register as a Customer
              </Link>
    </form>

    
         );
    }
}
 
export default SignupForm;

