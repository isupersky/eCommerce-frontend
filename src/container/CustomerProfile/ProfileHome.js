import React, { Component } from 'react';

import CustomerProfile from "./CustomerProfile"
import AddressList from "./AddressList/AddressList"
import PasswordUpdate from "../PasswordUpdate/PasswordUpdate"

import { Grid, Button, Divider } from "@material-ui/core";


class ProfileHome extends Component {
    state = {
        showProfile :true,
        showAddress: false,
        showPasswordUpdate:false
      }

        onProfileButtonClick=()=>{
            this.setState({
                showProfile:true,
                showAddress:false,
                showPasswordUpdate:false

        });}

        onAddressButtonClick=()=>{
            this.setState({
                showProfile:false,
                showAddress:true,
                showPasswordUpdate:false
    
            });}
        
        onUpdatePasswordButtonClick=()=>{
                this.setState({
                    showProfile:false,
                    showAddress:false,
                    showPasswordUpdate:true
        
                });}
        refreshAddressList=()=>{
            this.setState({
                ...this.state,
                showAddress:false
    
            });
            setTimeout(()=> {
                this.setState({
                    ...this.state,
                    showAddress:true       
                });
            }, 3);
        }

    render() { 
        return ( 

        <Grid container spacing={2}>
            <Grid  item xs={12} sm={2}>
                <Grid style={{margin:"auto auto"}}>
                    {this.state.showAddress===true?
                    <Button
                    style={{margin:"20px auto",padding:"7px 55px"}} 
                    variant="contained" 
                    color="primary"
                    onClick={this.onProfileButtonClick}>Profile</Button>
                    :<Button
                    style={{margin:"20px auto",padding:"7px 55px"}} 
                    variant="contained" 
                    color="primary"
                    onClick={this.onAddressButtonClick}>Address</Button>}
                </Grid>
                <Grid>
                    <Button
                    style={{margin:"20px auto"}} 
                    variant="contained" 
                    color="primary"
                    onClick={this.onUpdatePasswordButtonClick}>Change Password</Button>

                <Divider />
                </Grid>

            </Grid>
            <Grid item xs={12} sm={10}>
                    {this.state.showProfile===true?
                    <CustomerProfile/>:null}
                    {this.state.showAddress===true?
                    <AddressList refreshAddressList={this.refreshAddressList}/>:null}
                    {this.state.showPasswordUpdate===true?
                    <PasswordUpdate/>:null}
            </Grid>
        </Grid>
         );
    }
}
 
export default ProfileHome;
