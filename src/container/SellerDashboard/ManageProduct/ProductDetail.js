import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import PrductVariationList from './ProductVariation/ProductVariationlist';
import Grid from '@material-ui/core/Grid';
import Spinner from "../../../Utility/Spinner/Spinner"

import { useHistory } from "react-router-dom";

import axios from "axios";

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



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
  const history = useHistory();

  const [disable, setDisable] = React.useState(true)
  const [isLoading, setisLoading] = React.useState(true);

  const [productDetails, setProductDetails] = React.useState({});
  const [variationsAvailable, setVariationsAvailable] = React.useState({});
  const [mainVariation, setMainVariation] = React.useState(0);

  React.useEffect(() => {
    const { productId } = props.match.params
    axios.get(`/open/product/${productId}`).then((response) => {
          let tempdata = response.data.data;
          setProductDetails(tempdata.Product_details)
          setVariationsAvailable(tempdata.Variations_available)
          setisLoading(false);
        });        
  }, [props.match.params]);


  const onChangeHandler=(e)=>{
    console.log("INITIAL STATE :", productDetails);
     setProductDetails({
       ...productDetails,
       [e.target.name]: e.target.value
     });

     console.log("NEW PRODUCTDETAILS:" ,productDetails);
     
  }

  const onSaveButtonClick=()=>{
    setDisable(true)
    axios({
      method:"PUT",
      url:`/seller/product/update/${productDetails.id}`,
      headers:{
          'Authorization': `bearer ${props.token}`
      },
      data:{
        ...productDetails
      }
  }).then((response)=>{
      console.log("Update Successful");
      
  })
  }

  const onDeleteButtonClick=()=>{
    
    axios({
      method:"DELETE",
      url:`/seller/product/delete/${productDetails.id}`,
      headers:{
          'Authorization': `bearer ${props.token}`
      }
  }).then((response)=>{
    history.push("/SellerProductList");      
  })
  }

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
              {variationsAvailable[mainVariation] ===undefined||
              variationsAvailable[mainVariation].primaryImageName ===null||
              variationsAvailable[mainVariation].primaryImageName ===undefined
              ?
              <p>Image Not Available</p>
            :<img alt="Not Available" width="400vp" src={variationsAvailable[mainVariation].primaryImageName}/>
          }
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
        <Grid container spacing={2}>

      <Grid item xs={12}>
        <form>
          <h5>product Name : </h5>
          <input name="name" onChange={onChangeHandler} value={productDetails.name} disabled={disable}/>
          
          <h5>Brand Name : </h5>
          <input name="brand" onChange={onChangeHandler} value={productDetails.brand} disabled/>
          
          <h5>Description : </h5>
          <textarea name="description" onChange={onChangeHandler} rows = "5" cols = "60"  value={productDetails.description} disabled={disable}/>
          
          <h5>Cancellable : </h5>
          <select name="cancellable" onChange={onChangeHandler} disabled={disable}>
            <option 
              value={productDetails.cancellable}>
                {`${productDetails.cancellable}`}
            </option>

            <option 
              value={!productDetails.cancellable}>
                {`${!productDetails.cancellable}`}
            </option>
          </select>
          
          <h5>Returnable : </h5>
          <select onChange={onChangeHandler} name="returnable"  disabled={disable}>
            <option  
            value={productDetails.returnable}>
            {`${productDetails.returnable}`}
              </option>
            <option 
            value={productDetails.returnable}>
            {`${productDetails.returnable}`}
              </option>
          </select>
          </form>
      </Grid>

      {disable?
      <Grid container spacing={5}>
          <Button variant="contained" color="primary"
            onClick={()=>setDisable(false)} 
            style={{margin:"20px auto"}}>
            Edit
          </Button>
          <Button variant="contained" color="primary"
            onClick={onDeleteButtonClick} 
            style={{margin:"20px auto"}}>
            Delete
          </Button>
      </Grid>
      :<Button variant="contained" color="primary"
      onClick={onSaveButtonClick} 
      style={{margin:"20px auto"}}>
      Save
    </Button>}

    </Grid>
        </Grid>
        <Grid item xs={12}>
        <p>Variations </p>
          <PrductVariationList setMainVariation={setMainVariation} data = {variationsAvailable} />
        </Grid>
      </Grid>}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.login.token
  };
};
export default withRouter(connect(mapStateToProps)(ProductDetails));
