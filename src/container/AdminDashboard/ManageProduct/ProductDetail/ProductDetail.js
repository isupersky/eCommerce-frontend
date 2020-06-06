import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import PrductVariationList from './ProductVariation/ProductVariationlist';
import Grid from '@material-ui/core/Grid';
import Spinner from "../../../../Utility/Spinner/Spinner"

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
  const [isActive, setIsActive] =useState(false);
  
  const [isLoading, setisLoading] = React.useState(true);
  const [response, setResponse] = React.useState({});
  const [mainVariation, setMainVariation] = React.useState(0);

  React.useEffect(() => {
    
    const { productId } = props.match.params
    axios({
      method: "GET",
      url: `/admin/product/${productId}`,
      headers: {
        'Authorization': `bearer ${props.token}`
      }
    }).then((response) => {
          // console.log(response);
          let tempdata = response.data;
          // console.log("...............",tempdata);
          setResponse(tempdata);
          setisLoading(false);
          setIsActive(tempdata.data.Product_details.active)
          
        });
  }, [props.match.params, props.token]);

  const onDeActivateButtonClick=()=>{
    const { productId } = props.match.params

    axios({
      method: "PUT",
      url:`/admin/product/deactivate/${productId}`,
      headers:{
        "Authorization": `Bearer ${props.token}`
      }
    }).then((resp)=>{
      setIsActive(false);
    } ).catch((error)=>{
        alert("Something went wrong")
    })
  }

  const onActivateButtonClick=()=>{
    const { productId } = props.match.params

    console.log("Clicked");
    axios({
      method: "PUT",
      url:`/admin/product/deactivate/${productId}`,
      headers:{
        "Authorization": `Bearer ${props.token}`
      }
    }).then((resp)=>{
      setIsActive(true);

    } ).catch((error)=>{
        alert("Something went wrong")
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
          <input value={response.data.Product_details.description} readOnly/>
          <h5>Cancellable : </h5>
          <input value={response.data.Product_details.cancellable} readOnly/>
          <h5>Returnable : </h5>
          <input value={response.data.Product_details.returnable} readOnly/>
          <h5>ACTIVE : </h5>
          <input value={response.data.Product_details.active} readOnly/>
      </Grid>
      {console.log("ISACTIVE?",response.data.Product_details.active)}

      {isActive?
        <Button
          style={{margin:"auto"}}
          className={(classes.setStyle)}
          onClick={onDeActivateButtonClick}
          variant="contained" color="secondary">
          DeActivate
        </Button>
        :<Button
        style={{margin:"auto"}}
        className={(classes.setStyle)}
        onClick={onActivateButtonClick}
        variant="contained" color="primary">
        Activate
      </Button>}
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

const mapStateToProps = (state) => {  
    
  return {
      token: state.login.token
  }
}
export default withRouter(connect(mapStateToProps)(ProductDetails));
