import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth:"33%",
    margin: "10px 10px",
    padding:"2px 2px"
  },
  content: {
    alignSelf: "center",
    // paddingTop:"4px",
    // padding:"1px"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card
      onClick={() => props.setSelectedCategoryOnclick(props.data.id)}
      className={classes.root}
      style={{ background: "#FAEBEFFF" }}
    >
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {props.data.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
