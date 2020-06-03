import React, { Component } from 'react';
//GENERAL
import { TextField, Grid } from "@material-ui/core";
import { Button } from '@material-ui/core';
import { Link , Redirect} from "react-router-dom";

import axios from 'axios';


class CustomerSignup extends Component {
    state = { 
        user: {
            email: "",
            firstName: "",
            middleName: "",
            lastName  : "",
            contact:"",
            password: "",
            confirmPassword: "",
                      },
          errors: {},
          redirect: false
     }

     buttonOnClickHandler =()=>{
      console.log(this.state.user);
      if(this.state.user.password=== this.state.user.confirmPassword){

     
      axios({
        method: 'post',
        url: '/customer/register',
        data: {
          email: `${this.state.user.email}`,
          firstName: `${this.state.user.firstName}`,
          middleName: `${this.state.user.middleName}`,
          lastName: `${this.state.user.lastName}`,
          contact: `${this.state.user.contact}`,
          password: `${this.state.user.password}`,
        }
      })
      .then((response)=> {
        alert(`${response.data.data.message} \n Check your Mail to Verify Your Acoount`);

        console.log(response);
        this.setState({
          ...this.state,
          redirect:true

        })

  })
  .catch((error)=>{

    alert(`Message: ${error.response.data.message}\n ${error.response.data.details}`);
    
    });
}
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
          <div>
            {this.state.redirect?<Redirect to="/dashboard" />:
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
          placeholder="Type your lastName here"
          name="lastName"
          label="lastName"
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

      <Grid item xs={12}>
        <TextField
          placeholder="Type your Contact number here"
          name="contact"
          label="Contact"
          value={user.contact}
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
          error={!!errors["Contact"]}
          fullWidth
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your password here"
          name="password"
          label="password"
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
    <Button onClick={this.buttonOnClickHandler} style={{marginTop:"20px"}} variant="contained" color="primary">Register</Button>

    <Link style={{marginTop:"20px", display:"block"}} to="/sellersignup" exact="true">
    Register as a seller
              </Link>
    </form>
    }
    </div>

    
         );
    }
}
 
export default CustomerSignup;

