import Box from "@mui/material/Box";
import React from "react";

import ComputerCanvas from "./canvas/Computer";

const classes = {
  root: {
    height: "100vh",
  },
};

const Hero = () => {
  return (
    <Box sx={classes.root}>
      <ComputerCanvas />
    </Box>
  );
};

export default Hero;
