import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

export default function MenuBar(props) {
  const { setMode } = props;
  return (
    <div
      style={{
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="outlined button group"
      >
        <Button onClick={() => setMode("add")}>Add a new person</Button>
        <Button onClick={() => setMode("render")}>View all people</Button>
        <Button onClick={() => setMode("generate")}>Generate pairs</Button>
      </ButtonGroup>
    </div>
  );
}
