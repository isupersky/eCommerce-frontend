import React, { Component } from 'react';

import {connect} from "react-redux"
import axios from 'axios'
import SingleSeller from './SingleSeller';

class SellerList extends Component {
    
    state = {
        data:[]
    }

    componentDidMount(){
        axios({
            method:"GET",
            url:"/admin/sellers",
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
    iterateSingleSeller=()=>{
        
        let sellerList = this.state.data
        return sellerList.map((seller)=>{
            
            return <SingleSeller key={seller.id} data={seller}/>
        });
    }
    render() { 
        return ( 
            <div>
            {this.iterateSingleSeller()}
            </div>
         );
    }
}
const mapStateToProps = (state) => {  
    
    return {
        token: state.login.token
    }
}


export default connect(mapStateToProps)(SellerList);