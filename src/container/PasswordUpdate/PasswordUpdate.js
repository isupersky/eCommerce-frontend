import React, { Component } from 'react';

import { Button, Container,TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import axios from "axios";

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as actions from '../../redux/actions/index';



class PasswordUpdate extends Component {
    state = {     }

    onChangeHandler=(e)=>{
      
      this.setState({
        ...this.state,
       [e.target.name]: e.target.value
      });

    }
    onSubmitHandler=(e)=>{
      e.preventDefault();

      if(this.state.password!==this.state.rePassword){
        alert("enter similar passwords")
      }
      else{
      axios({
        method: 'patch',
        url: `/customer/update-password`,
        data: {
          oldPassword: `${this.state.oldPassword}`,
          password: `${this.state.password}`,
          rePassword: `${this.state.rePassword}`


        },
        headers: {
          // 'Authorization': `bearer 6d1e9e17-9968-4433-be2c-d892d5244cb9`
          'Authorization': `bearer ${this.props.token}`}
      })
      .then((response)=> {
        this.setState({});
        alert("Please login again")
        this.props.onPasswordChange();
        // return <Redirect to='/' /> 
  })
  .catch((error)=>{

    alert(`Message: ${error.response.data.message}\n ${error.response.data.details}`);
    
    });}  
    }

  
    render() { 
        return ( 
            <Container component="main" maxWidth="xs">

            <div>
            
              <Typography component="h1" variant="h5">
                Update Password
              </Typography>
              <form>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="oldPassword"
                  label="Old Password"
                  type="password"
                  id="oldPassword"
                  autoComplete="current-password"
                  onChange={this.onChangeHandler}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.onChangeHandler}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="rePassword"
                  label="Repeat New Password"
                  type="password"
                  id="rePassword"
                  autoComplete="current-password"
                  onChange={this.onChangeHandler}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.onSubmitHandler}
                >
                  Update
                </Button>
              </form>
            </div>
          </Container>
        
         );
    }
}
const mapStateToProps = (state) => {  
    
  return {
      token: state.login.token}
}
const mapDispatchToProps = dispatch => {
  return{
      onPasswordChange: () => dispatch(actions.passwordChangeLogoutSuccess())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PasswordUpdate);