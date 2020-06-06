import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProductVariation(props) {
  const classes = useStyles();
  

  return (
    <Card onClick={()=>props.setMainVariation(props.keyCount)} className={classes.root}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Price :
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          {props.data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
