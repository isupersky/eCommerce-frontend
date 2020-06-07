import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import PrductVariationList from './ProductVariation/ProductVariationlist';
import Grid from '@material-ui/core/Grid';
import Spinner from "../Utility/Spinner/Spinner"

import axios from "axios";

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../redux/actions/index';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"5px 5px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperLeft: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight:"200px"
  },
}));

const ProductDetails=(props)=> {
  const classes = useStyles();
  
  const [isLoading, setisLoading] = React.useState(true);
  const [response, setResponse] = React.useState({});
  const [mainVariation, setMainVariation] = React.useState(0);

  React.useEffect(() => {
    
    const { productId } = props.match.params
    axios.get(`/open/product/${productId}`).then((response) => {
          // console.log(response);
          let tempdata = response.data;
          // console.log("...............",tempdata);
          setResponse(tempdata);
          setisLoading(false);
        });
  }, [props.match.params]);

  return (
      
    <div style={{marginTop:"50px"}} className={classes.root}>
      {isLoading?<Spinner/>:
      <Grid container spacing={3}>
        <Grid style={{background:"grey"}} item xs={12}>
          <Paper className={classes.paper}>
              Product Details
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paperLeft}>
              {response.data.Variations_available[mainVariation] ===undefined||
              response.data.Variations_available[mainVariation].primaryImageName ===null||
              response.data.Variations_available[mainVariation].primaryImageName ===undefined
              ?
              <p>Image Not Available</p>
            :<img alt="Not Available" width="400vp" src={response.data.Variations_available[mainVariation].primaryImageName}/>
          }
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
        <Grid container spacing={2}>
      <Grid item xs={12}>
          <h5>product Name : </h5>
          <input value={response.data.Product_details.name} readOnly/>
          <h5>Brand Name : </h5>
          <input value={response.data.Product_details.brand} readOnly/>
          <h5>Description : </h5>
          <textarea value={response.data.Product_details.description} rows = "5" cols = "60"   readOnly/>
          <h5>Cancellable : </h5>
          <input value={response.data.Product_details.cancellable} readOnly/>
          <h5>Returnable : </h5>
          <input value={response.data.Product_details.returnable} readOnly/>
      </Grid>
      <Button variant="contained" color="primary" onClick={()=>{
        console.log("ADD TO CART CLICKED",response.data.Variations_available[mainVariation]);    
        props.onAddToCart(
        response.data.Variations_available[mainVariation])}}
        style={{margin:"20px auto"}}>
        ADD TO CART
      </Button>
    </Grid>
        </Grid>
        <Grid item xs={12}>
        <p>Variations </p>
          <PrductVariationList setMainVariation={setMainVariation} data = {response.data.Variations_available} />
        </Grid>
      </Grid>}
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return{
      onAddToCart: (item) => dispatch(actions.addToCart(item))
  }
}
export default withRouter(connect(null,mapDispatchToProps)(ProductDetails));
