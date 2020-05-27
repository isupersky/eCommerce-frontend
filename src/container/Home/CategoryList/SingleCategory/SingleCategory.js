import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    // minHeight: 100
    margin: "10px 10px",
  },
  content: {
    alignSelf: "center",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  // console.log(props);

  const classes = useStyles();

  return (
    // <Button size="large">
    <Card onClick={() => console.log("clicked")} className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {props.data.name}
        </Typography>

        {/* <Typography variant="body2" component="p">
            Mens
          </Typography> */}
      </CardContent>
    </Card>
    // </Button>
  );
}
