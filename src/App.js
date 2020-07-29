import React, { useState } from "react";
import "./styles.css";
import { Container } from "@material-ui/core";
import MenuBar from "./MenuBar";
import RenderPersons from "./RenderPersons";
import { makeStyles } from "@material-ui/core/styles";
import AddPerson from "./AddPerson";
import Generate from "./Generate";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center"
  }
}));

export default function App() {
  const classes = useStyles();
  const [mode, setMode] = useState("");
  const [persons, setPersons] = useState([]);
  const addPerson = personData => {
    setPersons([...persons, personData]);
  };
  console.log(persons);
  return (
    <Container maxWidth="sm" fixed="true" className={classes.root}>
      <MenuBar setMode={setMode} />
      {mode === "add" && <AddPerson addPerson={addPerson} />}
      {mode === "render" && <RenderPersons persons={persons} />}
      {mode === "generate" && <Generate persons={persons} />}
    </Container>
  );
}
