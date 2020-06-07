import React, { Component } from 'react';
import axios from "axios"
import {connect} from "react-redux"
import { TextField, Grid, Button} from "@material-ui/core";



class AddAddress extends Component {
    state = {
        name: "",
        description: "",
        categoryId: "",
        isCancellable: "",
        isReturnable: "",
        brand: "",
        categoryList:{}
      }

      componentDidMount(){
        axios(
            {   method:"Get",
                url: "/open/categories"                    
                })
        .then((response) => {
            this.setState({
                ...this.state,
                categoryList: response.data.data
            })
            // console.log(this.state.categoryList);
            
        })
        .catch(function (error) {
        //   console.log("Error Cought", error.response.data);
          if (error.response) {
            alert(`${error.response.data.message}\n ${error.response.data.details}` );
          } else if (error.request) {
            console.log(error.details);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });

        
      }


    showCategories=()=>{
        let output = [];
        
        for (let key in this.state.categoryList) {
            let value = this.state.categoryList[key];
            output.push(<TextField disabled fullWidth key={value.id} value={`Category Id: ${value.id} || Category Name: ${value.name}  `}/>)
          }
          return output;
    }

    onChangeHandler=(e)=>{

        this.setState({
          ...this.state,
         [e.target.name]: e.target.value
        });
        
      }

      AddButtonClickHandler=()=>{
        axios(
            {   method:"POST",
                url: "/seller/add-product", 
                data: {
                    ...this.state
                },
                headers: {
                    'Authorization': `bearer ${this.props.token}`
                }
                    
                })
        .then((response) => {
            alert("Product Added");
            this.setState({});
        })
        .catch(function (error) {
          if (error.response) {
            alert(`${error.response.data.message}\n ${error.response.data.details}` );
          } else if (error.request) {
            console.log(error.details);
          } else {
            console.log("Error", error.message);
          }
        });
      }

    render() { 
        return ( 
            <Grid style={{width:"95%", margin:"auto"}} container spacing={2}>
            <Grid item xs={12} sm={4}>
            <div>
                {this.showCategories()}
            </div>

            </Grid>
            <Grid item xs={12} sm={4}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="name"
                margin="normal"
                value={this.state.name}
                onChange={this.onChangeHandler}
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="brand"
                label="brand"
                margin="normal"
                value={this.state.brand}
                onChange={this.onChangeHandler}
                variant="outlined"
                fullWidth
              />
            </Grid>
      
            <Grid item xs={12}>
              <TextField
                name="description"
                label="description"
                margin="normal"
                value={this.state.description}
                onChange={this.onChangeHandler}
                variant="outlined"
                fullWidth
              />
            </Grid>
      
            <Grid item xs={12}>
              <TextField
                name="categoryId"
                label="categoryId"
                margin="normal"
                value={this.state.categoryId}
                onChange={this.onChangeHandler}
                variant="outlined"
                fullWidth
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                name="isCancellable"
                label="isCancellable"
                margin="normal"
                value={this.state.coisCancellableuntry}
                onChange={this.onChangeHandler}
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="isReturnable"
                label="isReturnable"
                margin="normal"
                value={this.state.isReturnable}
                onChange={this.onChangeHandler}
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
            <Button 
            onClick={this.AddButtonClickHandler} 
            style={{margin:"20px auto"}} 
            variant="contained" 
            color="primary">
              Add
              </Button>
      
            </Grid>
            </Grid>
          </Grid>
         );
    }
}
const mapStateToProps = (state) => {  
    
    return {
        token: state.login.token
    }
}


export default connect(mapStateToProps)(AddAddress);