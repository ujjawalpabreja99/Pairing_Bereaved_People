import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    display: "flex",
    marginTop: "50px",
    marginBottom: "50px"
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography style={{ fontSize: "50px", fontWeight: "100" }}>
        Pairing Bereaved People
      </Typography>
    </Container>
  );
}
