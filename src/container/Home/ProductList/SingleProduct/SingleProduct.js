import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import noImage from "../../../../assets/no-image-available-icon.png"

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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function SingleProduct(props) {
  // console.log("value",props.data);
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const history = useHistory();

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setTimeout(function () {
        setExpanded(expanded);
    }, 300);
    
  };

  onselect=(id)=>{
    // console.log(id);
    
    history.push(`/ProductDetail/${id}`);
  }

  return (
    <Card onClick={()=>onselect(props.data.ProductId)} className={classes.root}>
      <CardHeader
        title={props.data.ProductName}
        subheader={props.data.Brand}
      />
      <CardMedia
        className={classes.media}
        image={props.data.Image===undefined||props.data.Image===null?noImage:props.data.Image} 
        // image={noImage} 

        title={props.data.ProductName}
      >
          {/* <img src = {noImage}/> */}
      </CardMedia>
      <CardContent>
      <div style={{minWidth:"300px", minHeight:"100px"}}>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.data.Description}
        </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2" color="textPrimary" component="p">
        MRP: Rs.{props.data.Price}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}
