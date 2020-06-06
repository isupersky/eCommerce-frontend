import React, { Component } from 'react';
import {Grid} from '@material-ui/core';

import {connect} from "react-redux"
import axios from 'axios'
import SingleProduct from './SingleProduct/SingleProduct';

class ProductList extends Component {
    
    state = {
        data:[]
    }

    componentDidMount(){
        axios({
            method:"GET",
            url:"/admin/home",
            headers:{
                'Authorization': `bearer ${this.props.token}`
            }
        }).then((response)=>{
            console.log("STATE before response",response);
            
            this.setState({
                ...this.state,
                data : response.data
            })
            console.log("STATE after response",this.state);
        })
    }
    iterateSingleProduct=()=>{
        // console.log("isme aya");
        // console.log("customerList" ,this.state.data);
        
        let ProductList = this.state.data
        return ProductList.map((Product)=>{
            console.log("each Customer");
            
            return <Grid item xs={12} sm={3} key={Product.id}><SingleProduct data={Product} token={this.props.token}/></Grid>
        });
    }
    render() { 
        return ( 
            <Grid container spacing={2}>
            {this.iterateSingleProduct()}
            </Grid>
         );
    }
}
const mapStateToProps = (state) => {  
    
    return {
        token: state.login.token
    }
}


export default connect(mapStateToProps)(ProductList);