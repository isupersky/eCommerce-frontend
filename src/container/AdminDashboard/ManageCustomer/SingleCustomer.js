import React, { Component } from 'react';

import {connect} from "react-redux"
import axios from "axios";

import {Card,List, ListItem,ListItemText,ListItemSecondaryAction,Button} from '@material-ui/core';

class SingleCustomer extends Component {
    state = { 
        ...this.props.data
     }

    onActivateClick=()=>{
        axios({
            method:"PATCH",
            url:`/admin/activate/${this.state.id}`,
            headers:{
                'Authorization': `bearer ${this.props.token}`
            }
        }).then((response)=>{
            this.setState({
                ...this.state,
                is_active: true
            });
        })
    }

    onDeActivateClick=()=>{
        axios({
            method:"PATCH",
            url:`/admin/deactivate/${this.state.id}`,
            headers:{
                'Authorization': `bearer ${this.props.token}`
            }
        }).then((response)=>{
            this.setState({
                ...this.state,
                is_active: false
            });
        })
    }
     
    render() { 
        return ( 
            <Card style={{margin:"5px"}}>
                {console.log("SINGLE CUSTOMER LIST",this.props)}
                
                <List>
                        <ListItem>
                            <ListItemText primary={this.state.first_name} secondary="First Name"/>
                            <ListItemText 
                            primary={this.state.middle_name===null?"N/A":this.state.middle_name} 
                            secondary="Middle Name" />
                            <ListItemText primary={this.state.last_name} secondary="Last Name"/>
                            <ListItemText primary={this.state.contact} secondary="Contact"/>
                            <ListItemText primary={this.state.email} secondary="Email"/>
                            <ListItemSecondaryAction>
                                {!this.state.is_active?
                                <Button variant="contained" color="primary" onClick={this.onActivateClick}>
                                   ACTIVATE 
                                </Button>
                                :<Button variant="contained" color="secondary" onClick={this.onDeActivateClick}>
                                DEACTIVATE 
                             </Button>}
                            </ListItemSecondaryAction>
                        </ListItem>
                </List>
               
            </Card>
         );
    }
}

const mapStateToProps = (state) => {  
    
    return {
        token: state.login.token
    }
}


export default connect(mapStateToProps)(SingleCustomer);