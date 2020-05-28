import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import SingleCategory from "./SingleCategory/SingleCategory";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
}));

export default function SingleLineGridList(props) {
  const classes = useStyles();

  let iterateProductResponse = () => {
    let output = [];
    let data = props.data.data;
    for (let key in data) {
      let value = data[key];

      output.push(
        <SingleCategory data={value} key={value.id}></SingleCategory>
      );
    }
    return output;
  };

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {iterateProductResponse()}
      </GridList>
    </div>
  );
}
