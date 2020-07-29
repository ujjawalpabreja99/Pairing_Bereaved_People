import React from "react";
import createPairs from "./PairCreation";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function Generate(persons) {
  const pairs = createPairs(persons);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {pairs.length === 0 && <Typography>No pairs found!</Typography>}
      {pairs.map(pair => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {pair.person1.name} and {pair.person2.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h3>Person 1</h3>
              <br />
              Age : {pair.person1.age}
              <br />
              Location : {pair.person1.location}
              <br />
              Child Lost? : {pair.person1.childLost === true ? "Yes" : "No"}
              <br />
              Sibling Lost? : {pair.person1.siblingLost === true ? "Yes" : "No"}
              <br />
              Parent Lost? : {pair.person1.parentLost === true ? "Yes" : "No"}
              <br />
              Disabled? : {pair.person1.disabled === true ? "Yes" : "No"}
              <br />
              <h3>Person 2</h3>
              <br />
              Age : {pair.person2.age}
              <br />
              Location : {pair.person2.location}
              <br />
              Child Lost? : {pair.person2.childLost === true ? "Yes" : "No"}
              <br />
              Sibling Lost? : {pair.person2.siblingLost === true ? "Yes" : "No"}
              <br />
              Parent Lost? : {pair.person2.parentLost === true ? "Yes" : "No"}
              <br />
              Disabled? : {pair.person2.disabled === true ? "Yes" : "No"}
              <br />
              <h3> Fitness Score </h3>
              {pair.fitnessScore}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
