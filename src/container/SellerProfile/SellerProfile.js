import React, { Component } from 'react';

import axios from "axios"

import { connect } from 'react-redux'

import { TextField, Grid, Button, Divider } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

class CustomerProfile extends Component {

    componentDidMount(){
        axios({   
        method: 'GET',
        url: `/seller/profile`,
        headers: {
        'Authorization': `bearer ${this.props.token}`

}
          })
            .then((response)=> {
              console.log(response.data.data);
              
                this.setState({
                    ...this.state,
                    ...response.data.data
                });
                this.props.setAddress(this.state.address[0]);
          });
    }

    onChangeHandler=(e)=>{

      this.setState({
        ...this.state,
       [e.target.name]: e.target.value
      });
    }

    saveButtonOnClick=()=>{
      console.log("SAVEBUTTONONCLICK this.state",this.state);

      axios({
        method: 'patch',
        url: '/seller/update-profile',
        data: {
          firstName: `${this.state.firstName}`,
          middleName: `${this.state.middleName}`,
          lastName: `${this.state.lastName}`,
          companyContact: `${this.state.companyContact}`,
          companyName: `${this.state.companyName}`,
          gst: `${this.state.gst}`,

        },
        headers: {
          // 'Authorization': `bearer 6d1e9e17-9968-4433-be2c-d892d5244cb9`
          'Authorization': `bearer ${this.props.token}`}
      })
      .then((response)=> {
        this.setState({
          ...this.state,
          disabled: true
        });
  })
  .catch((error)=>{

    alert(`Message: ${error.response.data.message}\n ${error.response.data.details}`);
    
    });
      
    }

    state = {
        disabled:true, 
        active: "",
        companyContact: "",
        companyName: "",
        gst:"",
        email: "",
        firstName: "",
        id: 123,
        lastName: "",
        middleName: "",
        userDp: "",
     }
    render() { 
        return (
        <div style={{ width: "80%", margin: " 20px auto" }}>

      <Grid container spacing={2}>
      <Grid item xs={12}>
      <Avatar alt="Remy Sharp" src={this.state.userDp} style={{
    width: "100px",
    height: "100px",
    margin: "0 auto"
  }}>
      {this.state.firstName}
      </Avatar>
      </Grid>  
      <Grid item xs={12}>
        <TextField
          name="firstName"
          label="First Name"
          value={this.state.firstName}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          disabled={this.state.disabled?true:null}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="middleName"
          label="Middle Name"
          value={this.state.middleName==="null"?"N/A":this.state.middleName}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          disabled={this.state.disabled?true:null}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="lastName"
          label="Last name"
          value={this.state.lastName}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          disabled={this.state.disabled?true:null}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="companyName"
          label="company name"
          value={this.state.companyName}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          disabled={this.state.disabled?true:null}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="gst"
          label="gst"
          value={this.state.gst}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          disabled={this.state.disabled?true:null}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="companyContact"
          label="Company Contact Number"
          value={this.state.companyContact===null?"N/A":this.state.companyContact}
          onChange={this.onChangeHandler}
          variant="outlined"
          margin="normal"
          disabled={this.state.disabled?true:null}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          value={this.state.email}
          variant="outlined"
          margin="normal"
          disabled
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
      {this.state.disabled?
      <Button 
      onClick={()=>{this.setState( {...this.state,disabled: false})}} 
      style={{margin:"20px auto"}} 
      variant="contained" 
      color="primary">
        Edit
        </Button>
      :
      <Button 
      onClick={()=>this.saveButtonOnClick()} 
      style={{margin:"20px auto"}} 
      variant="contained" 
      color="primary">
        Save
        </Button>}

      </Grid>
    </Grid>
    <Divider />
    </div>

            );
    }
}
 
const mapStateToProps = (state) => {  
    
    return {
        token: state.login.token,
        role: state.login.role}
}


export default connect(mapStateToProps)(CustomerProfile);