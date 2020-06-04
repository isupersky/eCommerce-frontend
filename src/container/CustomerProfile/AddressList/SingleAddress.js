import React, { Component } from 'react';

import { TextField, Grid, Button} from "@material-ui/core";

import { connect } from 'react-redux';

import axios from "axios";

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
            url: `/customer/update-address/${this.state.id}`,
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

    deleteButtonOnClick=()=>{
      console.log("deleteButtonOnClick this.state",this.state);

      axios({
          method: 'delete',
          url: `/customer/delete-address/${this.state.id}`,
          headers: {
            // 'Authorization': `bearer 6d1e9e17-9968-4433-be2c-d892d5244cb9`
            'Authorization': `bearer ${this.props.token}`}
        })
        .then((response)=> {
          console.log("Delete Successfull");
          alert(`Delete Successfull`);
          this.props.refreshAddressList();
    })
    .catch((error)=>{
          alert(`Something Went Wrong`);
      
      });

         }
    
     
    render() { 
        return ( 
            <Grid style={{width:"80%"}} container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="addressLine"
                label="Address Line"
                value={this.state.addressLine}
                onChange={this.onChangeHandler}
                variant="outlined"
                disabled={this.state.disabled?true:null}
                fullWidth
              />
            </Grid>
      
            <Grid item xs={12}>
              <TextField
                name="city"
                label="City"
                value={this.state.city===null?"N/A":this.state.city}
                onChange={this.onChangeHandler}
                variant="outlined"
                disabled={this.state.disabled?true:null}
                fullWidth
              />
            </Grid>
      
            <Grid item xs={12}>
              <TextField
                name="state"
                label="State"
                value={this.state.state===null?"N/A":this.state.state}
                onChange={this.onChangeHandler}
                variant="outlined"
                disabled={this.state.disabled?true:null}
                fullWidth
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                name="country"
                label="Country"
                value={this.state.country}
                onChange={this.onChangeHandler}
                variant="outlined"
                disabled={this.state.disabled?true:null}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="zipCode"
                label="Zip Code"
                value={this.state.zipCode}
                onChange={this.onChangeHandler}
                variant="outlined"
                disabled={this.state.disabled?true:null}
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
            <Button 
              onClick={this.deleteButtonOnClick} 
              style={{margin:"20px 20px"}} 
              variant="contained" 
              color="primary">
                Delete
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