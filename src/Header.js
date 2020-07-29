import React from "react";
import { Container, Typography } from "@material-ui/core";

export default class Header extends React.Component {
  render() {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          minWidth: "600px",
          maxWidth: "600px"
        }}
      >
        <Typography style={{ fontSize: "40px", fontWeight: "100" }}>
          Pairing Beareved People
        </Typography>
      </Container>
    );
  }
}
