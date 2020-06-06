import React, { Component } from 'react';

import {connect} from "react-redux"
import axios from 'axios'
import SingleCustomer from './SingleCustomer';

class CustomerList extends Component {
    
    state = {
        data:[]
    }

    componentDidMount(){
        axios({
            method:"GET",
            url:"/admin/customers",
            headers:{
                'Authorization': `bearer ${this.props.token}`
            }
        }).then((response)=>{
            console.log(response);
            this.setState({
                ...this.state,
                data : response.data.data
            })
            
        })
    }
    iterateSingleCustomer=()=>{
        // console.log("isme aya");
        // console.log("customerList" ,this.state.data);
        
        let customerList = this.state.data
        return customerList.map((customer)=>{
            console.log("each Customer");
            
            return <SingleCustomer key={customer.id}data={customer}/>
        });
    }
    render() { 
        return ( 
            <div>
            {this.iterateSingleCustomer()}
            </div>
         );
    }
}
const mapStateToProps = (state) => {  
    
    return {
        token: state.login.token
    }
}


export default connect(mapStateToProps)(CustomerList);