import React ,{Component} from "react";

import {connect} from 'react-redux'
import * as actions from "../../redux/actions/index"

import axios from "axios";

import Spinner from "../../Utility/Spinner/Spinner"


class Logout extends Component {

    componentDidMount(){
        axios({
            method: 'post',
            url: '/dologout'
            ,
            headers: {
              // 'Authorization': `bearer 6d1e9e17-9968-4433-be2c-d892d5244cb9`
              'Authorization': `bearer ${this.props.token}`}
          })
          .then((response)=> {

            this.props.onLogout();
            this.setState({
              isLoading: false
            });
      })
      .catch((error)=>{
    
        alert(`Message: ${error.response.data.message}\n ${error.response.data.details}`);
        
        });
    }

    state = { 
        isLoading:true
     }
    render() { 
        return (
            <div>
            {this.state.isLoading?<Spinner/>:null}
            </div>
          );
    }
}

const mapStateToProps = (state) => {  
    console.log("mapStateToProps token:",state.login.token);
    
    return {
        token: state.login.token}
  }

const mapDispatchToProps = dispatch => {
    return{
        onLogout: () => dispatch(actions.logoutSuccess())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Logout);