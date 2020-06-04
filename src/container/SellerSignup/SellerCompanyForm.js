import React, { Component } from 'react';

//GENERAL
import { TextField, Grid , Divider} from "@material-ui/core";
import { Button } from '@material-ui/core';

class SellerCompanyForm extends Component {
    state = { 
    //     "companyName":"Bluebox",
    //     "gst":"1234",
    //     "companyContact":"123456",
    //     "companyAddress":
    //    {
    //        "city": "Delhi",
    //        "state": "Delhi",
    //        "country": "India",
    //        "addressLine": "B7- Pitmapura",
    //        "zipCode": 110085,
    //        "label": "Home"
    //    }
     }

    

    render() { 
        return ( 
        

    <Grid container spacing={2} style={{ width: "80%", margin: " 20px auto" }}>
       
      <Grid item xs={12}>
        <TextField
          placeholder="Type your Company's Name here"
          name="companyName"
          label="CompanyName"
          value={this.props.data.user.companyName}
          onChange={this.props.onChangeHandler}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 1,
            maxLength: 20,
          }}
        //   error={!!errors["Company Name"]}
          fullWidth
        />
      </Grid>
          
      <Grid item xs={12}>
        <TextField
          placeholder="Type your Company's Contact number here"
          name="companyContact"
          label="companyContact"
          value={this.props.data.user.companyContact}
          onChange={this.props.onChangeHandler}
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
        //   error={!!errors["Contact"]}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder="Type your Company's GST number here"
          name="gst"
          label="gst"
          value={this.props.data.user.gst}
          onChange={this.props.onChangeHandler}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 15,
            maxLength: 15,
          }}
        //   error={!!errors["gst"]}
          fullWidth
        />
      </Grid>    
      <Divider/>   
       <Grid container >
       <Grid item xs={12}>
              <TextField
                placeholder="Type your Company's Address here"
                label="Company Address Line"
                name="addressLine"
                // label="Address Line"
                value={this.props.data.user.companyAddress.addressLine}
                onChange={this.props.onAddressChangeHandler}
                variant="outlined"
                fullWidth
                margin="normal"
                inputProps={{
                    minLength: 1
                  }}
                InputLabelProps={{
                    shrink: true,
                  }}
              />
            </Grid>
      
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        name="city"
                        label="City"
                        placeholder="Type your Company's City here"
                        value={this.props.data.user.companyAddress.city}
                        onChange={this.props.onAddressChangeHandler}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        inputProps={{
                            minLength: 1
                          }}
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="state"
                        label="State"
                        placeholder="Type your Company's State here"
                        value={this.props.data.user.companyAddress.state}
                        onChange={this.props.onAddressChangeHandler}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        inputProps={{
                            minLength: 1
                          }}
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        name="country"
                        label="Country"
                        placeholder="Type your Company's Country here"
                        value={this.props.data.user.companyAddress.country}
                        onChange={this.props.onAddressChangeHandler}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        inputProps={{
                            minLength: 1
                          }}
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        name="zipCode"
                        label="Zip Code"
                        placeholder="Type zipcode here"
                        value={this.props.data.user.companyAddress.zipCode}
                        onChange={this.props.onAddressChangeHandler}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        inputProps={{
                            minLength: 1
                          }}
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
                </Grid> 
            </Grid>

       </Grid>
        <Grid item xs={12}>
            <Button  
              style={{margin:"20px 50px"}} 
              variant="contained" 
              color="primary"
              onClick={this.props.backButtonClickHandler}>
                Back
            </Button>
            <Button 
              onClick={this.props.registerButtonOnClickHandler}      
              style={{margin:"20px 50px"}} 
              variant="contained" 
              color="primary">
                Register
            </Button>
        </Grid>
        </Grid>      
         );
    }
}
 
export default SellerCompanyForm;