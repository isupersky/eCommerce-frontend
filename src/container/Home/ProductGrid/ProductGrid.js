import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={1}>
  <Grid container item xs={12} spacing={3}>
  <Paper>{props.children}</Paper>
  </Grid>
  <Grid container item xs={12} spacing={3}>
  <Paper>{props.children}</Paper>
  </Grid>
  <Grid container item xs={12} spacing={3}>
  <Paper>{props.children}</Paper>
  </Grid>
</Grid>
    </div>
  );
}
