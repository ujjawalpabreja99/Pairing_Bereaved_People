import React from "react";
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
export default function RenderPersons(props) {
  const persons = props.persons;
  const classes = useStyles();
  console.log(persons);
  return (
    <div className={classes.root}>
      {persons.map(person => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{person.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Age : {person.age}
              <br />
              Location : {person.location}
              <br />
              Child Lost? : {person.childLost === true ? "Yes" : "No"}
              <br />
              Sibling Lost? : {person.siblingLost === true ? "Yes" : "No"}
              <br />
              Parent Lost? : {person.parentLost === true ? "Yes" : "No"}
              <br />
              Disabled? : {person.disabled === true ? "Yes" : "No"}
              <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
