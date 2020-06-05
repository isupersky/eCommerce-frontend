import React, { Component } from 'react';

import { TextField, Grid, Button} from "@material-ui/core";

import { connect } from 'react-redux';


import axios from "axios"


class SingleAddress extends Component {
    state = { 
        ...this.props.data,
        disabled:true 
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
          url: `/seller/update-address/${this.state.id}`,
          data: {
              city: `${this.state.city}`,
              state: `${this.state.state}`,
              country: `${this.state.country}`,
              addressLine: `${this.state.addressLine}`,
              zipCode: `${this.state.zipCode}`,
              label: `${this.state.label}`

  
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

        this.setState({
          ...this.state,
          disabled: true
        });
  }

    render() { 
      console.log("Single Address",this.props);
      console.log("Single Address",this.state);

      
        return ( 
            <Grid style={{width:"80%", marginTop:"5%", marginLeft:"20px"}} container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="addressLine"
                label="Address Line"
                value={this.state.addressLine}
                variant="outlined"
                onChange={this.onChangeHandler}
                disabled={this.state.disabled===true?true:false}
                fullWidth
              />
            </Grid>
      
            <Grid item xs={12}>
              <TextField
                name="city"
                label="City"
                value={this.state.city===null?"N/A":this.state.city}
                variant="outlined"
                onChange={this.onChangeHandler}
                disabled={this.state.disabled===true?true:false}
                fullWidth
              />
            </Grid>
      
            <Grid item xs={12}>
              <TextField
                name="state"
                label="State"
                onChange={this.onChangeHandler}
                value={this.state.state===null?"N/A":this.state.state}
                variant="outlined"
                disabled={this.state.disabled===true?true:false}
                fullWidth
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                name="country"
                label="Country"
                onChange={this.onChangeHandler}
                value={this.state.country}
                variant="outlined"
                disabled={this.state.disabled===true?true:false}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="zipCode"
                label="Zip Code"
                onChange={this.onChangeHandler}
                value={this.state.zipCode}
                variant="outlined"
                disabled={this.state.disabled===true?true:false}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
            {this.state.disabled?
            <div>
            <Button 
              onClick={()=>{this.setState( {...this.state,disabled: false})}} 
              style={{margin:"20px 20px"}} 
              variant="contained" 
              color="primary">
                Edit
            </Button>
            </div>
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
         );
    }
}
const mapStateToProps = (state) => {  
    
  return {
      token: state.login.token}
}


export default connect(mapStateToProps)(SingleAddress);