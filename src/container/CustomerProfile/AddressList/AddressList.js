import React, { Component } from 'react';
import SingleAddress from "./SingleAddress"

import axios from 'axios'

import { connect } from 'react-redux'
import { Grid, Divider } from '@material-ui/core';


class AddressList extends Component {
    state = {  }

    componentDidMount(){
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


    iterateProductResponse=()=>{

        let output = [];
        let data = this.state;
        for ( let key in data) { 
            if (this.state.hasOwnProperty(key)) { 
                const value = this.state[key]; 
                console.log("Address LIST PROPS",value); 
                output.push(<Grid item xs={12} sm={4} key={value.id} ><SingleAddress data={value}/><Divider/></Grid>);
            } 
        }
        return output;
    }

    render() { 
        return ( 
            <Grid style={{marginTop:"20px"}} container spacing={2}>
            {this.iterateProductResponse()}
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