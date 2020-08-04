import React, { useState, useEffect } from "react";
import createPairs from "./PairCreation";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Paper } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%"
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular
//   }
// }));
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    overflow: "auto"
  }
}));
const Generate = () => {
  const classes = useStyles();
  const [pairs, setPairs] = useState([]);
  useEffect(() => {
    const defaultPairs = createPairs(
      JSON.parse(localStorage.getItem("persons"))
    ).sort(function(a, b) {
      return a.fitnessScore - b.fitnessScore;
    });
    setPairs(defaultPairs);
  }, []);
  return (
    <div className={classes.root}>
      {pairs.length === 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography>Generating pairs...</Typography>
        </div>
      )}
      {pairs.length > 0 && (
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>Person 1</Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>Person 2</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Fitness Score</Paper>
          </Grid>
        </Grid>
      )}
      {pairs.map(pair => (
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              Name : {pair.person1.name}
              <br />
              Age : {pair.person1.age}
              <br />
              City : {pair.person1.location}
              <br />
              Child Lost? : {pair.person1.childLost === true ? "Yes" : "No"}
              <br />
              Sibling Lost? : {pair.person1.siblingLost === true ? "Yes" : "No"}
              <br />
              Parent Lost? : {pair.person1.parentLost === true ? "Yes" : "No"}
              <br />
              Disabled? : {pair.person1.disabled === true ? "Yes" : "No"}
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              Name : {pair.person2.name}
              <br />
              Age : {pair.person2.age}
              <br />
              City : {pair.person2.location}
              <br />
              Child Lost? : {pair.person2.childLost === true ? "Yes" : "No"}
              <br />
              Sibling Lost? : {pair.person2.siblingLost === true ? "Yes" : "No"}
              <br />
              Parent Lost? : {pair.person2.parentLost === true ? "Yes" : "No"}
              <br />
              Disabled? : {pair.person2.disabled === true ? "Yes" : "No"}
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper} style={{ height: "156px" }}>
              {pair.fitnessScore}
            </Paper>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default Generate;
