import React, { Component, Fragment } from 'react';
import Spinner from "./ProductGrid/ProductGrid";
import axios from "axios";
import ProductGrid from "./ProductGrid/ProductGrid";

class Home extends Component {
    state = { 
        isLoading: true
     }

    async componentDidMount(){
        axios.get(`/home`).then((response) => {
            // console.log(this.state);
            let data = response.data;
            this.setState({ 
                ...this.state,
                isLoading: false,
                data: {...data}
            });
            return console.log(this.state);
          });
     }

    

    render() { 
        return ( 
            <Fragment>
                {this.state.isLoading?<Spinner/>:null}
                <ProductGrid>Test Data</ProductGrid>
               
            </Fragment>
         );
    }
}
 
export default Home;