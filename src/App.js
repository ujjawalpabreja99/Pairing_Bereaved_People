import React, { useState } from "react";
import "./styles.css";
import { Container } from "@material-ui/core";
import MenuBar from "./MenuBar";
import RenderPersons from "./RenderPersons";
import { makeStyles } from "@material-ui/core/styles";
import AddPerson from "./AddPerson";
import GeneratePairs from "./GeneratePairs";
import DataGeneration from "./DataGeneration";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center"
  }
}));

const defaultPersons = DataGeneration();

export default function App() {
  const classes = useStyles();
  const [mode, setMode] = useState("");
  const [persons, setPersons] = useState(defaultPersons);

  const addPerson = personData => {
    let tempPersons = persons;
    tempPersons.push(personData);
    setPersons(tempPersons);
  };

  return (
    <Container maxWidth="lg" fixed="true" className={classes.root}>
      <MenuBar setMode={setMode} />
      {mode === "add" && <AddPerson addPerson={addPerson} />}
      {mode === "render" && <RenderPersons persons={persons} />}
      {mode === "generate" && <GeneratePairs persons={persons} />}
    </Container>
  );
}
