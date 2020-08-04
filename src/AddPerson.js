import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
  const handleChange = event => {
    const name = event.target.name;
    setPersonData({
      ...personData,
      [name]: event.target.value
    });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
        <FormControl variant="outlined" style={{ padding: "2px" }}>
          <InputLabel htmlFor="outlined-age-native-simple">Location</InputLabel>
          <Select
            native
            value={personData.location}
            onChange={handleChange}
            label="Location"
            inputProps={{
              name: "location",
              id: "outlined-age-native-simple"
            }}
          >
            <option aria-label="None" value="" />
            <option value={"Delhi"}>Delhi</option>
            <option value={"Maharashtra"}>Maharashtra</option>
            <option value={"Tamil Nadu"}>Tamil Nadu</option>
            <option value={"Uttar Pradesh"}>Uttar Pradesh</option>
            <option value={"Gujarat"}>Gujarat</option>
            <option value={"Rajasthan"}>Rajasthan</option>
            <option value={"Karnataka"}>Karnataka</option>
          </Select>
        </FormControl>
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
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={personData.childLost === true}
              color="primary"
              onChange={() =>
                setPersonData({
                  ...personData,
                  childLost: !personData.childLost
                })
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
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
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
        </div>
      </form>
    </div>
  );
}
