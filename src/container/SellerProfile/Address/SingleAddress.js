import React, { Component } from 'react';

import { TextField, Grid} from "@material-ui/core";


class SingleAddress extends Component {
    state = { 
        ...this.props.data,
        disabled:true 
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
                disabled
                fullWidth
              />
            </Grid>
      
            <Grid item xs={12}>
              <TextField
                name="city"
                label="City"
                value={this.state.city===null?"N/A":this.state.city}
                variant="outlined"
                disabled
                fullWidth
              />
            </Grid>
      
            <Grid item xs={12}>
              <TextField
                name="state"
                label="State"
                value={this.state.state===null?"N/A":this.state.state}
                variant="outlined"
                disabled
                fullWidth
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                name="country"
                label="Country"
                value={this.state.country}
                variant="outlined"
                disabled
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="zipCode"
                label="Zip Code"
                value={this.state.zipCode}
                variant="outlined"
                disabled
                fullWidth
              />
            </Grid>

            </Grid>
         );
    }
}


export default SingleAddress;