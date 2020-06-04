import React, { Component } from 'react';

import { TextField, Grid, Button} from "@material-ui/core";



class AddAddress extends Component {
    state = {
        addressLine: "",
        city: "",
        country: "",
        label: "",
        state: "",
        zipCode: "",
      }

    onChangeHandler=(e)=>{

        this.setState({
          ...this.state,
         [e.target.name]: e.target.value
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
            <Button 
            onClick={()=>this.props.AddButtonClickHandler(this.state)} 
            style={{margin:"20px auto"}} 
            variant="contained" 
            color="primary">
              Add
              </Button>
      
            </Grid>

          </Grid>
         );
    }
}
 
export default AddAddress;