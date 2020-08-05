import React, { useState, useEffect } from "react";
import "./styles.css";
import { Container } from "@material-ui/core";
import MenuBar from "./MenuBar";
import RenderPersons from "./RenderPersons";
import { makeStyles } from "@material-ui/core/styles";
import AddPerson from "./AddPerson";
import Generate from "./Generate";
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
    let tempPersons = JSON.parse(localStorage.getItem("persons"));
    tempPersons.push(personData);
    localStorage.setItem("persons", JSON.stringify(tempPersons));
  };

  // useEffect(() => {
  //   localStorage.setItem("persons", JSON.stringify(persons));
  // }, [persons]);
  console.log("DEF", JSON.parse(localStorage.getItem("persons")));
  return (
    <Container maxWidth="lg" fixed="true" className={classes.root}>
      <MenuBar setMode={setMode} />
      {mode === "add" && <AddPerson addPerson={addPerson} />}
      {mode === "render" && <RenderPersons />}
      {mode === "generate" && <Generate />}
    </Container>
  );
}
