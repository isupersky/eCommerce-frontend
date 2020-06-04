import React, { Component } from 'react';
import SingleAddress from "./SingleAddress"

import axios from 'axios'

import { connect } from 'react-redux'

import { Grid, Divider } from '@material-ui/core';
import AddAddress from  "./AddAddress"


class AddressList extends Component {
    state = {  }

    componentDidMount(){
        this.apiCall();
    }
    apiCall=()=>{
        axios({   
            method: 'GET',
            url: `/customer/addresses`,
            headers: {
            // 'Authorization': `bearer 6d1e9e17-9968-4433-be2c-d892d5244cb9`
            'Authorization': `bearer ${this.props.token}`
    
    }
              })
                .then((response)=> {
                    this.setState({
                        ...this.state,
                        ...response.data.data
                    });
    
                console.log("RESPONSE ",response);
                console.log("RESPONSE.data.data ",this.state);
    
              });
    }
    latestKey=0;
    iterateProductResponse=()=>{

        let output = [];
        let data = this.state;
        for ( let key in data) { 
            if (data.hasOwnProperty(key)) { 
                const value = data[key]; 
                this.latestKey=key;
                console.log(key); 
                output.push(<Grid item xs={12} sm={4} key={value.id} 
                     >
                        <SingleAddress data={value} refreshAddressList={this.props.refreshAddressList}/><Divider/></Grid>);
            } 
        }
        return output;
    }

    AddButtonClickHandler=(address)=>{

        axios({   
            method: 'Post',
            url: `/customer/new-address`,
            data: {
                city: `${address.city}`,
                state: `${address.state}`,
                country: `${address.country}`,
                addressLine: `${address.addressLine}`,
                zipCode: `${address.zipCode}`,
                label: `${address.label}`

    
            },
            headers: {
            // 'Authorization': `bearer 6d1e9e17-9968-4433-be2c-d892d5244cb9`
            'Authorization': `bearer ${this.props.token}`
    
    }
              })
                .then((response)=> {
                    this.setState({
                        ...this.state,
                        [this.latestKey+1]:address

                    });

                    this.props.refreshAddressList();
              });
        
    }

    render() { 
        return ( 
            <Grid style={{marginTop:"20px"}} container spacing={2}>
            {this.iterateProductResponse()}
            <Grid item xs={12} sm={4} >
            <AddAddress AddButtonClickHandler={this.AddButtonClickHandler}/>
            <Divider/>
            </Grid>
            </Grid>
         );
    }
}
const mapStateToProps = (state) => {  
    
    return {
        token: state.login.token,
        role: state.login.role}
}


export default connect(mapStateToProps)(AddressList);