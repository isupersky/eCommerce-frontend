import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '15px' ,
    marginBottom:"15px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  setStyle: {
    marginLeft: 'auto'
  },
}));


export default function SingleProduct(props) {
  // console.log("value",props.data);
  
  const classes = useStyles();
  const [data, setData] = React.useState(props.data);
  const history = useHistory();

  const onActivateButtonClick = () => {
    axios({
      method: "PUT",
      url:`/admin/product/activate/${props.data.id}`,
      headers:{
        "Authorization": `Bearer ${props.token}`
      }
    }).then((response)=>{
      setData({
        ...data,
        is_active:true
      })
    } ).catch((error)=>{
        alert("Something went wrong")
    })  
  };

  const onDeActivateButtonClick=()=>{
    // console.log("CLicked")

    axios({
      method: "PUT",
      url:`/admin/product/deactivate/${props.data.id}`,
      headers:{
        "Authorization": `Bearer ${props.token}`
      }
    }).then((response)=>{
      setData({
        ...data,
        is_active:false
      })
    } ).catch((error)=>{
        alert("Something went wrong")
    })
    
  }

  const onDetailsButtonClick=(id)=>{
    
    history.push(`/AdminProductDetail/${props.data.id}`);
  }

  return (
    <Card  className={classes.root}>
      <CardHeader
        title={data.name}
        subheader={data.brand}
      />
      <CardContent>
      <div style={{ minHeight:"100px"}}>
        <Typography variant="body2" color="textSecondary" component="p">
         {data.description}
        </Typography>
        </div>
      </CardContent>

      <CardActions disableSpacing>
        {data.is_cancellable?
        <Button variant="contained" disabled>
          Cancellable
        </Button>
        :<Button variant="contained" disabled>
         Non-Cancellable
        </Button>}

        <Button
          className={(classes.setStyle)}
          onClick={onDetailsButtonClick}
           color="primary">
          Details
        </Button>
      </CardActions>

      <CardActions disableSpacing>

        {data.is_returnable?
        <Button variant="contained" disabled>
          Returnable
        </Button>
        :<Button variant="contained" disabled>
         Non-Returnable
        </Button>}

        {data.is_active?
        <Button
          className={(classes.setStyle)}
          onClick={onDeActivateButtonClick}
          variant="contained" color="secondary">
          DeActivate
        </Button>
        :<Button
        className={(classes.setStyle)}
        onClick={onActivateButtonClick}
        variant="contained" color="primary">
        Activate
      </Button>}

      </CardActions>
      
    </Card>
  );
}
