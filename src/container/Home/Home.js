import React, { Component, Fragment } from 'react';
import Spinner from "../../Utility/Spinner/Spinner";
import axios from "axios";
import ProductList from "./ProductList/ProductList";
import CategoryList from "./CategoryList/CategoryList"

class Home extends Component {
    state = { 
        isProductLoading: true,
        isCategoryLoading:true
     }

    async componentDidMount(){
        axios.get(`/home`).then((response) => {
            // console.log(this.state);
            let data = response.data;
            this.setState({ 
                ...this.state,
                isProductLoading: false,
                productData: {...data}
            });
            // return console.log(this.state);
          });

        axios.get(`/open/categories`).then((response) => {
            // console.log(response);
            let data = response.data;
            // console.log("...............",data);
            this.setState({ 
                ...this.state,
                isCategoryLoading: false,
                categoryData: {...data}
            });
            // this.setState({ isLoading: false, groups: data.data[0].name });
            // return console.log(this.state);
          });
      
     }

    

    render() { 
        return ( 
            <Fragment>
                {this.state.isCategoryLoading?<Spinner/>:<CategoryList data = {this.state.categoryData}/>}   
                {this.state.isProductLoading?<Spinner/>:<ProductList data = {this.state.productData}/>}  
                           
            </Fragment>
         );
    }
}
 
export default Home;