import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";

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
export default function RenderPersons(props) {
  const persons = props.persons;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {persons.length === 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography>No person found!</Typography>
        </div>
      )}
      {persons.length > 0 && (
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Name</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>Age</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>City</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Child Lost</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Parent Lost</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Sibling Lost</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>Disabled</Paper>
          </Grid>
        </Grid>
      )}
      {persons.map(person => (
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Paper className={classes.paper}>{person.name}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>
              {person.age < 1 ? `< 1` : `${person.age}`}
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>{person.location}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              {person.childLost === true ? "Yes" : "No"}
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              {person.parentLost === true ? "Yes" : "No"}
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              {person.siblingLost === true ? "Yes" : "No"}
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>
              {person.disabled === true ? "Yes" : "No"}
            </Paper>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
