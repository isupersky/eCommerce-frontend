import React, { Component } from 'react';
import {Link } from "react-router-dom";

// import CustomerList from "./ManageCustomer/CustomerList"

import {Card,Grid,Typography,CardContent,AppBar} from '@material-ui/core';


class AdminDashboard extends Component {
    state = {  }

    rootStyle={
        width: "80%",
        height: "60%",
        margin: "auto",
        marginTop:"40px"
    }

    cardStyle={
        minHeight:"100px",
        paddingTop:'Auto'
    }

    contentStyle={marginTop:"10px"}

    headStyle={
        minHeight:"40px",
        fontSize:"40px"
        }


    render() { 
        return ( 
            <Grid style={this.rootStyle} container spacing={8}>

                <AppBar position="relative">
                <Typography variant="h6" style={this.headStyle} >
                     Welcome Admin
                </Typography>
                </AppBar>

                <Grid item xs={12} sm={6}>
                <Link to="/CustomerList">
                    <Card style={this.cardStyle} >
                    <CardContent>
                        <Typography style={this.contentStyle} variant="h5" component="h2">
                            MANAGE CUSTOMER
                        </Typography>
                        </CardContent>
                    </Card>
                </Link> 
                </Grid>
                
                <Grid item xs={12} sm={6}>
                <Link to="/SellerList">
                    <Card style={this.cardStyle}>
                    <CardContent>
                        <Typography style={this.contentStyle} variant="h5" component="h2">
                            MANAGE SELLER
                        </Typography>
                        </CardContent>
                    </Card>
                </Link>
                </Grid>
                

                <Grid item xs={12} sm={6}>
                    <Link to="/ProductList">
                    <Card style={this.cardStyle}>
                    <CardContent>
                        <Typography style={this.contentStyle} variant="h5" component="h2">
                            MANAGE PRODUCT
                        </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Link to="/CategoryManageHome">
                    <Card style={this.cardStyle}>
                    <CardContent>
                        <Typography style={this.contentStyle} variant="h5" component="h2">
                            MANAGE CATEGORY
                        </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>

            </Grid>
         );
    }
}
 
export default AdminDashboard;