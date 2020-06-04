import React, { Component } from 'react';

import axios from "axios"

import SellerDetailForm from "./SellerDetailForm"
import SellerCompanyForm from "./SellerCompanyForm"


class SellerSignup extends Component {
    state = { 
        user: {
            "email": "",
            "firstName": "",
            "middleName": "",
            "lastName": "",
            "password": "",
            "contact": "",
            "companyName":"",
            "gst":"",
            "companyContact":"",
            "companyAddress":
                {
                    "city": "",
                    "state": "",
                    "country": "",
                    "addressLine": "",
                    "zipCode": "",
                    "label": "Company"
                }
             },
          errors: {},
          formNumber:1
     }

    registerButtonOnClickHandler =()=>{
        console.log(this.state);
        console.log("enters registerButtonOnClickHandler");
        

        axios.post(`/seller/register`,{
               ...this.state.user
            })
          .then((response)=> {
            console.log("Registered");
            alert(`Registration Successfull\n please Wait before Admin activates your account`);
      })
      .catch((error)=>{
          
        if (error.response.status===302) {
            alert(`${error.response.data.message}`);
        }
        else{
            alert(`${error.response.data.message}\n 
            ${error.response.data.details}`);
        }
        });
  
        
    }
    nextButtonClickHandler=(data)=>{
        
        if(data.password!==undefined &&data.password===data.confirmPassword){
            this.setState({
                ...this.state,
                user:{
                    ...this.state.user,
                    ...data
                },
                formNumber:2
            })
        }
        else
        alert("please make sure password and confirm Password matches and has alphanumeric and special keyword")
    }
    backButtonClickHandler=()=>{   
        this.setState({
            ...this.state,
            formNumber:1
        })
    }
    onChangeHandler=(e)=>{
    this.setState({
        ...this.state,
        user:{
            ...this.state.user,
            [e.target.name]: e.target.value
        }
        
    });
    }
    onAddressChangeHandler=(e)=>{
    this.setState({
        ...this.state,
        user:{
            ...this.state.user,
            companyAddress:{
                ...this.state.user.companyAddress,
                [e.target.name]: e.target.value
            }
        }
        
    });
    }

    render() { 
        return ( 
            <form style={{ width: "80%", margin: " 20px auto" }}>
                {this.state.formNumber===1?

                <SellerDetailForm 
                nextButtonClickHandler={this.nextButtonClickHandler}
                onChangeHandler={this.onChangeHandler}
                data={this.state}
                />:null}
                
                {this.state.formNumber===2?

                <SellerCompanyForm
                backButtonClickHandler={this.backButtonClickHandler}
                registerButtonOnClickHandler={this.registerButtonOnClickHandler}
                onChangeHandler={this.onChangeHandler}
                onAddressChangeHandler={this.onAddressChangeHandler}
                data={this.state}
                />:null}
            </form>
         );
    }
}
 
export default SellerSignup;