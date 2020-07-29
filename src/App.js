import React, { useState, useEffect } from "react";
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

const defaultPersons = [
  {
    name: "Rahul",
    location: "Delhi",
    age: "25",
    childLost: false,
    siblingLost: true,
    parentLost: false,
    disabled: true
  },

  {
    name: "Jyoti",
    location: "Maharashtra",
    age: "38",
    childLost: true,
    siblingLost: false,
    parentLost: true,
    disabled: false
  },
  {
    name: "Sagar",
    location: "Uttar Pradesh",
    age: "30",
    childLost: false,
    siblingLost: true,
    parentLost: false,
    disabled: false
  },
  {
    name: "Rahul",
    location: "Gujarat",
    age: "42",
    childLost: true,
    siblingLost: false,
    parentLost: true,
    disabled: false
  },
  {
    name: "Radhika",
    location: "Tamil Nadu",
    age: "19",
    childLost: false,
    siblingLost: false,
    parentLost: false,
    disabled: true
  },
  {
    name: "Abhishek",
    location: "Delhi",
    age: "28",
    childLost: false,
    siblingLost: false,
    parentLost: true,
    disabled: false
  },
  {
    name: "Varun",
    location: "Karnataka",
    age: "32",
    childLost: true,
    siblingLost: false,
    parentLost: true,
    disabled: true
  },
  {
    name: "Rashi",
    location: "Rajasthan",
    age: "45",
    childLost: true,
    siblingLost: true,
    parentLost: false,
    disabled: false
  },
  {
    name: "Pratyush",
    location: "Karnataka",
    age: "18",
    childLost: false,
    siblingLost: false,
    parentLost: true,
    disabled: false
  },
  {
    name: "Shubham",
    location: "Gujarat",
    age: "50",
    childLost: false,
    siblingLost: false,
    parentLost: true,
    disabled: true
  },
  {
    name: "Vidya",
    location: "Maharashtra",
    age: "36",
    childLost: true,
    siblingLost: false,
    parentLost: false,
    disabled: false
  },
  {
    name: "Ankit",
    location: "Uttar Pradesh",
    age: "15",
    childLost: false,
    siblingLost: true,
    parentLost: true,
    disabled: false
  },
  {
    name: "Deepak",
    location: "Delhi",
    age: "53",
    childLost: true,
    siblingLost: false,
    parentLost: false,
    disabled: false
  },
  {
    name: "Anjali",
    location: "Tamil Nadu",
    age: "20",
    childLost: false,
    siblingLost: true,
    parentLost: false,
    disabled: false
  },
  {
    name: "Manisha",
    location: "Rajasthan",
    age: "40",
    childLost: true,
    siblingLost: false,
    parentLost: false,
    disabled: true
  },
  {
    name: "Karan",
    location: "Uttar Pradesh",
    age: "12",
    childLost: false,
    siblingLost: false,
    parentLost: true,
    disabled: false
  },
  {
    name: "Simran",
    location: "Gujarat",
    age: "8",
    childLost: false,
    siblingLost: false,
    parentLost: true,
    disabled: true
  },
  {
    name: "Mukesh",
    location: "Maharashtra",
    age: "60",
    childLost: true,
    siblingLost: false,
    parentLost: true,
    disabled: true
  },
  {
    name: "Rashmi",
    location: "Uttar Pradesh",
    age: "29",
    childLost: true,
    siblingLost: false,
    parentLost: false,
    disabled: false
  },
  {
    name: "Kavita",
    location: "Karnataka",
    age: "44",
    childLost: true,
    siblingLost: false,
    parentLost: false,
    disabled: true
  },
  {
    name: "Vijay",
    location: "Delhi",
    age: "21",
    childLost: false,
    siblingLost: false,
    parentLost: true,
    disabled: true
  }
];

export default function App() {
  const classes = useStyles();
  const [mode, setMode] = useState("");
  const [persons, setPersons] = useState(defaultPersons);

  const addPerson = personData => {
    let tempPersons = persons;
    tempPersons.push(personData);
    setPersons(tempPersons);
    localStorage.setItem("persons", JSON.stringify(persons));
  };
  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);

  return (
    <Container maxWidth="sm" fixed="true" className={classes.root}>
      <MenuBar setMode={setMode} />
      {mode === "add" && <AddPerson addPerson={addPerson} />}
      {mode === "render" && <RenderPersons />}
      {mode === "generate" && <Generate />}
    </Container>
  );
}
