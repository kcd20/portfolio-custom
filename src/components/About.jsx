import { Box, Typography } from "@mui/material";
import React from "react";

import ComputerCanvas from "./canvas/Computer";

const classes = {
  root: {
    height: "100vh",
  },
};
const About = () => {
  return (
    <Box sx={classes.root}>
      <Typography>Introduction</Typography>
      <Typography>About Me</Typography>
      <Typography>
        I graduated with a Bachelor's of Arts in Japanese Studies at the
        National University of Singapore. I am currently a contractor doing
        front-end development work at Accenture.
      </Typography>

      <ComputerCanvas />
    </Box>
  );
};

export default About;
