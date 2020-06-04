import React, { Component } from 'react';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import axios from 'axios';



class ForgotPassword extends Component {
    state = { 
        password: "",
        rePassword: ""
     }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    onButtonClickHandler=(e)=>{
        e.preventDefault();
        const { token } = this.props.match.params
        console.log(this.state);
        
        axios.patch(`/reset-password/${token}`,this.state)
        .then((response) => {
            this.setState({});
            alert("Password Reset Successfull \n Login again!");
        }
        ).catch((error)=>{
            alert("Something went wrong!! \n Try Later")
        })

    }
    render() { 
        return ( 
            <Container style={{marginTop:"40px"}} component="main" maxWidth="xs">
            <CssBaseline />
            <div >
              <Typography component="h1" variant="h5">
                Ente New Password
              </Typography>
              <form style={{marginTop:"40px"}} >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  value={this.state.password}
                  type="password"
                  label="password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                  onChange={this.onChangeHandler}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="rePassword"
                  value={this.state.rePassword}
                  type="password"
                  label="rePassword"
                  name="rePassword"
                  autoComplete="rePassword"
                  autoFocus
                  onChange={this.onChangeHandler}
                />
                <Button
                  style={{marginTop:"40px"}}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.onButtonClickHandler}
                  
                >
                  Continue
                </Button>
            </form>
            </div>
          </Container>
       
         );
    }
}
 
export default ForgotPassword;