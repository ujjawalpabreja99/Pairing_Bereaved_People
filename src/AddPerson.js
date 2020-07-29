import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button
} from "@material-ui/core";

const defaultPersonData = {
  name: "",
  location: "",
  age: "",
  childLost: false,
  siblingLost: false,
  parentLost: false,
  disabled: false
};
export default function AddPerson(props) {
  const [personData, setPersonData] = useState(defaultPersonData);

  return (
    <form
      id="addPerson"
      style={{ display: "block" }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        value={personData.name ? personData.name : ""}
        style={{ padding: "2px" }}
        id="name"
        label="Name"
        variant="outlined"
        name="name"
        onChange={e => setPersonData({ ...personData, name: e.target.value })}
      />
      <TextField
        required
        value={personData.location ? personData.location : ""}
        style={{ padding: "2px" }}
        id="location"
        label="Location"
        variant="outlined"
        name="location"
        onChange={e =>
          setPersonData({ ...personData, location: e.target.value })
        }
      />
      <TextField
        required
        value={personData.age ? personData.age : ""}
        style={{ padding: "2px", maxWidth: "150px" }}
        id="age"
        label="Age"
        variant="outlined"
        name="age"
        onChange={e => setPersonData({ ...personData, age: e.target.value })}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={personData.childLost === true}
            color="primary"
            onChange={() =>
              setPersonData({ ...personData, childLost: !personData.childLost })
            }
          />
        }
        label="Child Lost"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={personData.siblingLost === true}
            color="primary"
            onChange={() =>
              setPersonData({
                ...personData,
                siblingLost: !personData.siblingLost
              })
            }
          />
        }
        label="Sibling Lost"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={personData.parentLost === true}
            color="primary"
            onChange={() =>
              setPersonData({
                ...personData,
                parentLost: !personData.parentLost
              })
            }
          />
        }
        label="Parent Lost"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={personData.disabled === true}
            color="primary"
            onChange={() =>
              setPersonData({ ...personData, disabled: !personData.disabled })
            }
          />
        }
        label="Disabled"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (!personData.name || !personData.age || !personData.location) {
            alert("Name, Age and Location are a necessary field");
          } else {
            props.addPerson(personData);
            setPersonData(defaultPersonData);
          }
        }}
      >
        Submit
      </Button>
    </form>
  );
}
