import React, { Component } from 'react';
import {Link } from "react-router-dom";

import {Card,Grid,Typography,CardContent} from '@material-ui/core';


class CategoryManageHome extends Component {
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

            
                <Grid item xs={12} sm={6}>
                <Link to="/CategoryList">
                    <Card style={this.cardStyle} >
                    <CardContent>
                        <Typography style={this.contentStyle} variant="h5" component="h2">
                            View Category
                        </Typography>
                        </CardContent>
                    </Card>
                </Link> 
                </Grid>
                
                <Grid item xs={12} sm={6}>
                <Link to="/CategoryMetadataList">
                    <Card style={this.cardStyle}>
                    <CardContent>
                        <Typography style={this.contentStyle} variant="h5" component="h2">
                            view Category Metadata
                        </Typography>
                        </CardContent>
                    </Card>
                </Link>
                </Grid>
            </Grid>
         );
    }
}
 
export default CategoryManageHome;